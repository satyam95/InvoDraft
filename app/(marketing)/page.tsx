import Image from "next/image";

import { Button } from "@/components/ui/button";

import { FeatureCard } from "@/components/marketing/feature-card";
import { TestimonialMarquee } from "@/components/marketing/marquee";
import StepItem from "@/components/marketing/step-item";

import { features, steps, testimonials } from "@/data/landing";

export default function Home() {
  return (
    <main>
      <section className="relative isolate">
        <div className="container relative z-50 mx-auto px-23 pt-14">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-[56px] leading-[84px] text-center font-semibold text-[#060609]">
                Expert Planning, Smart Investing, Secure Management -
                <span className="bg-[linear-gradient(90deg,#08186A_100%)] bg-clip-text text-transparent italic">
                  All in one Platform
                </span>
              </h1>
              <p className="text-center text-lg text-[#717171] px-40">
                Get instant access to the best financial planning, asset
                management and investment solutions for your financial future.
                Take control of your financial journey with us.
              </p>
            </div>
            <div className="flex justify-center items-center gap-8 pointer-events-auto relative z-[999]">
              <Button className="text-lg h-14 rounded-xl font-medium py-4 px-10 bg-btn-gradient cursor-pointer">
                Get Started
              </Button>
              <Button className="text-lg h-14 rounded-xl font-medium py-4 px-10 hover:bg-transparent border bg-transparent text-[#08186A] border-2 border-[#08186A] cursor-pointer">
                Watch Us
              </Button>
            </div>
          </div>
        </div>
        <div className="relative pointer-events-none select-none">
          <div className="absolute left-0 bottom-0 bg-[#060609] w-full h-72 z-10 pointer-events-none select-none"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#6E82ED]/25 blur-xl w-[1100px] h-[972px] rounded-full z-0 pointer-events-none select-none"></div>
          <Image
            src="/dashboard.png"
            alt="dashboard"
            height={822}
            width={1157}
            className="relative mx-auto z-20 pb-12"
          />
        </div>
      </section>
      <section>
        <div className="container mx-auto pt-20 pb-10">
          <div className="flex flex-col items-center gap-6">
            <div className="py-2 px-4 flex items-center gap-3 border rounded-full border-2 border-[#E3E6FB]">
              <div className="bg-[linear-gradient(90deg,#08186A_100%)] h-2.5 w-2.5 rounded-full" />
              <div className="text-lg font-semibold bg-[linear-gradient(90deg,#08186A_100%)] bg-clip-text text-transparent">
                Features Overview
              </div>
            </div>
            <h2 className="text-[#171717] font-semibold leading-[62px] text-4xl">
              Powerful Features at Your Fingertips
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, idx) => (
                <FeatureCard
                  key={idx}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-10">
          <div className="flex flex-col items-center gap-6">
            <div className="py-2 px-4 flex items-center gap-3 border rounded-full border-2 border-[#E3E6FB]">
              <div className="text-lg font-semibold bg-[linear-gradient(90deg,#08186A_100%)] bg-clip-text text-transparent">
                How it Works
              </div>
            </div>
            <h2 className="text-[#171717] font-semibold leading-[62px] text-4xl">
              Your Path to Financial Success
            </h2>
            <div className="flex items-center gap-20 w-full">
              <div className="flex-1">
                {steps.map((step, index) => (
                  <div key={step.title}>
                    <StepItem {...step} />
                    {index < steps.length - 1 && (
                      <div className="h-px w-full bg-[#D5DBFA] my-8" />
                    )}
                  </div>
                ))}
              </div>
              <div className="bg-[#060609] w-[610px] h-[607px] rounded-3xl relative">
                <div className="absolute top-6 left-8 flex items-center gap-3">
                  <div className="rounded-full w-5 h-5 bg-[#FF5A52]" />
                  <div className="rounded-full w-5 h-5 bg-[#E6C02A]" />
                  <div className="rounded-full w-5 h-5 bg-[#53C22B]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto pb-20 pt-10">
          <div className="flex flex-col items-center gap-6">
            <div className="py-2 px-4 flex items-center gap-3 border rounded-full border-2 border-[#E3E6FB]">
              <div className="text-lg font-semibold bg-[linear-gradient(90deg,#08186A_100%)] bg-clip-text text-transparent">
                Testimonial
              </div>
            </div>
            <h2 className="text-[#171717] font-semibold leading-[62px] text-4xl">
              Real Stories, Real Success
            </h2>
            <TestimonialMarquee
              testimonials={testimonials}
              speed={20}
              pauseOnHover
            />
          </div>
        </div>
      </section>
    </main>
  );
}
