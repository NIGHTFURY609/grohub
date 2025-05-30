"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import loadingimg from "../public/loading.png";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        <Image src={loadingimg} alt="loading image" />
      </motion.div>
    </div>
  );
}
