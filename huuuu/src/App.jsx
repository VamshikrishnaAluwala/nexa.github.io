import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NewProject from "./pages/NewProject";
import BRDCreationStep from "./pages/BRDCreationStep";
import BRDCreationLoading from "./pages/BRDCreationLoading";
import BRDCreated from "./pages/BRDCreated";
import PRDCreation from "./pages/PRDCreation";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/new-project":
        title = "";
        metaDescription = "";
        break;
      case "/brdcreationstep1":
        title = "";
        metaDescription = "";
        break;
      case "/brdcreationloading":
        title = "";
        metaDescription = "";
        break;
      case "/brdcreated":
        title = "";
        metaDescription = "";
        break;
      case "/prdcreation":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-project" element={<NewProject />} />
      <Route path="/brdcreationstep1" element={<BRDCreationStep />} />
      <Route path="/brdcreationloading" element={<BRDCreationLoading />} />
      <Route path="/brdcreated" element={<BRDCreated />} />
      <Route path="/prdcreation" element={<PRDCreation />} />
    </Routes>
  );
}
export default App;