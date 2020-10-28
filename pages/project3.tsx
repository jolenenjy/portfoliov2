import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Layout from "../components/layout";
import TopSection from "../components/topsection";
import OtherProjects from "../components/otherprojects";
import { useViewportScroll } from "framer-motion";

export class Project3 extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.Introduction = React.createRef();
    this.Research = React.createRef();
    this.Design = React.createRef();

    this.Result = React.createRef();
  }
  render() {
    const { scrollY } = useViewportScroll();

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
        <NavLink style={{ color: "white" }} onClick={scrollResult}>
          Results
        </NavLink>
      </Nav>
    );
    return (
      <Layout
        title="Jolene Ng | Parents Gateway"
        project={true}
        children2={test}
      >
        <TopSection
          title="Parents Gateway"
          title2=""
          title3="Communications platform"
          subtitle=""
        />
        <Paragraph ref={this.Introduction}>
          Parents Gateway is a product that strengthens school-home partnership
          to support students in their education journey. Developed together
          with the Ministry of Education, the product aims to reduce the
          administrative workload for teachers.
        </Paragraph>
        <Paragraph2>
          <a href="https://pg.moe.edu.sg/">View Site</a>
          <a
            style={{ marginLeft: 24 }}
            href="https://play.google.com/store/apps/details?id=com.moe.pgp&hl=en_SG"
          >
            Play Store
          </a>
          <a
            style={{ marginLeft: 24 }}
            href="https://apps.apple.com/sg/app/parents-gateway/id1267198708#?platform=iphone"
          >
            App Store
          </a>
        </Paragraph2>
        <Subtitle>My role</Subtitle>
        <Paragraph>
          Part of a team of 2 to design the mobile and web app (react native &
          react). Being in a small team, I was involved in a breadth of work
          from product strategy, branding to analytics.
        </Paragraph>
        <Paragraph2>
          Additionally, with both of us being designers who enjoy working in
          code, we also often jump in to assist with the frontend, be it setting
          base styles or fixing minor bugs.
        </Paragraph2>
        <FullImg />
        <Subtitle ref={this.Research}>The challenge</Subtitle>
        <Paragraph>
          Teachers in Singapore are overly bogged down by administrative matters
          in their day to day work. This takes away from their ability to focus
          on their core job – education. Thus, the question for us was:
        </Paragraph>
        <Quote>
          "How might we help teachers reduce time spent on administrative work
          so that they can focus on teaching?"
        </Quote>
        <Subtitle>What administrative problem?</Subtitle>
        <Paragraph>
          To uncover the main issues teachers were facing, we conducted
          interviews and mapped the various administrative matters they have to
          deal with across the school year.
        </Paragraph>
        <FullImg2 />
        <Paragraph3>
          After a few session with various teachers, we found that{" "}
          <b>sending announcements and collecting consent forms from parents</b>{" "}
          was the most time-consuming activity (most frequent across the year +
          difficulty).
        </Paragraph3>
        <Paragraph2>
          Today, teachers distribute physical copies of a consent form or
          announcement to students to pass to their parents. This leads to
          issues including lost forms, forgotten forms and so on, causing
          teachers to spend a lot of time chasing for them. Parents, too, face
          similar issues like retrieving the form from their child's messy bag.
        </Paragraph2>
        <FullImg3 />
        <Paragraph3>
          Thus, we decided to tackle this problem space first.
        </Paragraph3>
        <Paragraph2>
          Given that the teachers will be dealing with a large amount of
          information, we choose to first develop a web app for schools. On the
          other hand, with the frequent and unpredictable timing of school
          announcements, a mobile app for parents made more sense.
        </Paragraph2>
        <Subtitle ref={this.Design}>Design</Subtitle>
        <Paragraph>
          I started by working closely with the product manager to understand
          the deatiled feature prioritisation before mapping out rough flows.
          Both mobile and web products were designed incrementally through
          rounds of iterations and testings. View an early cut of the mobile app
          flow <a href="https://overflow.io/s/E33Y22/">here</a>
        </Paragraph>
        <FullImg4 />
        <Paragraph3>
          Along the way, there were some interesting design challenges we
          encountered:
        </Paragraph3>
        <Subtitle>Consideration #1:</Subtitle>
        <Quote2>How might we protect individuals with secret children?</Quote2>
        <Paragraph>
          While mapping out the user flow, we believed that directly displaying
          the retrieved children's name based on the user's ID was a natural
          thing to do. However, we soon had feedback that this was a problem for
          individuals with children their spouses are unaware of. As the
          government, it is not our intention to break families apart by
          accidentally revealing family secrets.
        </Paragraph>
        <Paragraph2>
          Thus, we added a page to the flow to let the user know we will be
          pulling this data and let them be in control of when this information
          is shown. Users can then make the call to either proceed with
          onboarding at a later date or move ahead.
        </Paragraph2>
        <FullImg5 />
        <Subtitle>Consideration #2:</Subtitle>
        <Quote2>
          How might we help admins differentiate between the tasks they do as a
          user and an admin?
        </Quote2>
        <Paragraph>
          For schools in Singapore, the administrator of the system is often,
          too, a teacher. This means that at any one time, an individual could
          be juggling both their tasks as a teacher and as an admin. From
          research we found that these users usually deal with these tasks
          separately and view them as different responsibilities. Hence, we
          decided to clearly separate the two.
        </Paragraph>
        <Paragraph2>
          This meant that the teacher would be able to first complete the tasks
          they need to do as a teacher, then cleanly switch over to the admin
          view to work on admin tasks, matching their mental model.
        </Paragraph2>
        <FullImg6 />
        <Subtitle>Design Snapshot</Subtitle>
        <FullImg7 />
        <Subtitle ref={this.Result}>Results</Subtitle>
        <Paragraph>
          The product is now in use by all public school in singapore and have
          seen over 100k announcements and forms sent. Here's an app store
          review from a parent:
        </Paragraph>
        <Quote>
          "Information is at my fingertips, no need to deal with papers. Very
          useful and organised."
        </Quote>
        <FullImg8 />
        <Subtitle>Reflection </Subtitle>
        <Paragraph>
          I am grateful to have been on a product team where I was empowered as
          a designer to guide the product direction. Along the way, I have
          learned a lot on what it takes to work with developers and in
          particular, how to design for react and react native apps.
        </Paragraph>
        <Paragraph2>
          While I did not elaborate on the design considerations for the web app
          here, that is an area I learnt a lot about. I anticipate seeing how
          the product will improve with future releases.
        </Paragraph2>
        <FullImg9 />
        <Subtitle>Other Projects </Subtitle>
        <OtherProjects url3="/project4" proj3="Housing resale portal" />
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

const Paragraph3 = styled.p`
  margin-top: 40px;
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
  height: 267.45px;
  border-radius: 12px;
  margin-top: 48px;
  margin-bottom: 56px;
  background: #7cb1c5;
  background-image: url(/pg-1.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 160px;
  }
`;

const FullImg2 = styled.div`
  width: 100%;
  height: 337px;
  border-radius: 12px;
  margin-top: 48px;
  margin-bottom: 48px;
  background: #ffffff;
  background-image: url(/pg-2.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 220px;
  }
`;

const FullImg3 = styled.div`
  width: 100%;
  height: 267.45px;
  border-radius: 12px;
  margin-top: 48px;
  margin-bottom: 48px;
  background-image: url(/pg-3.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 180px;
  }
`;

const FullImg4 = styled.div`
  width: 100%;
  height: 516px;
  border-radius: 12px;
  margin-top: 32px;
  margin-bottom: 8px;
  background-image: url(/pg-4.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[1]}) {
    height: 500px;
  }
  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 8px;
    height: 330px;
  }
`;

const FullImg5 = styled.div`
  width: 100%;
  height: 337px;
  border-radius: 12px;
  margin-top: 36px;
  margin-bottom: 56px;
  background: #f2f2f2;
  background-image: url(/pg-5.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 180px;
  }
`;

const FullImg6 = styled.div`
  width: 100%;
  height: 190px;
  border-radius: 12px;
  margin-top: 36px;
  margin-bottom: 56px;
  background-image: url(/pg-6.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 120px;
  }
`;

const FullImg7 = styled.div`
  width: 100%;
  height: 700px;
  border-radius: 12px;
  margin-top: 32px;
  margin-bottom: 56px;
  background-image: url(/pg-7.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 400px;
  }
`;

const FullImg8 = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 12px;
  margin-top: 32px;
  margin-bottom: 48px;
  background-image: url(/pg-8.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 150px;
  }
`;

const FullImg9 = styled.div`
  width: 100%;
  height: 320px;
  border-radius: 12px;
  margin-top: 48px;
  margin-bottom: 48px;
  background: #7cb1c5;
  background-image: url(/pg-9.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: ${theme.breakpoint[2]}) {
    height: 200px;
  }
`;
export default Project3;
