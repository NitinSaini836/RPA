// import "./App.css";
// import Department from "./components/departmentComponent/Department";
// // import LoginForm from "./components/login/login";

// function App() {
//   return (
//     // <div></div>
//     <div className="App">
//       {/* <LoginForm></LoginForm> */}
//       <Department />
//     </div>
//   );
// }

// export default App;

import LoginForm from "./components/Login-Signup/login";
import Department from "./components/Department/Department";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      path: "/department",
      element: <Department />
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;