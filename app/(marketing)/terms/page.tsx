import { FeatureBadge } from "@/components/marketing/feature-badge";

export default function Terms() {
  return (
    <main>
      <section>
        <div className="container mx-auto py-24">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
            <FeatureBadge text="Terms of Service" showCircle />
            <h1 className="text-[#171717] font-semibold leading-[62px] text-4xl">
              Terms & Conditions
            </h1>
            <div className="space-y-6 text-[#717171] text-lg leading-relaxed">
              <p>
                By accessing or using this platform, you agree to comply with
                and be bound by these Terms of Service. If you do not agree with
                any part of these terms, you should discontinue use immediately.
              </p>
              <p>
                You agree to use the platform only for lawful purposes and in a
                manner that does not infringe upon the rights of others or
                restrict their use of the service.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any
                aspect of the platform at any time without prior notice.
              </p>
              <p>
                Continued use of the platform following any updates constitutes
                acceptance of the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
