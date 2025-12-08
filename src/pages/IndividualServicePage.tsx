import { useParams } from "react-router-dom";

import HeaderSection from "../components/individual_service_page/HeaderSection";
import ServiceDetailSection from "../components/individual_service_page/ServiceDetailSection";

import WheelBalancingHeaderSectionBackgroundImage from "../assets/webps/individual_service_page/wheel_balancing_header_background.webp";
import WheelBalancingDetailSectionImage from "../assets/webps/individual_service_page/wheel_balancing.webp";

import TirePatchingAndVulcanizingHeaderSectionBackgroundImage from "../assets/webps/individual_service_page/tire_patching_and_vulcanizing_header_background.webp";
import TirePatchingAndVulcanizingDetailSectionImage from "../assets/webps/individual_service_page/tire_patching_and_vulcanizing.webp";

import NitrogenFillingHeaderSectionBackgroundImage from "../assets/webps/individual_service_page/nitrogen_filling_header_background.webp";
import NitrogenFillingDetailSectionImage from "../assets/webps/individual_service_page/nitrogen_filling.webp";

import PartsReplacementHeaderSectionBackgroundImage from "../assets/webps/individual_service_page/parts_replacement_header_background.webp";
import PartsReplacementDetailSectionImage from "../assets/webps/individual_service_page/parts_replacement.webp";
import ServiceTireOrdering from "../components/individual_service_page/ServiceTireOrdering";

import TireOrderingSectionHeaderBackgroundImage from "../assets/webps/individual_service_page/tire_ordering_header_background.webp";

export default function IndividualServicePage() {
  const { id } = useParams();

  interface IDetails {
    headerSectionBackgroundImageUrl: string,
    heroTitle: string,
    headerSectionDescription: string,
    detailSectionImageUrl: string,
    detailSectionTitle: string,
    detailSectionDescription1: string,
    detailSectionDescription2: string,
  }

  const details: IDetails[] = [
    {
      headerSectionBackgroundImageUrl: WheelBalancingHeaderSectionBackgroundImage,
      heroTitle: "Wheel Balancing",
      headerSectionDescription: "Enhance your vehicle’s performance and safety with precise wheel balancing. Reduce vibrations, extend tire life, and enjoy a smoother ride every time you hit the road.",
      detailSectionImageUrl: WheelBalancingDetailSectionImage,
      detailSectionTitle: "Ensure Smooth Driving with Professional Wheel Balancing",
      detailSectionDescription1: "Unbalanced wheels can cause uneven tire wear, vibrations, and reduced fuel efficiency. At Align Ease, our expert technicians use state-of-the-art equipment to precisely balance your wheels, ensuring a smoother, safer, and more comfortable ride.",
      detailSectionDescription2: "Regular wheel balancing improves handling, extends the life of your tires, and helps maintain overall vehicle health. Whether you've noticed a slight vibration or it's time for routine maintenance, trust us to get your wheels perfectly aligned.Book your wheel balancing session today and experience the difference on the road.",
    },
    {
      headerSectionBackgroundImageUrl: TirePatchingAndVulcanizingHeaderSectionBackgroundImage,
      heroTitle: "Tire Patching & \nVulcanizing",
      headerSectionDescription: "Restore your tires’ integrity with expert patching and vulcanizing. Safe, cost-effective solutions to keep you moving without replacing your tires.",
      detailSectionImageUrl: TirePatchingAndVulcanizingDetailSectionImage,
      detailSectionTitle: "Extend Tire Life with Professional Patching & Vulcanizing",
      detailSectionDescription1: "Tire damage doesn't always mean replacement. Our advanced patching and vulcanizing service restores damaged tires, sealing punctures and reinforcing weakened areas with durable, heat-cured materials.",
      detailSectionDescription2: "At Align Ease, we carefully inspect and repair your tires using industry-grade tools and proven techniques. Whether it’s a nail puncture, sidewall scuff, or tread damage, we bring your tire back to a safe, road-ready condition.This process not only saves you money but also ensures safety and reliability on every drive.Book your session today and give your tires a second life."
    },
    {
      headerSectionBackgroundImageUrl: NitrogenFillingHeaderSectionBackgroundImage,
      heroTitle: "Nitrogen Filling",
      headerSectionDescription: "Improve tire performance, extend lifespan, and maintain pressure longer with professional nitrogen tire inflation. Drive cooler, safer, and smarter.",
      detailSectionImageUrl: NitrogenFillingDetailSectionImage,
      detailSectionTitle: "Boost Tire Efficiency with Nitrogen Filling",
      detailSectionDescription1: "Nitrogen tire inflation is a smart choice for today’s drivers. Unlike regular air, nitrogen maintains tire pressure more consistently, reduces oxidation, and keeps your tires cooler under pressure. This results in better fuel efficiency, longer tire life, and enhanced safety—especially during long drives and extreme weather.",
      detailSectionDescription2: "At Align Ease, we use high-purity nitrogen and professional-grade equipment to ensure every tire is properly filled to the manufacturer’s recommended level. Choose nitrogen for a smoother, safer, and more economical ride. It’s a small change that makes a big difference. Book your nitrogen filling service today and feel the difference on every journey."
    },
    {
      headerSectionBackgroundImageUrl: PartsReplacementHeaderSectionBackgroundImage,
      heroTitle: "Parts Replacement",
      headerSectionDescription: "Restore your vehicle’s performance with high-quality parts and expert installation. Reliable replacements to keep your engine running smoothly and safely.",
      detailSectionImageUrl: PartsReplacementDetailSectionImage,
      detailSectionTitle: "Reliable Parts Replacement by Certified Technicians",
      detailSectionDescription1: "When it comes to keeping your vehicle running at its best, worn-out or damaged parts can’t be ignored. At Align Ease, we provide professional parts replacement using high-quality, manufacturer-recommended components to ensure optimal performance and safety.",
      detailSectionDescription2: "From engine components to belts, hoses, filters, and more — our experienced technicians diagnose the issue and install replacements with precision and care. Every replacement is backed by a thorough quality check, giving you confidence on the road.Don’t let a faulty part slow you down. Book your service now and keep your vehicle in peak condition."
    },
    {
      headerSectionBackgroundImageUrl: TireOrderingSectionHeaderBackgroundImage,
      heroTitle: "Tire Ordering",
      headerSectionDescription: "Browse top-quality brands, find the perfect fit for your vehicle, and order with just a few clicks. Fast delivery and expert installation available.",
      detailSectionImageUrl: "",
      detailSectionTitle: "",
      detailSectionDescription1: "",
      detailSectionDescription2: ""
    }
  ];

  return (
    <>
      <HeaderSection
        imageUrl={details[parseInt(id!)].headerSectionBackgroundImageUrl}
        title={details[parseInt(id!)].heroTitle}
        description={details[parseInt(id!)].headerSectionDescription}
      />

      {id !== "4" ?
        <ServiceDetailSection
          imageUrl={details[parseInt(id!)].detailSectionImageUrl}
          title={details[parseInt(id!)].detailSectionTitle}
          description1={details[parseInt(id!)].detailSectionDescription1}
          description2={details[parseInt(id!)].detailSectionDescription2}
        />
        :
        <ServiceTireOrdering />
      }

    </>
  );
}