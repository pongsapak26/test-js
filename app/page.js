"use client";

import LocationSearchForm from "../components/LocationSearchForm";
import NewsCarousel from "../components/NewsCarousel";
import SafetyTipsBox from "../components/SafetyTipCard";
import ServiceGrid from "../components/ServiceGrid";
import TireSearch from "../components/TireSearch";
import VerticalGallery from "../components/VerticalGallery";
import { useLanguage } from "../context/LanguageContext";

export default function HomePage() {
  const { text } = useLanguage();

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <TireSearch />
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          <VerticalGallery />
        </div>
        <div className="col-span-12 lg:col-span-12">
          <ServiceGrid />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <LocationSearchForm />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <NewsCarousel />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <SafetyTipsBox />
        </div>
      </div>
    </div>
  );
}
