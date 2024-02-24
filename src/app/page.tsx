import ServiceCard from "@/components/ServiceCard";
import { localeMessages } from "@/constants/constants";
import homeImg from "public/images/home.jpg";

export default function Home() {
  return (
    <ServiceCard
      imgData={homeImg}
      imgAlt={localeMessages.HomeImgAlt}
      title={localeMessages.HomeTitle}
    />
  );
}
