export default function About() {
  return (
    <main>
      {/* Visual / GIF Placeholder Section */}
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

      {/* About Content Section */}
      <section>
        <div className="container mx-auto py-20">
          <div className="max-w-4xl mx-auto flex flex-col gap-8 text-center">
            <div className="py-2 px-4 mx-auto flex items-center gap-3 border rounded-full border-2 border-[#E3E6FB]">
              <div className="bg-[linear-gradient(90deg,#08186A_100%)] h-2.5 w-2.5 rounded-full" />
              <div className="text-lg font-semibold bg-[linear-gradient(90deg,#08186A_100%)] bg-clip-text text-transparent">
                About Us
              </div>
            </div>

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
                purus, nec gravida sapien risus non lorem. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
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