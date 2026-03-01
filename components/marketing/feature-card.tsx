import Image from "next/image";
import Link from "next/link";

interface Props {
  icon: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: Props) {
  return (
    <article className="relative border border-2 border-[#E3E6FB] rounded-xl py-6 px-5 overflow-hidden">
      <div className="relative space-y-11 z-20">
        <div className="w-18 h-18 border border-2 border-[#E3E6FB] rounded-xl bg-white flex items-center justify-center">
          <Image src={icon} alt="shield 1" width={40} height={40} />
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-black leading-[1.5] text-[22px] font-semibold">
              {title}
            </h3>
            <p className="text-[#717171] text-lg leading-[1.5]">
              {description}
            </p>
          </div>
          <Link
            href="#"
            className="text-lg font-semibold text-gradient"
          >
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
