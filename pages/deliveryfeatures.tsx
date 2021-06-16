import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Layout from "../components/layout";
import TopSection from "../components/topsection";
import OtherProjects from "../components/otherprojects";

export class Project2 extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.One = React.createRef();
    this.Two = React.createRef();
    this.Three = React.createRef();
  }
  render() {
    const scrollOne = () =>
      window.scrollTo({
        top: this.One.current.offsetTop - 220,
        behavior: "smooth",
      });
    const scrollTwo = () =>
      window.scrollTo({
        top: this.Two.current.offsetTop - 220,
        behavior: "smooth",
      });
    const scrollThree = () =>
      window.scrollTo({
        top: this.Three.current.offsetTop - 220,
        behavior: "smooth",
      });

    const test = () => (
      <Nav>
        <NavLink style={{ color: "white" }} onClick={scrollOne}>
          In-transit Experience
        </NavLink>
        <NavLink style={{ color: "white" }} onClick={scrollTwo}>
          Self-serve integration
        </NavLink>
        <NavLink style={{ color: "white" }} onClick={scrollThree}>
          Food item hero photo
        </NavLink>
      </Nav>
    );
    return (
      <Layout
        title="Jolene Ng | Delivery Features"
        project={true}
        children2={test}
      >
        <TopSection
          title="Delivery features"
          title2=""
          title3="For Food & Express"
          subtitle=""
        />
        <Paragraph>
          Here are some of the features I've worked on over my time at grab:
        </Paragraph>
        <SideSection>
          <SideText>
            <Subtitle ref={this.One}>In-transit Experience</Subtitle>
            <Paragraph>
              The main goal of the in-transit screens is to keep users assured
              and informed about the progress of their order. However, our
              previous screens had users focused too much on the map vs. any
              other information.
            </Paragraph>
            <Paragraph2>
              By replacing the map with animations and tweaking the visual
              hierarchy, we saw an up to 10% decrease in pre-allocation
              cancellation (for express).
            </Paragraph2>
          </SideText>
          <HalfImg />
        </SideSection>
        <SideSection>
          <SideText>
            <Subtitle ref={this.Two}>
              Self-serve Integration for Express API
            </Subtitle>
            <Paragraph>
              GrabExpress is the second most used integration product on
              <a href="https://developer.grab.com/"> GrabPlatform</a>.
            </Paragraph>
            <Paragraph2>
              By allowing partners to add configurations and make test orders
              via the web portal, we eliminated the need for engineering support
              and reduced the integration time by weeks.
            </Paragraph2>
          </SideText>
          <HalfImg2 />
        </SideSection>
        <SideSection>
          <SideText>
            <Subtitle ref={this.Three}>Food item hero photo</Subtitle>
            <Paragraph>
              With the understanding that users ordering food delivery are often
              motivated by images rather than words, we wanted to allow them to
              further interact with our item-level photos.
            </Paragraph>
            <Paragraph2>
              By showing the full photo on scroll and allowing users to zoom in
              on the image, we saw an increase in both menu to basket conversion
              as well as orders completed.
            </Paragraph2>
          </SideText>
          <HalfImg3 />
        </SideSection>
        <Subtitle>Other Projects </Subtitle>
        <OtherProjects
          url2="/parentsgateway"
          proj2="Parents Gateway"
          url3="/resaleportal"
          proj3="Housing resale portal"
        />
      </Layout>
    );
  }
}

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 16px 0px 0 0;
`;

const NavLink = styled.a`
  position: relative;
  width: 200px;
  padding: 8px 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: ${theme.animations.default};
  :hover {
    background: rgba(31, 31, 54, 0.4);
    opacity: 1;
  }
`;

const Subtitle = styled.h4`
  margin-top: 48px;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.lightgrey3};

  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 48px;
  }
`;

const Paragraph = styled.p`
  margin-top: 8px;
  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 16px;
  }
  a {
    font-size: ${theme.fontSizes[4]};
  }
`;

const Paragraph2 = styled.p`
  margin-top: 16px;
  color: ${theme.colors.lightgrey1};
  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 16px;
  }
  a {
    font-size: ${theme.fontSizes[4]};
  }
`;

const SideSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 64px;
  @media (max-width: ${theme.breakpoint[2]}) {
    flex-direction: column;
  }
`;
const SideText = styled.div`
  width: 50%;
  @media (max-width: ${theme.breakpoint[2]}) {
    width: 100%;
  }
`;

const HalfImg = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 12px;
  margin-top: 40px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/intransit.gif);
  background-size: 240px auto;
  background-position: 30px 30px;
  background-repeat: no-repeat;
  opacity: 0.94;
  @media (max-width: ${theme.breakpoint[2]}) {
    width: 100%;
    height: 320px;
    background-position: center 30px;
  }
`;

const HalfImg2 = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 12px;
  margin-top: 40px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/feat-0.png);
  background-size: 400px auto;
  background-position: 30px 30px;
  background-repeat: no-repeat;
  opacity: 0.94;
  @media (max-width: ${theme.breakpoint[2]}) {
    width: 100%;
    height: 300px;
    background-position: center 30px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    background-size: 280px auto;
    background-position: center 30px;
    height: 240px;
  }
`;

const HalfImg3 = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 12px;
  margin-top: 40px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/hero.gif);
  background-size: 240px auto;
  background-position: 30px 30px;
  background-repeat: no-repeat;
  opacity: 0.94;
  @media (max-width: ${theme.breakpoint[2]}) {
    width: 100%;
    height: 320px;
    background-position: center 30px;
  }
`;

export default Project2;
