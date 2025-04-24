import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import StudentDashboard from "../src/components/StudentDashboard";
import StudentProfile from "../src/components/StudentProfile";
import SchedulePage from "../src/components/SchedulePage";
import ApplyForJobs from "../src/components/ApplyForJobs";
import JobApplied from "../src/components/JobApplied";
import JobDetails from "../src/components/jobView/JobDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/profile",
        element: <StudentProfile />,
      },
      {
        path: "/schedule",
        element: <SchedulePage />,
      },
      {
        path: "/apply-for-jobs",
        element: <ApplyForJobs />,
        children: [
          {
            path: "/apply-for-jobs/job-details/:id",
            element: <JobDetails />,
          },
        ],
      },
      {
        path: "/applied-jobs",
        element: <JobApplied />,
      },
    ],
  },
]);

export default router;
