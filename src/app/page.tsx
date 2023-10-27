import { Footer } from "@/components/Footer";
import { GraphicsSection } from "@/components/GraphicsSection";
import { Header } from "@/components/Header";
import { Options } from "@/components/Options";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <ToastContainer />
      <Header />{" "}
      <main className="">
        <section id="options">
          <Options />
        </section>
        <section>
          <GraphicsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
