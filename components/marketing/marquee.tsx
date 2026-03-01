"use client";

import Image from "next/image";
import { ReactNode, CSSProperties } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function Marquee({
  children,
  speed = 40,
  pauseOnHover = false,
  className = "",
}: MarqueeProps) {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marquee var(--speed) linear infinite;
        }

        .marquee-container:hover .marquee-track.pause-on-hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className={`marquee-container relative w-full overflow-hidden ${className}`}
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className={`marquee-track flex w-max gap-4 ${
            pauseOnHover ? "pause-on-hover" : ""
          }`}
          style={{ "--speed": `${speed}s` } as CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </>
  );
}

export interface Testimonial {
  name: string;
  content: string;
  rating: number;
  avatar?: string;
}

export function TestimonialCard({
  name,
  content,
  rating,
  avatar,
}: Testimonial) {
  return (
    <div className="bg-[#ECEFFD] px-6 py-8 border border-[#D9D9D9] space-y-5 rounded-2xl max-w-[480px] shrink-0 flex flex-col justify-between">
      <p className="text-[#717171] text-lg">“{content}”</p>
      <div className="space-y-5">
        <div
          className="w-full h-px mx-auto"
          style={{
            background:
              "radial-gradient(circle, rgba(18,20,78,1) 0%, rgba(18,20,78,0) 100%)",
          }}
        />
        <div className="flex items-center gap-4">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={56}
              height={56}
              className="rounded-full"
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-black/40" />
          )}

          <div>
            <h3 className="text-lg font-medium text-[#171717]">{name}</h3>

            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Image
                  key={i}
                  src={i < rating ? "/filled-star.png" : "/empty-star.png"}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function TestimonialMarquee({
  testimonials,
  speed = 40,
  pauseOnHover = true,
  className = "",
}: TestimonialMarqueeProps) {
  return (
    <div className={`w-full overflow-hidden py-4 ${className}`}>
      <Marquee speed={speed} pauseOnHover={pauseOnHover}>
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </Marquee>
    </div>
  );
}
