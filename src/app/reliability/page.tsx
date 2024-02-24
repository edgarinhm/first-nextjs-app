import ServiceCard from "@/components/ServiceCard";
import { localeMessages } from "@/constants/constants";
import reliabilityImg from "public/images/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <ServiceCard
      imgData={reliabilityImg}
      imgAlt={localeMessages.ReliabilityImgAlt}
      title={localeMessages.ReliabilityTitle}
    />
  );
}
