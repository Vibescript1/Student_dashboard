import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import StudentDashboard from "./components/StudentDashboard";
import { useLocation, Navigate } from "react-router-dom";
const App = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [pathname]);
  if (pathname === "/" || pathname === "/student-dashboard") {
    return <Navigate to="/profile" />;
  }
  return (
    <div className="h-screen flex overflow-hidden">
      <Header />
      <div
        className={`${
          pathname === "/apply-for-jobs"
            ? "pt-16 overflow-hidden"
            : "pt-16 overflow-auto"
        } flex-1`}
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <StudentDashboard />
        )}
      </div>
    </div>
  );
};

export default App;
