import Head from "next/head";
import Image from "next/image";
import bg from "../public/snowBg.webp";
import Banner from "../components/Banner";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import titleBanner from "../components/titleBanner";
import TitleBanner from "../components/titleBanner";
import Nav from "../components/Nav";

export default function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
      <div
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Image
          src={bg}
          alt="Mountains with snow"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <AnimatePresence>
        <Nav />
        <div className="container">
          <section>
            <div className="content">
              <Banner />
            </div>
          </section>

          <section>
            <div className="content">
              <div className="title">who</div>
            </div>
          </section>

          <section>
            <div className="content">
              <div className="title">work</div>
            </div>
          </section>
        </div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}
