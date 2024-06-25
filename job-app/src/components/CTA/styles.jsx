import styled from "styled-components";
import { mountains } from "../../assets";

export const CTAStyled = styled.section`
  width: 100%;
  background-color: var(--color-primary-1);
  background-image: url(${mountains});
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 150%;
  padding: 6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    background-size: auto;
    padding: 7rem 0;
  }
`;

export const CTAContainer = styled.div`
  width: 100%;
  max-width: var(--container-default-max-width);
  padding: 0 var(--space-16);
  transform: translateY(50%);
  opacity: 0;
  transition: all 0.3s ease;
`;
export const CTAContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-32);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: var(--space-78);
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
`;

export const Heading = styled.h2`
  font-size: var(--display-3-sm);
  line-height: var(--line-height-display-3);
  color: var(--color-white);

  @media (min-width: 768px) {
    font-size: var(--heading-h1-sm);
    line-height: var(--line-height-h1);
  }
`;

export const Subtitle = styled.p`
  color: var(--color-white);
  @media (min-width: 768px) {
    font-size: var(--paragraph-large-sm);
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
`;

export const SearchForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: var(--space-16);
  gap: var(--space-24);
  position: relative;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 0;
  }
`;

export const SearchInput = styled.input`
  width: 100%;

  @media (min-width: 640px) {
    height: 6rem;
    padding-right: 40%;
  }
`;

export const FormSubtitle = styled.p`
  color: var(--color-white);
  font-weight: 500;
`;

export const Message = styled.p`
  width: 100%;
  height: 100%;
  background: var(--color-white);
  font-weight: 500;
  color: var(--color-primary-1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 2;
  border-radius: var(--border-radius-sm);
`;