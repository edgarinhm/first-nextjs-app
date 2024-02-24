import ServiceCard from "@/components/ServiceCard";
import { localeMessages } from "@/constants/constants";
import scaleImg from "public/images/scale.jpg";

export default function ScalePage() {
  return (
    <ServiceCard
      imgData={scaleImg}
      imgAlt={localeMessages.ScaleImgAlt}
      title={localeMessages.ScaleTitle}
    />
  );
}
