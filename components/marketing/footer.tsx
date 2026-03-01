import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-[#060609]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container mx-auto py-20">
        <div className="space-y-18">
          <section
            aria-labelledby="footer-cta-heading"
            className="bg-[#2F2F2F]/28 rounded-3xl px-10 py-15 border border-[#D1D1D1]/20"
          >
            <div className="flex items-center justify-between">
              <h3
                id="footer-cta-heading"
                className="text-white font-semibold text-[56px] leading-[84px] max-w-[592px]"
              >
                Unlock Your Path to Financial Success
              </h3>

              <Link href="/signup">
                <Button
                  className="text-lg h-14 rounded-xl font-medium py-4 px-10 bg-btn-gradient gap-4 cursor-pointer"
                  aria-label="Get started with our platform"
                >
                  Get Started
                  <Image
                    src="/right-arrow.png"
                    alt=""
                    aria-hidden
                    width={60}
                    height={16}
                  />
                </Button>
              </Link>
            </div>
          </section>
          <div className="flex justify-between items-top">
            <section className="space-y-6 max-w-[396px]">
              <Link href="/" aria-label="Go to homepage">
                <Image
                  src="/logo-white.png"
                  alt="Company logo"
                  height={40}
                  width={120}
                />
              </Link>

              <div className="space-y-4">
                <p className="text-[#BDBDBD] text-lg">
                  Subscribe now and be the first to know about Fancy updates!
                </p>

                <form
                  className="bg-[#2F2F2F]/28 px-4 py-2 rounded-3xl flex items-center border border-[#D1D1D1]/20"
                  aria-label="Newsletter subscription"
                >
                  <Input
                    id="email"
                    type="email"
                    required
                    aria-label="Email address"
                    placeholder="Email Address"
                    className="p-0 pl-1 placeholder:text-[#D1D1D1] text-[#D1D1D1] h-full flex-1 border-transparent focus:border-transparent focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 outline-none"
                  />

                  <Button
                    type="submit"
                    className="text-sm leading-[20px] h-11 rounded-xl font-medium py-3 px-8 bg-btn-gradient cursor-pointer"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </section>
            <nav
              aria-label="Footer navigation"
              className="flex justify-end items-top gap-16"
            >
              <section className="space-y-4">
                <h3 className="font-medium text-2xl text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-[#B8B8B8] text-lg">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-[#B8B8B8] text-lg">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="font-medium text-2xl text-white">
                  Privacy Policy
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/disclaimer" className="text-[#B8B8B8] text-lg">
                      Disclaimer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-[#B8B8B8] text-lg"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-[#B8B8B8] text-lg">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </section>
            </nav>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-10 text-sm text-[#B8B8B8] text-center">
        &copy; 2026 Your Company Name. All Rights Reserved.
      </div>
    </footer>
  );
}
