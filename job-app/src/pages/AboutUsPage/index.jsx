import React from "react";
import { Span } from "../../globals";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";
import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useEffect } from "react";
import {
  team_1,
  team_2,
  logo_facebook,
  logo_google,
  logo_instagram,
  logo_messenger,
  logo_twitter,
  logo_youtube,
} from "../../assets";
import * as A from "./styles";

const AboutUsPage = () => {
  const targets = useRef(new Set());

  const [entries, setObservedNodes] = useIntersectionObserver({
    // threshold: 1
  });

  useEffect(() => {
    setObservedNodes(() => [...targets.current]);
  }, [setObservedNodes]);

  useEffect(() => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateY(0%) scale(100%)";
        entry.target.style.opacity = "1";

        setObservedNodes((observedNodes) =>
          observedNodes.filter((node) => node !== entry.target)
        );
      }
    }
  }, [entries, setObservedNodes]);

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <A.AboutUsPageStyled>
      <A.Hero>
        <A.HeroContainer ref={(element) => targets.current.add(element)}>
          <A.Header>
            <Span>About</Span> Jobs
          </A.Header>
          <A.Description>
            As the fastest-growing online Job board, our mission is to help
            great individuals connect with great companies.
          </A.Description>
          <A.Stats>
            <A.StatContainer>
              <A.StatTitle>
                52<Span noLine>,</Span>015
              </A.StatTitle>
              <A.StatDescription>Jobs posted</A.StatDescription>
            </A.StatContainer>
            <A.StatContainer>
              <A.StatTitle>
                24<Span noLine>,</Span>325
              </A.StatTitle>
              <A.StatDescription>Successful hires</A.StatDescription>
            </A.StatContainer>
            <A.StatContainer>
              <A.StatTitle>
                1<Span noLine>,</Span>532
              </A.StatTitle>
              <A.StatDescription>Verified companies</A.StatDescription>
            </A.StatContainer>
            <A.StatContainer>
              <A.StatTitle>
                1<Span noLine>.</Span>2M
              </A.StatTitle>
              <A.StatDescription>Monthly visitors</A.StatDescription>
            </A.StatContainer>
          </A.Stats>
        </A.HeroContainer>
      </A.Hero>

      <A.AboutUsSection parentRow>
        <A.AboutUsContainer>
          <A.TextContainer
            ref={(element) => targets.current.add(element)}
            parentRow
          >
            <A.TeamTitle>
              Great companies <Span>trust in us</Span>
            </A.TeamTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum
              libero lectus nunc posuere egestas. Nulla quam volutpat, aliquam,
              nulla integer massa ultrices amet massa.
            </p>
          </A.TextContainer>
          <A.TextContainer
            ref={(element) => targets.current.add(element)}
            parentRow
          >
            <A.LogosContainer>
              <A.Img src={logo_facebook} alt="logo-1" companyLogo />
              <A.Img src={logo_instagram} alt="logo-2" companyLogo />
              <A.Img src={logo_google} alt="logo-3" companyLogo />
              <A.Img src={logo_messenger} alt="logo-4" companyLogo />
              <A.Img src={logo_twitter} alt="logo-5" companyLogo />
              <A.Img src={logo_youtube} alt="logo-6" companyLogo />
            </A.LogosContainer>
          </A.TextContainer>
        </A.AboutUsContainer>
      </A.AboutUsSection>

      <A.AboutUsSection>
        <A.TextContainer ref={(element) => targets.current.add(element)}>
          <A.TeamTitle>
            The team behind <Span>this mission</Span>
          </A.TeamTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum
            libero lectus nunc posuere egestas.
          </p>
        </A.TextContainer>
        <A.TextContainer
          imageContainer
          ref={(element) => targets.current.add(element)}
        >
          <A.Img src={team_1} alt="team-1" />
          <A.Img src={team_2} alt="team-2" />
        </A.TextContainer>
      </A.AboutUsSection>

      <Testimonials innerRef={(element) => targets.current.add(element)} />
      <CTA innerRef={(element) => targets.current.add(element)} />
    </A.AboutUsPageStyled>
  );
};

export default AboutUsPage;
