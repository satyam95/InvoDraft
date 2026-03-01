import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

const StepItem = ({ title, description }: Props) => {
  return (
    <div className="flex items-start gap-5 transition-all duration-300 group-hover:translate-x-2">
      <div className="w-18 h-18 border border-2 border-[#E3E6FB] rounded-xl bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <Image src="/tick-circle.png" alt="shield 1" width={40} height={40} />
      </div>
      <div className="flex-1 space-y-3">
        <h3 className="text-[#000000] font-semibold text-2xl transition-colors duration-300 group-hover:text-[#08186A]">
          {title}
        </h3>
        <p className="text-[#717171] text-lg transition-opacity duration-300 group-hover:opacity-90">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepItem;
