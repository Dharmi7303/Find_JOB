import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    // Colors
    --color-primary-1: #153CF5;
    --color-secondary-1: #0423B2;
    --color-neutral-700: #05122E;
    --color-neutral-600: #1D2B3F;
    --color-neutral-500: #47505C;
    --color-neutral-400: #858C95;
    --color-neutral-300: #CED3D9;
    --color-neutral-200: #E5E5EF;
    --color-neutral-100: #FAFAFC;
    --color-white: #FFFFFF;
      
    // Typography
    // Special text
    --display-1-sm: 80px;
    --line-height-display-1: 94px;
    --display-1-lg: 94px;

    --display-2-sm: 68px;
    --line-height-display-2: 76px;
    --display-2-lg: 76px;

    --display-3-sm: 32px;
    --line-height-display-3: 36px;
    --display-3-lg: 36px;

    // Rich text
    --heading-h1-sm: 50px;
    --line-height-h1: 70px;
    --heading-h1-lg: 58px;

    --heading-h2-sm: 28px;
    --line-height-h2-sm: 35px;
    --heading-h2-lg: 32px;
    --line-height-h2-lg: 40px;

    --heading-h3-sm: 24px;
    --line-height-h3: 32px;
    --heading-h3-lg: 30px;

    --heading-h4-sm: 22px;
    --line-height-h4: 25px;
    --heading-h4-lg: 25px;

    --heading-h5-sm: 18px;
    --heading-h5-lg: 20px;

    --heading-h6-sm: 16px;
    --heading-h6-lg: 18px;

    --paragraph-default-sm: 18px;
    --line-height-default-sm: 32px;
    --paragraph-default-lg: 30px;

    --paragraph-large-sm: 24px;
    --line-height-large-sm: 36px;
    --paragraph-large-lg: 36px;


    // Margin and padding
    --space-78: 78px;
    --space-72: 72px;
    --space-56: 56px; 
    --space-48: 48px;
    --space-40: 40px;
    --space-38: 38px;
    --space-36: 36px;
    --space-34: 34px;
    --space-32: 32px;
    --space-24: 24px;
    --space-22: 22px;
    --space-20: 20px;
    --space-18: 18px;
    --space-16: 16px;
    --space-10: 10px;

    // Max width
    --container-default-max-width: 1300px;
    --container-small-max-width: 540px;

    // Border radius
    --border-radius-sm: 10px;
    --border-radius-lg: 24px;

    // Font family
    --font-family: 'Plus Jakarta Sans', sans-serif;

    // sm	640px	@media (min-width: 640px) { ... }
    // md	768px	@media (min-width: 768px) { ... }
    // lg	1024px	@media (min-width: 1024px) { ... }
    // xl	1280px	@media (min-width: 1280px) { ... }
    // 2xl	1536px	@media (min-width: 1536px) { ... }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth !important;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
    color: var(--color-neutral-500);
    font-size: var(--paragraph-default-sm);
    line-height: var(--line-height-default-sm);
    font-weight: 400;
  }

  body::-webkit-scrollbar {
    width: 11px;
  }

  body::-webkit-scrollbar-track {
    border-radius: 5px;
    background: var(--bg-main);
  }

  body::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border: 1px solid var(--bg-main);
    border-radius: 20px;
  }

  p {
    font-size: var(--paragraph-default-sm);
    line-height: var(--line-height-large-sm);
    color: var(--color-neutral-500);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-neutral-700);
    font-weight: 800;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  input, textarea {
    border: none;
    font-family: var(--font-family);
    font-size: var(--paragraph-default-sm);
    line-height: var(--line-height-default-sm);
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    border-radius: var(--border-radius-sm);
    color: var(--color-neutral-700);
    box-shadow: 0 20px 24px 0 rgba(21, 60, 245, 0.06),
    0 5px 14px 0 rgba(5, 21, 46, 0.05);

    &:hover {
      box-shadow:0 4px 12px 0 rgba(21, 60, 245, 0.05), 0 2px 8px 0 rgba(5, 21, 46, 0.07);
    }
  }

  input {
    height: 4.3rem;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--color-neutral-600);
    font-size: var(--paragraph-default-sm);
  }

  textarea { 
    min-height: 11rem;
  }

  button {
    border: none;
  }

  label {
    font-size: var(--paragraph-default-sm);
    line-height: var(--line-height-large-sm);
    color: var(--color-neutral-700);
    font-weight: 700;
    display: inline-block;
    margin-bottom: 1rem;
  }
`;

export const Span = styled.span`
  color: var(--color-primary-1);
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    width: ${props => props.noLine ? '0%' : '100%'};
    height: 0.2rem;
    background: var(--color-primary-1);
    display: inline-block;
    position: absolute;
    bottom: -0.1rem;
    left: 0;

    @media (min-width: 768px) {
      height: 0.3rem;
    }
  }
`

export const LoadingSpinner = styled.div`
  align-self: center;
  width: 4rem;
  text-align: center;
  font-size: 3rem;
  color: var(--color-neutral-300);
  animation: rotating 3s linear infinite;

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;