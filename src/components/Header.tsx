import { localeMessages } from "@/constants/constants";
import Link from "next/link";
export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8 capitalize">
        <Link href="/" className="font-bold text-3xl">
          {localeMessages.HeaderLinkHome}
        </Link>
        <div className="flex space-x-4 text-xl">
          <Link href="/performance">
            {localeMessages.HeaderLinkPerformance}
          </Link>
          <Link href="/reliability">
            {localeMessages.HeaderLinkReliability}
          </Link>
          <Link href="/scale">{localeMessages.HeaderLinkScale}</Link>
        </div>
      </nav>
    </div>
  );
}
