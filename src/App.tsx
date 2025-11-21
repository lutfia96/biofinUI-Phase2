import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import {
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "./App.css";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 3,
      networkMode: "always",
      placeholderData: keepPreviousData,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <Toaster />*/}
      {/* <Sooner />  */}
    </QueryClientProvider>
  );
}

export default App;
