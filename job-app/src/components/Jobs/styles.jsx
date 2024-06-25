import styled from "styled-components";

export const JobsStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--space-56);
  padding-bottom: var(--space-72);
  background: var(--color-neutral-100);
  overflow-anchor: none;
`;

export const JobsContainer = styled.div`
  width: 100%;
  max-width: var(--container-default-max-width);
  padding: 0 var(--space-16);
  display: flex;
  flex-direction: column;
  gap: var(--space-56);
  transform: translateY(50%);
  opacity: 0;
  transition: all 0.3s ease;
`;

export const Heading = styled.h2`
  font-size: var(--heading-h2-sm);
  line-height: var(--line-height-h2-sm);
  color: var(--color-neutral-700);
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: var(--heading-h2-lg);
    line-height: var(--line-height-h2-lg);
  }
`;

export const Span = styled.span`
  color: var(--color-primary-1);
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 0.2rem;
    background: var(--color-primary-1);
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
`;

export const JobsPresentation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-48);

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const AsideContainer = styled.aside`
  width: 100%;

  @media (min-width: 1024px) {
    position: static;
    max-width: 30%;
  }
`;

export const SearchJobs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  margin-bottom: var(--space-48);
`;

export const Title = styled.h3`
  font-weight: 700;
`;

export const SearchInput = styled.input`
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-position: 1.25rem 50%;
  background-size: auto;
  background-repeat: no-repeat;
  padding-left: var(--space-56);
`;

export const FeaturedCompaniesContainer = styled.div`
  width: 100%:
  box-shadow: 0 7px 8px 0 rgba(30, 54, 170, 0.08);
  border-radius: var(--border-radius-lg);
  padding: var(--space-40) var(--space-32);
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
  background: var(--color-white);
  box-shadow: 0 7px 8px 0 rgba(30, 54, 170, 0.08);
`;

export const ContainerTitle = styled.h3`
  width: 100%;
  font-weight: 700;
  font-size: var(--heading-h4-sm);
  tex-tranform: uppercase;
`;

export const CompaniesList = styled.ul`
  with: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
`;

export const CompanyItem = styled.li`
  width: 100%;
  display: flex;
  gap: var(--space-16);
`;

export const CompanyLogo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 6px 0 rgba(5, 21, 46, 0.06),
    0 4px 8px 0 rgba(21, 60, 245, 0.04);
`;

export const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanyTitle = styled.h4`
  font-weight: 700;
`;

export const CompanyType = styled.p`
  font-size: 0.9rem;
  line-height: 100%;
  font-weight: 500;
  color: var(--color-neutral-400);
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: var(--space-24);
`;