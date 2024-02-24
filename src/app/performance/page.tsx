import ServiceCard from "@/components/ServiceCard";
import { localeMessages } from "@/constants/constants";
import performanceImg from "public/images/performance.jpg";

export default function PerformancePage() {
  return (
    <ServiceCard
      imgData={performanceImg}
      imgAlt={localeMessages.PerformanceImgAlt}
      title={localeMessages.PerformanceTitle}
    />
  );
}
