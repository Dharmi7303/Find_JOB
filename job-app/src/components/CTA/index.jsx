import React, { useState } from "react";
import Button from "../Button";
import * as C from './styles'

const CTA = ({ innerRef }) => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      setMessage("Please enter your email.");
    } else {
      setMessage("Thank you for subscribing to our newsletter!");
    }

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <C.CTAStyled>
      <C.CTAContainer ref={innerRef}>
        <C.CTAContent>
          <C.TextContainer>
            <C.Heading>Find your next great opportunity!</C.Heading>
            <C.Subtitle>
              Join our newsletter and receive the best job openings every week
              on your inbox.
            </C.Subtitle>
          </C.TextContainer>

          <C.FormContainer>
            <C.SearchForm onSubmit={(e) => handleFormSubmit(e)}>
              {message && <C.Message>{message}</C.Message>}
              <C.SearchInput
                type="email"
                placeholder="Enter your email"
                maxlength="256"
                required={true}
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                type1="secondary"
                type2="large"
                width="100%"
                value="Subscribe"
                heroButton={true}
              />
            </C.SearchForm>

            <C.FormSubtitle>
              Join 15,000+ users already on the newsletter!
            </C.FormSubtitle>
          </C.FormContainer>
        </C.CTAContent>
      </C.CTAContainer>
    </C.CTAStyled>
  );
};

export default CTA;
