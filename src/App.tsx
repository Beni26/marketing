import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import store from "./store";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <div>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Route>
          </Routes>
        </div>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
