import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  padding-top: var(--space-78);
  border-top: 0.1rem solid var(--color-neutral-200);
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: var(--container-default-max-width);
  padding: 0 var(--space-16);
`;

export const FooterContent = styled.div`
  width: 100%;
  padding-bottom: var(--space-78);
  display: flex;
  flex-direction: column;
  gap: var(--space-48);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-24);

  @media (min-width: 768px) {
    max-width: 35rem;
  }
`;

export const Heading = styled.h3`
  color: var(--color-primary-1);
  font-weight: 700;
`;

export const FooterListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-24);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-10);

  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const ListItem = styled.li`
  font-weight: 500;
`;

export const SocialIcon = styled.img`
  width: 1.5rem;
`;

export const AnchorTag = styled.a`
  display: flex;
  align-items: center;
  gap: var(--space-10);
`;

export const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 0.2rem solid var(--color-neutral-200);
  padding: var(--space-40) 0;
  flex-wrap: wrap;
  gap: var(--space-32);
  text-align: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const CompanyLogo = styled.img`
  width: 3rem;

  &:hover {
    transform: scale(90%);
    transition: all 0.3s ease;
  }
`;