export default function PrivacyPolicy() {
  return (
    <main>
      <section>
        <div className="container mx-auto py-24">
          <div className="max-w-4xl mx-auto flex flex-col gap-10 text-center">
            <div className="py-2 px-4 mx-auto flex items-center gap-3 border rounded-full border-2 border-[#E3E6FB]">
              <div className="bg-[linear-gradient(90deg,#08186A_100%)] h-2.5 w-2.5 rounded-full" />
              <div className="text-lg font-semibold bg-[linear-gradient(90deg,#08186A_100%)] bg-clip-text text-transparent">
                Privacy Policy
              </div>
            </div>

            <h1 className="text-[#171717] font-semibold leading-[62px] text-4xl">
              Your Privacy Matters to Us
            </h1>

            <div className="space-y-6 text-[#717171] text-lg leading-relaxed">
              <p>
                We respect your privacy and are committed to protecting your
                personal information. This Privacy Policy explains how we
                collect, use, and safeguard your data when you interact with
                our platform.
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