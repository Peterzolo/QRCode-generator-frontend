import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import CompleteSignUp from "./pages/auth/completeSignup";
// import AdminHome from "./pages/portal/admin";
// import TeacherHome from "./pages/portal/teacher";
// import StudentHome from "./pages/portal/student";
// import PortalLayout from "./components/layout/portalLayout";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/theme/Theme";
import MovieList from "./pages/movie/movieList/MovieList";
import { configureAppStore } from "./store/configureStore";
import { QrCode } from "./pages/qrCode";

const store = configureAppStore();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "movies",
        element: <MovieList />,
      },
      {
        path: "qr-code",
        element: <QrCode />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);
