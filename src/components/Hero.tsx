"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-text fade-in-up">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">
            Mohammed Mazhar <span className="accent">Ali Shawon</span>
          </h1>
          <p className="hero-title">Software Engineer</p>
          <p className="hero-desc">
            Passionate software engineer with expertise in building scalable web
            applications, high-performance backend services, and beautiful user
            interfaces. I love turning complex problems into elegant solutions.
          </p>
          <div className="hero-actions">
            <a
              href="https://drive.google.com/file/d/1Y0aJIXmHHyJjOlhu9s-NDIqzHOAuWguD/view?usp=drive_link"
              target="_blank"
              className="btn btn-primary"
            >
              📄 Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch →
            </a>
          </div>
        </div>
        <div className="hero-image-container fade-in-up delay-2">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow" />
            <Image
              src={theme === "light" ? "/light-coder.png" : "/dark-coder.png"}
              alt="Developer coding"
              width={480}
              height={480}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
