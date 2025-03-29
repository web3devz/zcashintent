"use client";

import Image from "next/image";
import { useContext } from "react";

import { FeatureFlagsContext } from "@src/providers/FeatureFlagsProvider";
import solswapBg from "../../public/static/templates/solswap/bg.png";

const PageBackground = () => {
  const { whitelabelTemplate } = useContext(FeatureFlagsContext);

  if (whitelabelTemplate === "solswap") {
    return (
      <div className="absolute inset-0 -z-10">
        <Image
          src={solswapBg}
          alt="SolSwap Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
      </div>
    );
  }

  if (whitelabelTemplate === "turboswap") {
    return (
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-b from-white to-gray-200" />
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-[75%] w-[620px] h-[620px]">
          <Image
            src="/static/templates/turboswap/coin-frog.png"
            alt="TurboSwap Coin Frog"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  if (whitelabelTemplate === "dogecoinswap") {
    return (
      <div className="hidden md:block absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-no-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/static/templates/dogecoinswap/bg-light.jpg')" }}
        />
      </div>
    );
  }

  if (whitelabelTemplate === "trumpswap") {
    return (
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-no-repeat bg-center bg-cover opacity-15"
          style={{ backgroundImage: "url('/static/templates/trumpswap/bg-usa-flag.webp')" }}
        />
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:left-[70%] w-[660px] h-[660px]">
          <Image
            src="/static/templates/trumpswap/trump-standing.png"
            alt="Trump Standing"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 bg-gray-50 dark:bg-gray-900">
      <div className="w-full h-full bg-no-repeat bg-bottom bg-page-light--mobile md:bg-page-light dark:bg-page-dark--mobile dark:md:bg-page-dark" />
    </div>
  );
};

export default PageBackground;
