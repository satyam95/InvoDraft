import { FeatureBadge } from "@/components/marketing/feature-badge";

export default function PrivacyPolicy() {
  return (
    <main>
      <section>
        <div className="container mx-auto py-24">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
            <FeatureBadge text="Privacy Policy" showCircle />
            <h1 className="text-[#171717] font-semibold leading-[62px] text-4xl">
              Your Privacy Matters to Us
            </h1>
            <div className="space-y-6 text-[#717171] text-lg leading-relaxed">
              <p>
                We respect your privacy and are committed to protecting your
                personal information. This Privacy Policy explains how we
                collect, use, and safeguard your data when you interact with our
                platform.
              </p>
              <p>
                We may collect personal details such as your name, email
                address, and usage data to improve our services, provide
                customer support, and enhance your experience.
              </p>
              <p>
                We do not sell, rent, or share your personal data with third
                parties except as required by law or to provide our services
                effectively.
              </p>
              <p>
                By using our platform, you consent to our Privacy Policy and
                agree to the collection and use of your information as
                described.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
