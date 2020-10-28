import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Layout from "../components/layout";
import OtherProjects from "../components/otherprojects";
import TopSection from "../components/topsection";
import { useViewportScroll } from "framer-motion";

export class Project4 extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.Introduction = React.createRef();
    this.Research = React.createRef();
    this.Design = React.createRef();
    this.Testing = React.createRef();
    this.Result = React.createRef();
  }
  render() {
    const scrollIntro = () =>
      window.scrollTo({
        top: this.Introduction.current.offsetTop - 290,
        behavior: "smooth",
      });
    const scrollResearch = () =>
      window.scrollTo({
        top: this.Research.current.offsetTop - 220,
        behavior: "smooth",
      });
    const scrollDesign = () =>
      window.scrollTo({
        top: this.Design.current.offsetTop - 220,
        behavior: "smooth",
      });
    const scrollTesting = () =>
      window.scrollTo({
        top: this.Testing.current.offsetTop - 220,
        behavior: "smooth",
      });
    const scrollResult = () =>
      window.scrollTo({
        top: this.Result.current.offsetTop - 220,
        behavior: "smooth",
      });

    const test = () => (
      <Nav>
        <NavLink style={{ color: "white" }} onClick={scrollIntro}>
          Introduction
        </NavLink>
        <NavLink style={{ color: "white" }} onClick={scrollResearch}>
          Research
        </NavLink>
        <NavLink style={{ color: "white" }} onClick={scrollDesign}>
          Design Explorations
        </NavLink>
        <NavLink style={{ color: "white" }} onClick={scrollTesting}>
          Usability Testing
        </NavLink>
        <NavLink style={{ color: "white" }} onClick={scrollResult}>
          Results
        </NavLink>
      </Nav>
    );

    return (
      <Layout
        title="Jolene Ng | Housing resale portal"
        project={true}
        children2={test}
      >
        <TopSection
          title="Housing resale portal"
          title2=""
          title3="Streamlined application"
          subtitle=""
        />
        <Paragraph ref={this.Introduction}>
          The Housing & Development Board (HDB) is Singapore's public housing
          authority. Over the span of a few months, we were tasked to work with
          them to digitalise and streamline the application process for buying
          and selling public housing.
        </Paragraph>
        <Subtitle>My role</Subtitle>
        <Paragraph>
          As part of a team of 3, I assisted with the research and lead the
          design explorations. I also coded parts of the prototype for user
          testing and presented the final product to both the CEO of HDB and
          Minister of National Development.
        </Paragraph>
        <FullImg />

        <Subtitle>The brief</Subtitle>
        <Quote>
          "We want to reduce the time taken to complete the application process
          to buy and sell an HDB flat from 16 weeks to 8 weeks."
        </Quote>

        <SideSection>
          <SideText>
            <Subtitle ref={this.Research}>Research & Synthesis</Subtitle>
            <Paragraph>
              To understand the current situation, we shadowed the customer
              relationship managers and conducted in-depth interviews with both
              staff and citizens.
            </Paragraph>
            <Paragraph2>
              From there, we mapped our observations and findings into a journey
              map and identified problem areas.
            </Paragraph2>
          </SideText>
          <HalfImg />
        </SideSection>
        <Subtitle>Key findings</Subtitle>

        <List>
          <ListItem>
            <p>
              Physical appointments took the most time as waiting for your turn
              takes 2-3 months.
            </p>
          </ListItem>
          <ListItem>
            <p>
              Citizens did not like attending the appointments as they had to
              use their vacation leave.
            </p>
          </ListItem>
          <ListItem>
            <p>
              All parties feel appointments would be unnecessary if information
              online on what to do was clearer.
            </p>
          </ListItem>
        </List>

        <Subtitle>Key opportunity</Subtitle>
        <Quote>
          How might we better guide citizens through the application process
          online such that they are empowered to self help?
        </Quote>

        <Subtitle>Mapping the new experience</Subtitle>
        <Paragraph>
          With the findings, we started mapping out the new proposed flow,
          reducing the number of appointments and working out the internal
          changes required.
        </Paragraph>
        <FullImg2 />

        <Subtitle ref={this.Design}>Timeline design</Subtitle>
        <Paragraph>
          Having established the new user flow, we started looking into the
          design of the current website. The biggest problem identified was that
          citizens had no way to tell what they have or have not completed in
          the process, leaving them feeling lost.
        </Paragraph>
        <Paragraph2>
          With the new design, we wanted to make sure they would always have a
          clear overview of their progress as well as be guided towards the next
          step. After testing different concepts, we found that a timeline
          approach worked best.
        </Paragraph2>
        <FullImg3 />
        <Subtitle>Automated Form filling</Subtitle>
        <Paragraph>
          Guiding the user through the process would not be sufficient if each
          step was tedious to complete. We worked with the operations team and
          designed an entry point to allow citizens to pull most of the
          necessary data using MyInfo (the personal data platform for all
          Singaporean Citizens) instead of having to fill it up manually.
        </Paragraph>
        <FullImg4 />
        <Subtitle>Celebratory elements</Subtitle>
        <Paragraph>
          We also explored refreshing HDB's style (which used a number of dark
          colours) to a lighter palette to help make the complex information we
          needed to communicate more palatable (pun intended). Having a more
          conversational tone and celebrating task completion (confetti!) was
          also briefly considered.
        </Paragraph>
        <Paragraph2>
          <i> Unfortunate fact:</i> A significant number of people who are
          selling their flats are not doing it for joyous reasons. (e.g. tight
          finances, inherited the flat from a relative who passed and so on)
          Thus, we made the decision to remove the confetti and maintain a more
          serious tone.
        </Paragraph2>
        <FullImg5 />
        <Subtitle ref={this.Testing}>Testing </Subtitle>
        <Paragraph>
          With a clearer idea of the design, the team started coding the
          prototype for testing and sharing. We arranged for retrospective
          think-aloud sessions coupled with eye-tracking records to help us
          better understand how citizens would interact with the design.
        </Paragraph>
        <Paragraph2>
          This allowed us to idenitfy areas for refinement like in the timeline
          where we reduced the visual weight of the actions available for
          completed steps to allow citizens to better focus on their next step.
        </Paragraph2>
        <FullImg6 />
        <Subtitle>Design snapshot </Subtitle>
        <FullImg7 />
        <Subtitle ref={this.Result}>Results </Subtitle>
        <Paragraph>
          We launched the new portal design on Jan 2018. Months of work was
          validated by actual citizen feedback through news coverage on the
          various citizens' experience with the portal.
        </Paragraph>
        <Paragraph2>
          Not only did we successfully cut the application time by half,{" "}
          <b>
            buyers who chose to complete the application process completely on
            their own also increased by 10%{" "}
          </b>
          within the first few months.
        </Paragraph2>
        <FullImg8 />
        <Paragraph2>
          On a more personal note, my greatest satisfaction was hearing a friend
          exclaim after learning that I was involved in the project:
        </Paragraph2>
        <Quote>
          "My dad can barely read or speak English but I made a quick
          explanation and he completed the application on his own online."
        </Quote>
        <Subtitle>Reflection </Subtitle>
        <Paragraph>
          The design for the portal is nowhere near perfect but it is a good
          first cut. I look forward to seeing how HDB will continue to improve
          the portal.
        </Paragraph>
        <Paragraph2>
          Personally, I grew a lot as a designer, particularly in conducting
          research and testing my designs. I gained a new appreciation for how
          operations at another government agency work and how the research we
          do can furnish them with a deeper understanding regarding their
          interactions with citizens.
        </Paragraph2>
        <FullImg9 />
        <Subtitle>Other Projects </Subtitle>
        <OtherProjects />
      </Layout>
    );
  }
}

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
  color: ${theme.colors.lightgrey1};
  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 16px;
  }
`;

const Paragraph2 = styled.p`
  margin-top: 16px;
  color: ${theme.colors.lightgrey1};
  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 16px;
  }
`;

const Quote = styled.h3`
  margin-top: 16px;
  color: ${theme.colors.lightgrey1};
  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 16px;
  }
`;

const SideSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  @media (max-width: ${theme.breakpoint[2]}) {
    flex-direction: column;
  }
`;
const SideText = styled.div`
  width: 46%;
  @media (max-width: ${theme.breakpoint[2]}) {
    width: 100%;
  }
`;

const List = styled.ul`
  margin-left: 21px;
  margin-top: -8px;
`;
const ListItem = styled.li`
  padding-top: 16px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 16px 0px 0 0;
`;

const NavLink = styled.a`
  position: relative;
  width: 180px;
  padding: 8px 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: ${theme.animations.default};
  :hover {
    background: rgba(31, 31, 54, 0.4);
    opacity: 1;
  }
`;

const HalfImg = styled.div`
  width: 46%;
  height: auto;
  border-radius: 12px;
  margin-top: 40px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/hdbresarch.png);
  background-size: cover;
  background-position: center;
  opacity: 0.94;
  @media (max-width: ${theme.breakpoint[2]}) {
    width: 100%;
    height: 300px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 230px;
  }
`;

const FullImg = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 12px;
  margin-top: 48px;
  margin-bottom: 64px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/hdb.jpg);
  background-size: cover;
  background-position: center;
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 260px;
  }
`;

const FullImg2 = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 12px;
  margin-top: 48px;
  margin-bottom: 64px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/hdbbuyer.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 160px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 120px;
  }
`;

const FullImg3 = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 8px;
  margin-top: 48px;
  margin-bottom: 64px;
  background-image: url(/hdbdesign.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 130px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 100px;
  }
`;

const FullImg4 = styled.div`
  width: 100%;
  height: 230px;
  border-radius: 8px;
  margin-top: 48px;
  margin-bottom: 64px;
  background-image: url(/hdbform.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 130px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 100px;
  }
`;

const FullImg5 = styled.div`
  width: 100%;
  height: 190px;
  border-radius: 8px;
  margin-top: 48px;
  margin-bottom: 64px;
  background-image: url(/hdbcelebrate.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 110px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 80px;
  }
`;

const FullImg6 = styled.div`
  width: 100%;
  height: 430px;
  border-radius: 8px;
  margin-top: 48px;
  margin-bottom: 64px;
  background-image: url(/hdbUT.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 260px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 180px;
  }
`;

const FullImg7 = styled.div`
  width: 100%;
  height: 520px;
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 64px;
  background-image: url(/hdbfinal.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 300px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 210px;
  }
`;

const FullImg8 = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  margin-top: 48px;
  margin-bottom: 48px;
  background-image: url(/hdbnews.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 140px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 100px;
  }
`;

const FullImg9 = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 8px;
  margin-top: 48px;
  margin-bottom: 48px;
  background-image: url(/hdbend.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 200px;
  }
`;
export default Project4;
