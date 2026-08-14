
"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 lg:py-20 bg-transparent">

      {/* BACKGROUND GLOWS REMOVED */}

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 space-y-12 pt-8 md:pt-12">

        {/* HEADING OUTSIDE THE BOX */}
        <div className="flex flex-col items-start">

          {/* Overline Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-1.5
              rounded-full
              bg-[#6748FE]/10
              border
              border-[#6748FE]/30
              text-[#A78BFA]
              text-xs
              font-semibold
              tracking-wider
              uppercase
              mb-6
              w-fit
            "
          >
            <Sparkles className="w-3.5 h-3.5" />

            <span>Who we are</span>
          </div>


          {/* Main Heading */}
          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              text-white
              tracking-[0.04em] sm:tracking-tight
              leading-[1.1]
            "
          >
            How we{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#818cf8]
                to-[#6748FE]
                tracking-[0.04em] sm:tracking-normal
              "
            >
              started
            </span>
          </h2>

        </div>


        {/* CONTENT */}
        <div className="relative">

          <div className="relative z-10 flex flex-col items-start">

            {/* Paragraphs */}
            <div
              className="
                space-y-6
                text-slate-300
                leading-relaxed
                font-normal
                text-base
                md:text-lg
              "
            >

              <p className="m-0">
                SEABRAND AI was founded with a simple yet ambitious belief:
                the future of branding is no longer driven by creativity
                alone—it is driven by strategy, intelligence, and continuous
                innovation.
              </p>

              <p className="m-0">
                As businesses embrace digital transformation, traditional
                branding methods are no longer enough to compete in an
                AI-driven world. Brands need more than attractive designs or
                marketing campaigns—they need a structured ecosystem that
                connects strategy, branding, communication, and growth.
              </p>

              <p className="m-0">
                That&apos;s why SEABRAND AI was created.
              </p>

              <p className="m-0">
                Recognized as Kerala&apos;s First AI Strategic Branding
                Curator, SEABRAND AI introduces an AI-first strategic branding
                ecosystem that helps businesses, startups, professionals, and
                creators build meaningful, scalable, and future-ready brands.
              </p>


              {/* CORE PILLARS */}
              <div className="pt-2">

                <p className="m-0 font-medium text-white mb-2">
                  Our methodology is built on three core pillars:
                </p>

                <p
                  className="
                    m-0
                    font-bold
                    text-xl
                    text-[#A78BFA]
                  "
                >
                  AI + Strategy + Curation
                </p>

              </div>


              <p className="m-0">
                By combining strategic thinking with intelligent workflows and
                creative execution, we help brands position themselves with
                clarity, build stronger customer connections, and achieve
                sustainable growth.
              </p>

              <p className="m-0">
                At SEABRAND AI, we don&apos;t simply deliver branding
                services—we build strategic ecosystems designed for long-term
                business success.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}