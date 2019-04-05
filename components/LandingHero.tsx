import * as React from 'react'
import Hero from 'trilogycomponents/core/Hero';
import HeroContent from 'trilogycomponents/core/HeroContent';

type HeroObject = {
  hero_h1_text?: string;
  hero_h2_text?: string;
  hero_dates?: string;
  hero_image_desktop?: string;
  hero_image_mobile?: string;
}

interface HeroProps {
  content?: HeroObject;
}

export const LandingHero: React.FunctionComponent<HeroProps> = ({ content }) => {
  console.log(content.hero_image_mobile)
  return (
    <Hero
      backgroundImg={(content && content.hero_image_desktop) ? content.hero_image_desktop : '' }
      backgroundImgM={(content && content.hero_image_mobile) ? content.hero_image_mobile : '' }
    >
      <HeroContent
        title={(content && content.hero_h1_text) ? content.hero_h1_text : '' }
        leadText={(content && content.hero_h2_text) ? content.hero_h2_text : '' }
        dateText={(content && content.hero_dates) ? content.hero_dates : '' }
      />
    </Hero>
  )
}

export default LandingHero
