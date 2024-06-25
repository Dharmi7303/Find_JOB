import styled from "styled-components";

export const JobCardStyled = styled.div`
  width: 100%;
`;

export const JobCardContainer = styled.div`
  width: 100%;
  padding: ${(props) =>
    props.inJobPostPage ? "0" : "var(--space-38) var(--space-24)"};
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  box-shadow: ${(props) =>
    props.inJobPostPage
      ? "none"
      : "0 -2px 6px 0 rgba(5, 21, 46, 0.02), 0 6px 12px 0 rgba(21, 60, 245, 0.05), 0 2px 6px 0 rgba(5, 21, 46, 0.02)"};
}

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.a`
  width: 6rem;
  height: 6rem;
  border-radius: 1.6rem;
  box-shadow: 0 2px 6px 0 rgba(5, 21, 46, 0.06),
    0 4px 8px 0 rgba(21, 60, 245, 0.04);

  @media (min-width: 768px) {
    width: 6.5rem;
    height: 6.5rem;
  }
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1.6rem;
  box-shadow: 0 2px 6px 0 rgba(5, 21, 46, 0.06),
    0 4px 8px 0 rgba(21, 60, 245, 0.04);

  min-width: 100%;

  &:before {
    position: absolute;
    z-index: -1;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex: 2;
  }
`;

export const Company = styled.a`
  color: var(--color-primary-1);
  font-weight: 600;
`;

export const JobTitle = styled.h3`
  font-size: ${(props) =>
    props.inJobPostPage ? "var(--heading-h3-lg)" : "var(--heading-h3-sm)"};
  line-height: var(--line-height-h3);
  font-weight: 800;
`;

export const JobTypeContainer = styled.div`
  width: 100%;
  margin-top: var(--space-32);
  display: flex;
  align-items: center;
  gap: var(--space-10);

  @media (min-width: 768px) {
    margin-top: var(--space-16);
  }
`;

export const Icon = styled.img`
  object-fit: contain;
`;

export const Type = styled.p`
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 500;
`;

export const Footer = styled.div`
  width: 100%;
  border-top: ${(props) =>
    props.inJobPostPage ? "none" : "0.08rem solid var(--color-neutral-200)"};
  margin-top: ${(props) => (props.inJobPostPage ? "none" : "var(--space-24)")};
  padding-top: ${(props) => (props.inJobPostPage ? "none" : "var(--space-32)")};
  display: ${(props) => (props.inJobPostPage ? "flex" : "block")};
  flex-wrap: wrap;
  gap: var(--space-24);
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    border: none;
    align-self: flex-end;
    width: fit-content;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--space-16);
    align-self: ${(props) => (props.inJobPostPage ? "flex-start" : "")};
  }
`;

export const Date = styled.p`
  color: var(--color-neutral-400);
`;
