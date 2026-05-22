import HeroSection from "../components/HeroSection";
import GreetingSection from "@/components/GreetingSection";
import VenueSection from "@/components/VenueSection";
import DdayCounter from "@/components/DdayCounter"
import StorySection from "@/components/StorySection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import AccountSection from "@/components/AccountsSection";

export default function WeddingInvitationPage() {
  return (
    <main
      className="relative"
      style={{ maxWidth: "430px", minHeight: "100vh" }}
    >
      {/* 꽃잎 효과 */}
      {/* <PetalEffect /> */}

      {/* 섹션들 */}
      <HeroSection />
      <GreetingSection />
      <VenueSection />
      <DdayCounter startDate="2017-06-09" title="함께한 시간" />
      <StorySection />
      <GallerySection />
      <LocationSection />
      <AccountSection />
    </main>
  );
}
