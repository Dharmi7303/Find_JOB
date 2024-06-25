import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  background: ${(props) =>
    props.type1 === "primary"
      ? "var(--color-primary-1)"
      : "var(--color-white)"};

  color: ${(props) =>
    props.type1 === "primary"
      ? "var(--color-white)"
      : "var(--color-primary-1)"};

  font-size: ${(props) =>
    props.type2 === "default"
      ? "var(--heading-h6-sm)"
      : "var(--heading-h6-lg)"};

  font-weight: ${(props) => (props.type1 === "primary" ? "700" : "400")};

  box-shadow: ${(props) =>
    props.type1 !== "primary"
      ? css`0 2px 6px 0 rgba(5, 21, 46, 0.1), 0 2px 6px 0 rgba(21, 60, 245, 0.02), 0 -2px 4px 0 rgba(21, 60, 245, 0.04)`
      : css`0 2px 6px 0 rgba(5, 21, 46, 0.12), 0 14px 14px 0 rgba(21, 60, 245, 0.2)`};

  padding: ${(props) =>
      props.type2 === "default" ? "var(--space-18)" : "var(--space-22)"}
    ${(props) =>
      props.type2 === "default" ? "var(--space-24)" : "var(--space-36)"};

  width: ${(props) => props.width};

  text-transform: uppercase;
  line-height: 1.2rem;
  border-radius: 7px;
  letter-spacing: 0.08em;
  text-align: center;

  &:hover {
    background: ${(props) =>
      props.type1 === "primary"
        ? "var(--color-secondary-1)"
        : "var(--color-primary-1)"};
    color: var(--color-white);
    transform: translateY(-2%);
    transition: all 300ms ease;
    cursor: pointer;
  }

  @media (min-width: 640px) {
    position: ${(props) =>
      props.heroButton === true ? "absolute" : "relative"};
    left: auto;
    top: 0%;
    right: 0%;
    bottom: 0%;
    width: ${(props) =>
      props.heroButton === true ? "fit-content" : props.width};

    margin: ${(props) => (props.heroButton === true ? "var(--space-16)" : "0")};
  }
`;
