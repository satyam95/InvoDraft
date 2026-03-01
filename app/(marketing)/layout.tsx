import { Footer } from "@/components/marketing/footer";
import { Header } from "@/components/marketing/header";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="pt-20">{children}</div>
      <Footer />
    </>
  );
}
