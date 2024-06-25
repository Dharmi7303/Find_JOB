import styled from "styled-components";

export const TestimonialsStyled = styled.section`
  width: 100%;
  padding: 6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-neutral-100);

  @media (min-width: 768px) {
    padding: 7rem 0;
  }
`;

export const TestimonialsContainer = styled.div`
  width: 100%;

  max-width: var(--container-small-max-width);
  padding: 0 var(--space-16);
    transform: translateY(50%);
    opacity: 0;
    transition: all 0.3s ease;

  @media (min-width: 1024px) {
    max-width: var(--container-default-max-width);
  }
`;

export const TestimonialsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-48);

  @media (min-width: 1024px) {
    align-items: center;
  }
`;

export const TestimonialsText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);

  @media (min-width: 1024px) {
    max-width: 50rem;
  }
`;

export const TestimonialsHeader = styled.h2`
  font-size: var(--heading-h2-sm);
  line-height: var(--line-height-h2-sm);
  text-align: center;

  @media (min-width: 768px) {
    font-size: var(--heading-h2-lg);
    line-height: var(--line-height-h2-lg);
  }
`;
export const TestimonialsDescription = styled.p`
  text-align: center;
`;

export const TestimonialCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-36);
  position: relative;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const TestimonialCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--space-24);
  padding: var(--space-36) var(--space-20);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 2px 6px 0 rgba(5, 21, 46, 0.02),
    0 6px 12px 0 rgba(21, 60, 245, 0.05);
  background: var(--color-white);
  height: fit-content;

  @media (min-width: 1280px) {
    height: 24rem;
  }
`;

export const TestimonialHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: ${(props) => (props.flexDirection === "row" ? "center" : "")};
  gap: ${(props) => (props.flexDirection === "row" ? "var(--space-16)" : "")};
  flex-direction: ${(props) => props.flexDirection};
`;

export const ProfilePic = styled.img`
  width: 4rem;
  border-radius: 50%;
  object-fit: contain;
`;

export const Name = styled.h3``;

export const JobTitle = styled.p`
  color: var(--color-primary-1);
  font-size: 1rem;
`;

export const TestimonialText = styled.p`
  font-weight: 500;
`;

export const TestimonialFooter = styled.div`
  width: 100%;
  border-top: 0.08rem solid var(--color-neutral-200);
  margin-top: var(--space-24);
  padding-top: var(--space-32);
  justify-self: flex-end;
`;

export const CompanyLogo = styled.img`
  width: 8rem;
`;