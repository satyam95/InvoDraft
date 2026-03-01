import Image from "next/image";

interface Props {
  title: string;
  description: string;
}

const StepItem = ({ title, description }: Props) => {
  return (
    <div className="flex items-top gap-5">
      <div className="w-18 h-18 border border-2 border-[#E3E6FB] rounded-xl bg-white flex items-center justify-center">
        <Image src="/tick-circle.png" alt="shield 1" width={40} height={40} />
      </div>
      <div className="flex-1 space-y-3">
        <h3 className="text-[#000000] font-semibold text-2xl">{title}</h3>
        <p className="text-[#717171] text-lg">{description} </p>
      </div>
    </div>
  );
};

export default StepItem;
