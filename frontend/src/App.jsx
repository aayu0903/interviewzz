import { useUser, useAuth } from "@clerk/clerk-react"; // Combined imports
import { Navigate, Route, Routes } from "react-router";
import { useEffect } from "react";
import axiosInstance, { setupAxiosInterceptors } from "./lib/axios";
import HomePage from "./pages/HomePage";

import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage";
import ProblemPage from "./pages/ProblemPage";
import ProblemsPage from "./pages/ProblemsPage";
import SessionPage from "./pages/SessionPage";

function App() {
  const { getToken } = useAuth();
  // FIX: Destructure these from useUser so they are defined below
  const { isLoaded, isSignedIn } = useUser(); 

  useEffect(() => {
    // This connects Clerk's token generator to your Axios instance
    if (isLoaded && isSignedIn) {
      setupAxiosInterceptors(getToken);
    }
  }, [getToken, isLoaded, isSignedIn]);

  // this will get rid of the flickering effect
  if (!isLoaded) return null;

  return (
    <>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />

        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />} />
        <Route path="/problem/:id" element={isSignedIn ? <ProblemPage /> : <Navigate to={"/"} />} />
        <Route path="/session/:id" element={isSignedIn ? <SessionPage /> : <Navigate to={"/"} />} />
      </Routes>

      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;