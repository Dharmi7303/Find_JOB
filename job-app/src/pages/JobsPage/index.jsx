import React, { useEffect, useRef } from "react";
import Jobs from "../../components/Jobs";
import CTA from "../../components/CTA";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { JobsPageStyled } from "./styles";

const JobsPage = () => {
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
    <JobsPageStyled>
      <Jobs innerRef={(element) => targets.current.add(element)} inJobsPage />
      <CTA innerRef={(element) => targets.current.add(element)} />
    </JobsPageStyled>
  );
};

export default JobsPage;
