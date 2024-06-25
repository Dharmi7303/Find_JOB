import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { footerNav, socialNav } from "../../constants";
import { logo_small } from "../../assets";
import * as F from "./styles";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <F.FooterStyled>
      <F.FooterContainer>
        <F.FooterContent>
          <F.TextContainer>
            <F.Heading>Find your next great opportunity!</F.Heading>
            <p>
              Jobs is a curated job board of the best jobs for developers,
              designers and marketers in the tech industry.
            </p>
            <Link to={"/jobs"}>
              <Button type1="primary" type2="default" value="Browse jobs" />
            </Link>
          </F.TextContainer>

          <F.FooterListContainer>
            <F.FooterList>
              <F.Heading>Menu</F.Heading>
              {footerNav.map((link) => (
                <F.ListItem key={link.id}>
                  <NavLink
                    to={link.link}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "var(--color-primary-1)" : "inherit",
                      };
                    }}
                  >
                    {link.title}
                  </NavLink>
                </F.ListItem>
              ))}
            </F.FooterList>

            {/* social media links */}
            <F.FooterList>
              <F.Heading>Follow Us</F.Heading>
              {socialNav.map((link) => (
                <F.ListItem key={link.id}>
                  <F.AnchorTag href={link.link}>
                    <F.SocialIcon src={link.icon} alt="social-icon" />
                    {link.title}
                  </F.AnchorTag>
                </F.ListItem>
              ))}
            </F.FooterList>
          </F.FooterListContainer>
        </F.FooterContent>

        <F.FooterBottom>
        <Link to={"/jobs"}>
            <F.CompanyLogo src={logo_small} alt="company-logo" />
          </Link>
          <p>
            © Copyright Jobs - Designed by{" "}
            
            Developed by Dharmi Javiya.
          </p>
        </F.FooterBottom>
      </F.FooterContainer>
    </F.FooterStyled>
  );
};

export default Footer;
