import { Header } from "@/components/Header";
import { Options } from "@/components/Options";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {" "}
      <Header />{" "}
      <main className="">
        <section id="options">
          <Options />
        </section>
      </main>
    </div>
  );
}
