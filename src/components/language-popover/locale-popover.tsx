import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const LocalePopover: React.FC = () => {
  const router = useRouter();
  const [locale, setLocale] = useState<string | undefined>(router.locale);

  useEffect(() => {
    setLocale(router.locale);
    scrollToTop();
  }, [router]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderLocaleLink = (
    targetLocale: string,
    flagSrc: string,
    label: string
  ) => (
    <Link href={router.asPath} locale={targetLocale}>
      <div className="flex gap-1 font-[400] items-center cursor-pointer">
        <div className="w-[22px] h-[15px] lg:h-[20px]">
          <img
            alt={label}
            className="w-full h-full"
            src={flagSrc}
            srcSet={`${flagSrc} 2x, ${flagSrc} 3x`}
            height="20"
          />
        </div>
        <p className="uppercase">{label}</p>
      </div>
    </Link>
  );

  return (
    <div className="relative">
      <div className="">
        {locale === "fr" &&
          renderLocaleLink("en-US", "https://flagcdn.com/h20/gb.png", "En")}
        {locale === "en-US" &&
          renderLocaleLink("fr", "https://flagcdn.com/h20/fr.png", "Fr")}
      </div>
    </div>
  );
};

export default LocalePopover;
