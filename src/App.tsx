import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProfileLayout from "./features/Dashboard/Profile/ProfileLayout.tsx";
import ProtectedRoute from "./ui/ProtectedRoute.tsx";
import { Dashboard } from "./pages/Dashboard";
import MyOrders from "./pages/MyOrders.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <div>
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/shop/:id" element={<Shop />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route
                element={
                  <ProtectedRoute>
                    <ProfileLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="/my-account" element={<Dashboard />} />
                <Route path="/my-account/orders" element={<MyOrders />} />
              </Route>
            </Routes>
          </div>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
