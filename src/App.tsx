import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./lib/AuthContext";
import { WishlistProvider } from "./lib/WishlistContext";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CustomOrders from "./pages/CustomOrders";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Testimonials from "./pages/Testimonials";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import GiftWrapping from "./pages/services/GiftWrapping";
import ExpressDelivery from "./pages/services/ExpressDelivery";
import GiftCards from "./pages/services/GiftCards";
import CustomOrdersService from "./pages/services/CustomOrders";
import CorporateGifting from "./pages/services/CorporateGifting";
import TrustBadges from "./components/TrustBadges";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <WishlistProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/auth" element={<Auth />} />
                <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
                  <Route index element={<Home />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="wishlist" element={<Wishlist />} />
                  <Route path="custom-orders" element={<CustomOrders />} />
                  <Route path="gallery" element={<Gallery />} />
                  <Route path="about" element={<About />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="faq" element={<FAQ />} />
                  <Route path="testimonials" element={<Testimonials />} />
                  <Route path="privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="terms-of-service" element={<TermsOfService />} />
                  <Route path="services">
                    <Route path="gift-wrapping" element={<GiftWrapping />} />
                    <Route path="express-delivery" element={<ExpressDelivery />} />
                    <Route path="gift-cards" element={<GiftCards />} />
                    <Route path="custom-orders" element={<CustomOrdersService />} />
                    <Route path="corporate-gifting" element={<CorporateGifting />} />
                  </Route>
                </Route>
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </WishlistProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
