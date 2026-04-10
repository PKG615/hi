import { createBrowserRouter } from "react-router";

// Public Pages
import { LandingPage } from "./pages/public/LandingPage";
import { SignupPage } from "./pages/SignupPage";

// Student Pages
import { StudentLayout } from "./pages/student/StudentLayout";
import { StudentDashboard } from "./pages/student/StudentDashboard";
import { MyRoadmaps } from "./pages/student/MyRoadmaps";
import { MyCourses } from "./pages/student/MyCourses";
import { CoursePlayer } from "./pages/student/CoursePlayer";
import { AIAssistant } from "./pages/student/AIAssistant";
import { Assignments } from "./pages/student/Assignments";
import { Certificates } from "./pages/student/Certificates";
import { Leaderboard } from "./pages/student/Leaderboard";
import { Mentorship } from "./pages/student/Mentorship";
import { RoadmapExplorer } from "./pages/student/RoadmapExplorer";
import { RoadmapDetail } from "./pages/student/RoadmapDetail";

// Admin Pages (LMS Admin)
import { AdminLayout } from "./pages/admin/AdminLayout";
import { Dashboard } from "./pages/admin/Dashboard";
import { Users } from "./pages/admin/Users";
import { Settings } from "./pages/admin/Settings";
import { CourseManagement } from "./pages/admin/CourseManagement";
import { RoadmapManagement } from "./pages/admin/RoadmapManagement";
import { Analytics } from "./pages/admin/Analytics";

// University/Institution Pages
import { UniversityLayout } from "./pages/university/UniversityLayout";
import { UniversityDashboard } from "./pages/university/UniversityDashboard";
import { LicenseManagement } from "./pages/university/LicenseManagement";
import { StudentManagement } from "./pages/university/StudentManagement";
import { FacultyManagement } from "./pages/university/FacultyManagement";
import { DepartmentManagement } from "./pages/university/DepartmentManagement";
import { UniversityAnalytics } from "./pages/university/UniversityAnalytics";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/signup",
    Component: SignupPage,
  },
  {
    path: "/student",
    Component: StudentLayout,
    children: [
      { index: true, Component: StudentDashboard },
      { path: "roadmaps", Component: MyRoadmaps },
      { path: "roadmaps/explore", Component: RoadmapExplorer },
      { path: "roadmaps/:id", Component: RoadmapDetail },
      { path: "courses", Component: MyCourses },
      { path: "courses/:id", Component: CoursePlayer },
      { path: "ai-assistant", Component: AIAssistant },
      { path: "assignments", Component: Assignments },
      { path: "certificates", Component: Certificates },
      { path: "leaderboard", Component: Leaderboard },
      { path: "mentorship", Component: Mentorship },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "users", Component: Users },
      { path: "courses", Component: CourseManagement },
      { path: "roadmaps", Component: RoadmapManagement },
      { path: "analytics", Component: Analytics },
      { path: "settings", Component: Settings },
    ],
  },
  {
    path: "/university",
    Component: UniversityLayout,
    children: [
      { index: true, Component: UniversityDashboard },
      { path: "licenses", Component: LicenseManagement },
      { path: "students", Component: StudentManagement },
      { path: "faculty", Component: FacultyManagement },
      { path: "departments", Component: DepartmentManagement },
      { path: "analytics", Component: UniversityAnalytics },
    ],
  },
]);
