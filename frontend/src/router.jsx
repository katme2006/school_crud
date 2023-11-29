import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import {Home} from "./pages/Home";
import { SubjectsPage } from "./pages/SubjectsPage";
import { ASubjectPage } from "./pages/ASubjectPage";
import { StudentsPage } from "./pages/StudentsPage";
import { AStudentPage } from "./pages/AStudentPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
            path: "subjects",
            element: <SubjectsPage/>
        },
        {
          path:"subjects/:subject_name",
          element: <ASubjectPage/>
        },
        {
          path:"students",
          element:<StudentsPage/>
        },
        {
          path:"students/:id",
          element:<AStudentPage/>
        }
      ],
    },
  ]);
  
  export default router;