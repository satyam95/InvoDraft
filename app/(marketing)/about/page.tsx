import { FeatureBadge } from "@/components/marketing/feature-badge";

export default function About() {
  return (
    <main>
      <section className="pt-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto flex justify-center">
            <div className="bg-[#060609] w-[1157px] h-[400px] rounded-3xl flex items-center justify-center">
              <span className="text-[#717171] text-lg">
                GIF / Visual Placeholder
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-20">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
            <FeatureBadge text="About Us" showCircle />
            <h2 className="text-[#171717] font-semibold leading-[62px] text-4xl">
              Who We Are & What We Stand For
            </h2>
            <div className="space-y-5 text-[#717171] text-lg leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                viverra, risus sed facilisis pretium, tortor libero tristique
                nulla, sit amet vulputate lorem lacus nec elit.
              </p>
              <p>
                Integer dignissim, sapien non gravida cursus, lectus purus
                fermentum sapien, non congue justo tortor non odio. Duis
                ultricies justo in erat feugiat, in placerat orci efficitur.
              </p>
              <p>
                Sed euismod, lacus id feugiat elementum, metus lorem volutpat
                purus, nec gravida sapien risus non lorem. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <p>
                We believe in building simple, secure, and scalable financial
                systems that empower people to make confident decisions and
                create long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
