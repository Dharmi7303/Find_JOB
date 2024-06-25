import styled from "styled-components";

export const AboutUsPageStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Hero = styled.section`
  width: 100%;
  padding: 5rem 0 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    // padding: 7.5rem 0;
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  padding: 0 var(--space-16);
  max-width: var(--container-default-max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-24);
  transform: scale(50%);
  opacity: 0;
  transition: all 0.3s ease 0.3s;

  @media (min-width: 768px) {
    gap: var(--space-36);
  }
`;

export const Header = styled.h1`
  font-size: var(--display-3-sm);
  line-height: var(--line-height-h2-lg);
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: var(--heading-h1-sm);
    line-height: var(--line-height-h1);
  }
`;

export const Description = styled.p`
  text-align: center;
  max-width: 950px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: var(--paragraph-default-lg);
    line-height: var(--line-height-h2-lg);
  }
`;

export const Stats = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-48);
  margin-top: var(--space-48);
`;

export const StatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-16);
  min-width: fit-content;

  @media (min-width: 768px) {
  }
`;

export const StatTitle = styled.h2`
  font-size: var(--heading-h1-sm);
  line-height: var(--line-height-h1);

  @media (min-width: 768px) {
    font-size: var(--display-2-lg);
  }
`;

export const StatDescription = styled.p`
  font-size: var(--paragraph-large-sm);
  font-weight: 500;
  text-align: center;
`;

export const AboutUsSection = styled.section`
  width: 100%;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-neutral-100);
  gap: var(--space-36);
  background: ${(props) =>
    props.parentRow ? "var(--color-neutral-100)" : "var(--color-white)"};

  @media (min-width: 768px) {
    padding: 7rem 0;
  }
`;

export const AboutUsContainer = styled.div`
  width: 100%;
  max-width: var(--container-default-max-width);
  padding: 0 var(--space-16);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-56);

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: ${(props) =>
    props.imageContainer ? "var(--container-default-max-width)" : "800px"};
  padding: ${(props) => (props.parentRow ? "0" : "0 var(--space-16)")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.parentRow ? "flex-start" : "center")};
  gap: var(--space-32);
  text-align: ${(props) => (props.parentRow ? "left" : "center")};
  transform: translateY(50%);
  opacity: 0;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.imageContainer ? "row" : "column")};
    align-items: ${(props) => (props.imageContainer ? "flex-end" : "")};
  }
`;

export const TeamTitle = styled.h2`
  font-size: var(--heading-h2-sm);
  line-height: var(--line-height-h2-sm);

  @media (min-width: 768px) {
    font-size: var(--heading-h2-lg);
    line-height: var(--line-height-h2-lg);
  }
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: var(--border-radius-lg);
  padding: ${(props) => (props.companyLogo ? "1rem" : "0")};
  max-height: ${(props) => (props.companyLogo ? "10rem" : "auto")};

  @media (min-width: 1024px) {
    padding: ${(props) => (props.companyLogo ? "2rem" : "0")};
  }
`;

export const LogosContainer = styled.div`
  width: 100%;
  border-radius: var(--border-radius-lg);
  box-shadow: 0 14px 34px 0 rgba(23, 25, 57, 0.06),
    0 14px 24px 0 rgba(21, 60, 245, 0.04);
  background: var(--color-white);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;