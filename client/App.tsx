import React from "react";
import "./global.css";

import { Toaster } from "../client/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "../client/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import Plants from "./pages/Plants";
import Trees from "./pages/Trees";
import Flowers from "./pages/Flowers";
import Seeds from "./pages/Seeds";
import About from "./pages/About";
import CareGuide from "./pages/CareGuide";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Auth routes (no header/footer) */}
            <Route path="/auth" element={<Auth />} />

            {/* Main app routes (with header/footer) */}
            <Route path="/*" element={
              <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/plants" element={<Plants />} />
                    <Route path="/trees" element={<Trees />} />
                    <Route path="/flowers" element={<Flowers />} />
                    <Route path="/seeds" element={<Seeds />} />
                    <Route path="/care-guide" element={<CareGuide />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
                    <Route path="/shipping" element={<PlaceholderPage title="Shipping Info" />} />
                    <Route path="/returns" element={<PlaceholderPage title="Returns & Exchanges" />} />
                    <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
                    <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
                    <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
