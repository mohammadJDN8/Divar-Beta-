import { BrowserRouter } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Router from "./Router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import defaultOptions from "./configs/reactQuery";

function App() {
  const queryClient = new QueryClient({ defaultOptions });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
