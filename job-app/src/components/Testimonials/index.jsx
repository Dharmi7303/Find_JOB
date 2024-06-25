import React from "react";
import styled from "styled-components";
import { Span } from "../../globals";
import { testimonials } from "../../constants";
import * as T from "./styles";

const Testimonials = ({ innerRef }) => {
  return (
    <T.TestimonialsStyled>
      <T.TestimonialsContainer ref={innerRef}>
        <T.TestimonialsContent>
          <T.TestimonialsText>
            <T.TestimonialsHeader>
              Trusted by over <Span>10,000 users</Span> around the world
            </T.TestimonialsHeader>
            <T.TestimonialsDescription>
              Every day, we hear from companies who've successfully hired a
              candidate or found benefits in our employer branding support.
            </T.TestimonialsDescription>
          </T.TestimonialsText>

          <T.TestimonialCardContainer>
            {testimonials.map((testimonial) => (
              <T.TestimonialCard key={testimonial.id}>
                <T.TestimonialHeader flexDirection="row">
                  <T.ProfilePic src={testimonial.picture} alt="profile-pic" />
                  <T.TestimonialHeader flexDirection="column">
                    <T.Name>{testimonial.name}</T.Name>
                    <T.JobTitle>{testimonial.position}</T.JobTitle>
                  </T.TestimonialHeader>
                </T.TestimonialHeader>

                <T.TestimonialText>"{testimonial.testimonial}"</T.TestimonialText>

                <T.TestimonialFooter>
                  <T.CompanyLogo src={testimonial.logo} alt="company-logo" />
                </T.TestimonialFooter>
              </T.TestimonialCard>
            ))}
          </T.TestimonialCardContainer>
        </T.TestimonialsContent>
      </T.TestimonialsContainer>
    </T.TestimonialsStyled>
  );
};

export default Testimonials;
