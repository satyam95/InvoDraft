import { FeatureBadge } from "@/components/marketing/feature-badge";

export default function Contact() {
  return (
    <main>
      <section>
        <div className="container mx-auto py-24">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
            <FeatureBadge text="Contact Us" showCircle />
            <h1 className="text-[#171717] font-semibold leading-[62px] text-4xl">
              Let’s Start a Conversation
            </h1>
            <div className="space-y-6 text-[#717171] text-lg leading-relaxed">
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
                For business inquiries, partnerships, or general questions, feel
                free to reach out at
                <span className="text-[#08186A] font-medium">
                  hello@yourcompany.com
                </span>
                . We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
