import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Layout from "../components/layout";
import TopSection from "../components/topsection";
import OtherProjects from "../components/otherprojects";
import { useViewportScroll } from "framer-motion";

export class Project1 extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.Introduction = React.createRef();
    this.Research = React.createRef();
    this.Design = React.createRef();
    this.Fix = React.createRef();
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
        top: this.Research.current.offsetTop - 120,
        behavior: "smooth",
      });
    const scrollDesign = () =>
      window.scrollTo({
        top: this.Design.current.offsetTop - 120,
        behavior: "smooth",
      });
    const scrollFix = () =>
      window.scrollTo({
        top: this.Fix.current.offsetTop - 120,
        behavior: "smooth",
      });

    const scrollResult = () =>
      window.scrollTo({
        top: this.Result.current.offsetTop - 120,
        behavior: "smooth",
      });

    const test = () => (
      <Nav>
        <NavLink style={{ color: "white" }} onClick={scrollIntro}>
          Introduction
        </NavLink>
        <NavLink style={{ color: "white" }} onClick={scrollResearch}>
          Fundamental Research
        </NavLink>
        <NavLink style={{ color: "white" }} onClick={scrollDesign}>
          Design Considerations
        </NavLink>
        <NavLink style={{ color: "white" }} onClick={scrollFix}>
          Post-launch fix
        </NavLink>
        <NavLink style={{ color: "white" }} onClick={scrollResult}>
          Results
        </NavLink>
      </Nav>
    );
    return (
      <Layout
        title="Jolene Ng | Food Self Pick-up"
        project={true}
        children2={test}
      >
        <TopSection
          title="Food self pick-up"
          title2=""
          title3="New business stream"
          subtitle=""
        />
        <Paragraph ref={this.Introduction}>
          Self pick-up is a new product developed as an extension of Grab's food
          delivery service. The idea is to allow customers to pick up their
          order from the restaurant themselves instead of having a driver
          deliver it.
        </Paragraph>
        <Subtitle>My role</Subtitle>
        <Paragraph>
          As the first designer on the new business team, I conducted
          fundamental research, usability testing, and designed the experience
          for both customers and merchants.
        </Paragraph>
        <FullImg />
        <Subtitle>The hypothesis</Subtitle>
        <Paragraph>
          The project was first initiated when the team looked into the
          different ways people were getting food. Apart from getting it
          delivered, they could also cook, eat out, or get takeout. We realised
          there was an opportunity to provide users with an alternative option
          on the app by allowing them to order for pickup.
        </Paragraph>
        <Subtitle ref={this.Research}>Research</Subtitle>
        <Paragraph>
          At this point, we found that while we understood the problems people
          face with delivery, we still had a lot to learn how and why they would
          get takeout. Hence, I planned for interview and concept testing
          sessions in Singapore and Indonesia.
        </Paragraph>
        <FullImg2 />
        <Paragraph3>
          We spoke to both customers and merchants to dive deeper into the
          current struggles they face with getting and preparing takeout. We
          found that:
        </Paragraph3>
        <Subtitle>Key findings</Subtitle>

        <List>
          <ListItem>
            <p>
              The main issue people face when getting takeout is with queueing
              as well as having to wait for the food to be prepared.
            </p>
          </ListItem>
          <ListItem>
            <p>
              People tend to be less adventurous for takeout orders and like to
              find a few good spots near them e.g. their home & office.
            </p>
          </ListItem>
          <ListItem>
            <p>
              People are interested in being able to avoid the delivery cost by
              picking up their order on their own as getting delivery all the
              time would be expensive
            </p>
          </ListItem>
        </List>
        <Subtitle ref={this.Design}>Design</Subtitle>
        <Paragraph>
          With that, we started mapping out the expected flow as well as how the
          information will pass through from the customer to the merchant before
          working on the design details.
        </Paragraph>
        <Subtitle>Consideration #1:</Subtitle>
        <Quote2>Distance matters</Quote2>
        <Paragraph>
          Given that when it comes to getting takeout, customers care more about
          how much they need to travel, we made the call to prioritise showing
          how far the restaurant is compared to other information to help with
          decision making.
        </Paragraph>
        <FullImg3 />
        <Subtitle>Consideration #2:</Subtitle>
        <Quote2>Order collection</Quote2>
        <Paragraph>
          When it came to order collection, there was a trade-off to make
          between accuracy (i.e. collecting the right order) and ease of use
          (i.e. how much effort is required to collect).
        </Paragraph>
        <Paragraph2>
          We considered requiring the customer to scan a qr code for better
          accuracy but decided to go with having a swipe button on the order
          screen instead. If the customer does not complete the order, the
          restaurant will be able to do so on their end after some time.
        </Paragraph2>
        <FullImg4 />
        <Subtitle ref={this.Fix}>Post-launch fix</Subtitle>
        <Quote2>High cancellation rates</Quote2>
        <Paragraph>
          When the feature first launched, we noticed an unusually high number
          of cancellations and realised it was coming from customers who
          thought they made a delivery order. Even though we were
          aware of this possibility before launch, we mistakenly thought that
          the cues we had was sufficient.
        </Paragraph>
        <Paragraph2>
          A quick-fix was implemented to add in stronger visual cues that this
          is a self pick-up order. With the fix, the{" "}
          <b>cancellation rates went down from 24% to 5% in a few weeks </b> and
          is nowadays holding steady at 0.5%
        </Paragraph2>
        <FullImg5 />
        <Subtitle>Design snapshot </Subtitle>
        <FullImg6 />
        <Subtitle ref={this.Result}>Results</Subtitle>
        <Paragraph>
          The Self Pick-up product has been steadily growing since the initial
          pilot and is now available in 6 countries across South East Asia with
          over 610k restaurants onboard. Additionally, with the current
          covid-reality, self pick-up has been a timely addition to serve the
          needs of customers who wanted to takeout food but did not want to
          spend too much time outdoors.
        </Paragraph>
        <Subtitle>Reflection</Subtitle>
        <Paragraph>
          It has been a fascinating journey seeing a product grow from a blank
          PowerPoint slide to serving thousands of orders daily. In particular,
          I cherish the experience of working closely with the team to roll out
          fixes when things were not going as planned after launch.
        </Paragraph>
        <Paragraph2>
          Since this iteration, we have also made further improvements and
          enhancements like showing a map view of nearby restaurants. I'm
          excited to see how the product will continue to grow as part of Grab's
          super app.
        </Paragraph2>
        <FullImg7 />
        <Subtitle>Other Projects </Subtitle>
        <OtherProjects
          url1="/deliveryfeatures"
          proj1="Delivery Features"
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
  a {
    font-size: ${theme.fontSizes[4]};
  }
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
  a {
    font-size: ${theme.fontSizes[4]};
  }
`;

const Paragraph3 = styled.p`
  margin-top: 40px;
  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 16px;
  }
`;

const List = styled.ul`
  margin-left: 21px;
  margin-top: -8px;
`;
const ListItem = styled.li`
  padding-top: 16px;
`;

const Quote2 = styled.h3`
  margin-top: 12px;
  margin-bottom: 12px;
  color: ${theme.colors.lightgrey1};
  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 24px;
  }
`;

const FullImg = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 12px;
  margin-top: 48px;
  margin-bottom: 64px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/spk-1.png);
  background-size: cover;
  background-position: center;
  @media (max-width: ${theme.breakpoint[2]}) {
    background-size: contain;
    background-repeat: no-repeat;
    height: 170px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 150px;
  }
`;

const FullImg2 = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 12px;
  margin-top: 40px;
  margin-bottom: 40px;
  background-image: url(/spk-2.png);
  background-size: cover;
  background-position: center;
  @media (max-width: ${theme.breakpoint[2]}) {
    background-size: contain;
    background-repeat: no-repeat;
    height: 150px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 120px;
  }
`;

const FullImg3 = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 12px;
  margin-top: 40px;
  margin-bottom: 56px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/spk-3.png);
  background-size: cover;
  background-position: center;
  @media (max-width: ${theme.breakpoint[2]}) {
    background-size: contain;
    background-repeat: no-repeat;
    height: 170px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 130px;
  }
`;

const FullImg4 = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 12px;
  margin-top: 40px;
  margin-bottom: 56px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/spk-4.png);
  background-size: cover;
  background-position: center;
  @media (max-width: ${theme.breakpoint[2]}) {
    background-size: contain;
    background-repeat: no-repeat;
    height: 170px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 130px;
  }
`;

const FullImg5 = styled.div`
  width: 100%;
  height: 370px;
  border-radius: 12px;
  margin-top: 40px;
  margin-bottom: 56px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/spk-5.png);
  background-size: cover;
  background-position: center;
  @media (max-width: ${theme.breakpoint[2]}) {
    background-size: contain;
    background-repeat: no-repeat;
    height: 170px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 160px;
  }
`;
const FullImg6 = styled.div`
  width: 100%;
  height: 800px;
  border-radius: 12px;
  margin-top: 40px;
  margin-bottom: 56px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/spk-6.png);
  background-size: cover;
  background-position: center;
  @media (max-width: ${theme.breakpoint[2]}) {
    background-size: contain;
    background-repeat: no-repeat;
    height: 500px;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    height: 350px;
  }
`;

const FullImg7 = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 12px;
  margin-top: 48px;
  margin-bottom: 48px;
  background: rgba(31, 31, 54, 0.4);
  background-image: url(/spk-7.png);
  background-size: cover;
  background-position: center;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 200px;
  }
`;

export default Project1;
