import * as React from "react";
import Head from "next/head";
import styled from "styled-components";
import Sidebar from "./sidebar";
import Sidebar2 from "./sidebar2";
import Header from "./header";
import Footer from "./footer";
import Footer2 from "./footer2";
import Grid from "../components/grid";
import theme from "../styles/theme";
import GlobalStyles from "../styles/globalstyles";
import { motion, useViewportScroll, useTransform } from "framer-motion";

interface Props {
  title?: string;
  children: React.ReactNode;
  children2?: React.ReactNode;
  home?: boolean;
  about?: boolean;
  project?: boolean;
}

const ShowInfo = (props) => {
  const { scrollY } = useViewportScroll();
  const firstRange = [0, 340, 430, 520];
  const secondRange = [0, 840, 930, 1020];
  const opacityRange = [1, 1, 0.3, 0];
  const MoveRange = [0, 0, -50, -100];
  const firstOp = useTransform(scrollY, firstRange, opacityRange);
  const firstMove = useTransform(scrollY, firstRange, MoveRange);
  const secondOp = useTransform(scrollY, secondRange, opacityRange);
  const secondMove = useTransform(scrollY, secondRange, MoveRange);

  return (
    <div style={{ display: props.home ? "contents" : "none" }}>
      <TimeSection style={{ marginTop: 182 }}>
        <motion.div style={{ opacity: firstOp, translateY: firstMove }}>
          <TimeRange>2019 - Present</TimeRange>
          <CompanyTitle>Grab</CompanyTitle>
          <CompanyDesc>Delivery solutions</CompanyDesc>
        </motion.div>
      </TimeSection>
      <TimeSection style={{ marginTop: 394 }}>
        <motion.div style={{ opacity: secondOp, translateY: secondMove }}>
          <TimeRange>2017 - 2019</TimeRange>
          <CompanyTitle>Govtech</CompanyTitle>
          <CompanyDesc>Government services</CompanyDesc>
        </motion.div>
      </TimeSection>
      <TimeSection style={{ marginTop: 394 }}>
        <TimeRange>2012 - 2016</TimeRange>
        <CompanyTitle>Past Projects</CompanyTitle>
        <CompanyDesc>Industrial design</CompanyDesc>
      </TimeSection>
    </div>
  );
};

const ScrollIndicator = () => {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  });
  const { scrollYProgress } = useViewportScroll();
  const ScrollRange = [0, 1];
  const WidthRange = [0, width];
  const ScrollWidth = useTransform(scrollYProgress, ScrollRange, WidthRange);

  return (
    <ScrollDiv
      style={{
        width: ScrollWidth,
      }}
    />
  );
};

export class Layout extends React.Component<Props> {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Head>
          <title>{this.props.title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {this.props.project ? <ScrollIndicator /> : ""}
        <BodyContainer>
          <Header />
          <LayoutGrid gap={0} columns={"1fr 3fr"}>
            {this.props.project ? (
              <Sidebar2 showInfo={this.props.home}>
                {this.props.children2()}
              </Sidebar2>
            ) : (
              <div>
                <Sidebar showInfo={this.props.home} />
                <ShowInfo home={this.props.home} />
              </div>
            )}
            <ContentContainer>{this.props.children}</ContentContainer>
          </LayoutGrid>
        </BodyContainer>
        {this.props.about ? <Footer2 /> : <Footer />}
      </div>
    );
  }
}

const BodyContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoint[0]}) {
    width: 90%;
  }
`;

const ContentContainer = styled.div`
  max-width: ${theme.maxWidth};
  padding: 0 8px;
  min-width: 0;
`;

const TimeRange = styled.h6`
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.grey4};
  text-transform: uppercase;
`;

const CompanyTitle = styled.h2`
  margin-top: 12px;
`;

const CompanyDesc = styled.h4`
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.lightgrey1};
  margin-top: 4px;
`;

const LayoutGrid = styled(Grid)`
  @media (max-width: ${theme.breakpoint[1]}) {
    grid-template-columns: 1fr;
  }
`;

const TimeSection = styled.div`
  margin-left: 8px;
  position: sticky;
  top: 480px;
  overflow: hidden;
  @media (max-width: ${theme.breakpoint[1]}) {
    display: none !important;
  }
`;

const ScrollDiv = styled(motion.div)`
  position: sticky;
  height: 3px;
  top: 0;
  background: ${theme.colors.lightgrey1};
`;

export default Layout;
