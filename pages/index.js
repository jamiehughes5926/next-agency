import Head from "next/head";
import Image from "next/image";
import bg from "../public/snowBg.webp";
import Banner from "../components/Banner";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import titleBanner from "../components/titleBanner";
import TitleBanner from "../components/titleBanner";
import Layout from "./layout";

export default function Home() {
  return (
    <div>
      <Layout />
    </div>
  );
}
