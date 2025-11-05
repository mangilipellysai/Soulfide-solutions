import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  useEffect(() => {
    document.title = "Soulfide Solutions Pvt Ltd - RFID Manufacturers";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
