import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Layout from "../components/layout";
import TopSection from "../components/topsection";

export class About extends React.Component {
  render() {
    return (
      <Layout title="Jolene Ng | About" about={true}>
        <TopSection title="About me" title2="" title3="" subtitle="" />
        <AboutText>
          <h4>
            Born and based in sunny Singapore. I first started designing in 2012
            when I stumbled into industrial design in university. Since then, it
            has been a journey discovering different ways to bring an idea to
            life.
          </h4>
          <Subtitle>On product design</Subtitle>
          <Paragraph>
            At both{" "}
            <a
              href="https://dribbble.com/grab"
              style={{ fontWeight: theme.fontWeights.medium }}
            >
              Grab
            </a>{" "}
            and{" "}
            <a
              href="https://www.tech.gov.sg/"
              style={{ fontWeight: theme.fontWeights.medium }}
            >
              Govtech
            </a>
            , I had the opportunity to lead design work ranging from feature
            improvements to completely new products. I like being involved in
            the end to end product process. From defining scope and research to
            iterating designs, pushing code (just a little frontend stuff), and
            running experiments. After all, nothing beats seeing the impact of a
            product live in action.
          </Paragraph>
          <Subtitle>Outside work</Subtitle>
          <Paragraph>
            In my free time, you can find me tinkering with 3d printers, finding
            interesting recipes to cook (chicken wing gyozas!), or just
            doodling.
          </Paragraph>
        </AboutText>
      </Layout>
    );
  }
}

const AboutText = styled.div`
  margin: 0 64px 0 0;
  color: ${theme.colors.lightgrey1};
  @media (max-width: ${theme.breakpoint[0]}) {
    margin: 0 32px 0 0;
  }
  @media (max-width: ${theme.breakpoint[1]}) {
    margin: 0 64px 0 0;
  }
  @media (max-width: ${theme.breakpoint[2]}) {
    margin: 0 8px 0 0;
  }
`;

const Subtitle = styled.h6`
  margin-top: 32px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.grey3};
  text-transform: uppercase;
  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 48px;
  }
`;

const Paragraph = styled.h4`
  margin-top: 8px;

  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 16px;
  }
`;

export default About;
