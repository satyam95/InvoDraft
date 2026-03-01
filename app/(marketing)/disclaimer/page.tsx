import { FeatureBadge } from "@/components/marketing/feature-badge";

export default function Disclaimer() {
  return (
    <main>
      <section>
        <div className="container mx-auto py-24">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
            <FeatureBadge text="Disclaimer" showCircle />
            <h1 className="text-[#171717] font-semibold leading-[62px] text-4xl">
              Legal Disclaimer
            </h1>
            <div className="space-y-6 text-[#717171] text-lg leading-relaxed">
              <p>
                The information provided on this platform is for general
                informational purposes only and should not be considered as
                professional financial, legal, or investment advice.
              </p>
              <p>
                While we strive to ensure the accuracy and reliability of the
                content, we make no representations or warranties of any kind,
                express or implied, about the completeness, accuracy, or
                suitability of the information contained on this website.
              </p>
              <p>
                Any reliance you place on such information is strictly at your
                own risk. We are not liable for any losses, damages, or expenses
                arising directly or indirectly from the use of our services or
                information.
              </p>
              <p>
                You should consult with a qualified professional before making
                any financial decisions based on the information provided on
                this platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}