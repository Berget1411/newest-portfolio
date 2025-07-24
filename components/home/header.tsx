"use client";
import { motion } from "motion/react";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <motion.header
      className="mb-8 flex items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Image
          src="/portrait.jpeg"
          alt="Ludvig Bergström"
          width={80}
          height={80}
          className="rounded-lg"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: 0.4,
            ease: "easeOut",
          },
        }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Link href="/" className="font-medium text-black dark:text-white">
          Ludvig Bergström
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.8}
        >
          Fullstack Developer, Applied AI, Finance & Management
        </TextEffect>
      </motion.div>
    </motion.header>
  );
}
