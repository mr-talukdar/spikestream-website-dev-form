import React from "react";
import { HOME_BG, HOME_ICONS, HOME_IMAGES, VIDEOS } from "../../../images";
import FeaturedTemplate from "./featured-section/template";

function Featured({ navigate }) {
  return (
    <section data-scroll-section>
      <FeaturedTemplate
        identifier={"keto"}
        bg={HOME_BG.Featured_Keto}
        icon={VIDEOS.border}
        isVideo={true}
        videoUrl={VIDEOS.keto_short}
        iconWidth={
          "w-8/12 smallphone:w-3/5 tablet:w-2/5 laptop:w-1/2 desktop:w-3/5"
        }
        title="An App To\nImprove Health"
        subtitle="Design + Development"
        link="/works/app-development-ketobalanced"
        navigate={navigate}
      />
      <FeaturedTemplate
        identifier={"estate"}
        bg={HOME_BG.Featured_RealEstate}
        icon={HOME_IMAGES.RealEstate}
        iconWidth={
          "w-8/12 smallphone:w-3/5 tablet:w-2/5 laptop:w-1/2 desktop:w-2/5"
        }
        title="Real Estate\nRedefined"
        subtitle="Website Design & Social"
        link="/works/hbits"
        navigate={navigate}
      />
      <FeaturedTemplate
        identifier={"future-apps"}
        bg={HOME_BG.Featured_FutureApps}
        icon={VIDEOS.border}
        isVideo={true}
        videoUrl={VIDEOS.celestial_short}
        iconWidth={"w-8/12 tablet:w-1/2  laptop:w-11/12 desktop:w-1/2"}
        title="Can Future Apps\nBe So Immersive?"
        subtitle="Concept Prototype"
        link="/works/web-design-celestial-mountains"
        navigate={navigate}
      />
      <FeaturedTemplate
        identifier={"micro-delights"}
        bg={HOME_BG.Featured_MicroDelights}
        icon={HOME_IMAGES.MicroDelights}
        iconWidth={
          "w-8/12 smallphone:w-3/5 tablet:w-2/5 laptop:w-1/2 desktop:w-2/5"
        }
        title="Micro Delights,\nDelivered"
        subtitle="Script, Screenplay & Copy"
        link="/works/website-animation-kotaknetbanking"
        navigate={navigate}
      />
    </section>
  );
}

export default Featured;
