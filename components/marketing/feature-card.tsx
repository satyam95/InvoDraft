import Image from "next/image";
import Link from "next/link";

interface Props {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: Props) {
  return (
    <article className="relative border border-2 border-[#E3E6FB] rounded-xl py-6 px-5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 hover:scale-[1.02] active:scale-100">
      <div className="relative space-y-11 z-20 transition-transform duration-300 group-hover:translate-y-[-4px]">
        <div className="w-18 h-18 border border-2 border-[#E3E6FB] rounded-xl bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Image src={icon} alt="shield 1" width={40} height={40} />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-black leading-[1.5] text-[22px] font-semibold transition-colors duration-300 group-hover:text-[#08186A]">
              {title}
            </h3>
            <p className="text-[#717171] text-lg leading-[1.5] transition-opacity duration-300 group-hover:opacity-90">
              {description}
            </p>
          </div>
          <Link href="#" className="text-lg font-semibold text-gradient inline-block transition-all duration-300 group-hover:translate-x-1.5">
            Learn More
          </Link>
        </div>
      </div>
      <div
        aria-hidden
        className="w-[230px] h-[202px] absolute top-0 right-0 z-0 rounded-tr-xl blur-md bg-card-gradient"
      />
    </article>
  );
}
