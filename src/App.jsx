import { BrowserRouter } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Router from "./Router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
