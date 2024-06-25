import React, { useEffect, useRef, useState, useContext } from "react";
import * as H from "./styles";
import { clients } from "../../constants";
import Button from "../../components/Button";
import {
  bubble_1,
  bubble_2,
  bubble_3,
  bubble_4,
  bubble_5,
  bubble_6,
  lookup,
} from "../../assets";
import Jobs from "../../components/Jobs";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CTA from "../../components/CTA";
import Testimonials from "../../components/Testimonials";
import { Span } from "../../globals";
import { useNavigate } from "react-router-dom";
import JobSearchContext from "../../context/JobSearchContext";

const Homepage = () => {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(JobSearchContext);

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

  // When user submits query in Hero
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (e.target[0].value) {
      // Save input value to context
      setQuery(e.target[0].value);

      // Redirect to JobsPage
      navigate("/jobs");
    }
  };
  
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <H.HomepageStyled>
      <H.Hero>
        <H.HeroContainer>
          <H.TextContainer ref={(element) => targets.current.add(element)}>
            <H.Header>
              <Span>Tech Jobs</Span> for Developers, Designers, and Marketers
            </H.Header>
            <H.Description>
              Jobs is a curated job board of the best jobs for developers,
              designers and marketers in the tech industry.
            </H.Description>

            <H.SearchForm onSubmit={(e) => handleFormSubmit(e)}>
              <H.SearchInput
                placeholder="Search for jobs"
                maxlength="256"
                required={true}
                bg={lookup}
              />
              <Button
                type1="primary"
                type2="large"
                width="100%"
                value="Search Job"
                heroButton={true}
              />
            </H.SearchForm>
          </H.TextContainer>

          <H.Clients ref={(element) => targets.current.add(element)}>
            {clients.map((client) => (
              <H.ClientLogo
                key={client.id}
                src={client.logo}
                alt="client-logo"
              />
            ))}
          </H.Clients>
        </H.HeroContainer>

        <H.Bubble src={bubble_1} alt="bubble1" top="-4rem" left="-12rem" />
        <H.Bubble src={bubble_2} alt="bubble2" top="4rem" left="17.5rem" />
        <H.Bubble src={bubble_3} alt="bubble3" top="24rem" left="-2.6rem" />
        <H.Bubble src={bubble_4} alt="bubble4" top="-6rem" right="-13rem" />
        <H.Bubble src={bubble_5} alt="bubble5" top="30rem" right="-5rem" />
        <H.Bubble src={bubble_6} alt="bubble6" top="44rem" right="21rem" />
      </H.Hero>

      <Jobs innerRef={(element) => targets.current.add(element)} inHomepage />
      <CTA innerRef={(element) => targets.current.add(element)} />
      <Testimonials innerRef={(element) => targets.current.add(element)} />
    </H.HomepageStyled>
  );
};

export default Homepage;
