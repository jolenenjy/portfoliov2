import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Layout from "../components/layout";
import TopSection from "../components/topsection";
import WorkSection from "../components/worksection";
import WorkSection2 from "../components/worksection2";

const IndexPage = () => (
  <Layout title="Jolene Ng | Home" home={true}>
    <TopSection
      title="Jolene Ng Jia Ying"
      title2="Sr. Product Designer"
      title3="Codes for fun."
      subtitle="A designer, researcher and tinkerer. I started designing after realising I could shape the products in my surroundings. My primary interest is in working on product experiences with a clear value proposition."
    />
    <WorkGrid>
      <WorkSection
        title="Food"
        subtitle="Self Pick-up"
        imgurl="/spk-0.png"
        url="/project1"
        title2="Delivery"
        subtitle2="features"
        imgurl2="/grab-0.png"
        url2="/project2"
        cta2="View features"
      />
      <WorkSection
        title="Parents Gateway"
        subtitle="for Schools"
        imgurl="/pg-0.png"
        url="/project3"
        title2="Housing"
        subtitle2="Resale Portal"
        imgurl2="/hdb-0.png"
        url2="/project4"
      />
      <WorkSection2
        title2="MATr"
        subtitle2="3D printed object"
        url2="https://www.stuck.sg/portfolio/matr/"
        title="Aether"
        subtitle="Interactive installation"
      />
    </WorkGrid>
  </Layout>
);

const WorkGrid = styled.div`
  display: grid;
  grid-gap: 112px;
  margin-top: 96px;
  @media (max-width: ${theme.breakpoint[1]}) {
    grid-gap: 56px;
  }
  @media (max-width: ${theme.breakpoint[2]}) {
    grid-gap: 48px;
  }
`;

export default IndexPage;