import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Layout from "../components/layout";
import TopSection from "../components/topsection";
import Canvas6 from "../sketches/canvas6";
import Canvas7 from "../sketches/canvas7";
import Canvas5 from "../sketches/canvas5";

const Playground = () => (
  <Layout title="Jolene Ng | Playground" about={false}>
    <TopSection
      title="Playground"
      title2=""
      title3="Experimental zone"
      subtitle="Recently, I've been learning how to make stuff with canvas cause I like math & colors."
    />
    <PlayGrid>
      <div>
        <Canvas6 />
        <Caption>
          <i>#1 Layered columns</i>
        </Caption>
      </div>
      <div>
        <Canvas5 />
        <Caption>
          <i>#2 Overlapping height maps</i>
        </Caption>
      </div>
      <div>
        <Canvas7 />
        <Caption>
          <i>#3 Transitioning linear gradient</i>
        </Caption>
      </div>
    </PlayGrid>
  </Layout>
);

const PlayGrid = styled.div`
  display: grid;
  grid-gap: 96px;
  margin-top: 96px;
  @media (max-width: ${theme.breakpoint[1]}) {
    grid-gap: 48px;
    margin-top: 80px;
  }
  @media (max-width: ${theme.breakpoint[2]}) {
    margin-top: 72px;
  }
`;

const Caption = styled.h5`
  margin-top: 8px;
  font-weight: ${theme.fontWeights.regular};
`;

export default Playground;
