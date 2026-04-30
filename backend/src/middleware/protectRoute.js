import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const auth = req.auth();
      const clerkId = auth?.userId;

      if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

      const claims = auth.sessionClaims || {};

      const emailFromClaims =
        claims.email ||
        claims.email_address ||
        claims.primary_email_address?.email_address ||
        null;

      // try to find user either by Clerk ID or email to avoid duplicates
      let user =
        (await User.findOne({ clerkId })) ||
        (emailFromClaims ? await User.findOne({ email: emailFromClaims }) : null);

      if (!user) {
        const email = emailFromClaims || `${clerkId}@example.com`;

        const firstName = claims.first_name || claims.given_name || "";
        const lastName = claims.last_name || claims.family_name || "";
        const name = `${firstName} ${lastName}`.trim() || email;

        const profileImage = claims.image_url || claims.avatar_url || "";

        try {
          user = await User.create({
            clerkId,
            email,
            name,
            profileImage,
          });
        } catch (err) {
          // handle race / duplicate email: fetch existing user instead
          if (err.code === 11000 && emailFromClaims) {
            user = await User.findOne({ email: emailFromClaims });
          } else {
            throw err;
          }
        }
      } else {
        // ensure Clerk ID is synced if we matched by email only
        if (user.clerkId !== clerkId) {
          user.clerkId = clerkId;
          await user.save();
        }
      }

      // attach user to req
      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
