import HeroSection from "../components/HeroSection";
// import GreetingSection from "@/components/GreetingSection";
// import CountdownSection from "@/components/CountdownSection";
// import GallerySection from "@/components/GallerySection";
// import LocationSection from "@/components/LocationSection";
// import AccountSection from "@/components/AccountSection";
// import ContactSection from "@/components/ContactSection";
// import ShareSection from "@/components/ShareSection";
// import PetalEffect from "@/components/PetalEffect";

export default function WeddingInvitationPage() {
  return (
    <main
      className="relative"
      style={{ maxWidth: "430px", margin: "0 auto", minHeight: "100vh" }}
    >
      {/* 꽃잎 효과 */}
      {/* <PetalEffect /> */}

      {/* 섹션들 */}
      <HeroSection />
      {/* <GreetingSection />
      <CountdownSection />
      <GallerySection />
      <LocationSection />
      <AccountSection />
      <ContactSection />
      <ShareSection /> */}
    </main>
  );
}
