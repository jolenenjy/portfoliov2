import * as React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

interface Props {
  title: string;
  title2: string;
  title3: string;
  subtitle: string;
}

const TopSection: React.FunctionComponent<Props> = ({
  title = "Default title",
  title2 = "Default title",
  title3 = "Default title",
  subtitle = "Default subtitle",
}) => (
  <TopContainer>
    <h1>{title}</h1>
    <AccentTitle>{title2}</AccentTitle>
    <DarkTitle>{title3}</DarkTitle>
    <Subtitle>{subtitle}</Subtitle>
  </TopContainer>
);

const TopContainer = styled.div`
  width: 100%;
  padding-top: 102px;
`;

const AccentTitle = styled.h1`
  color: #166def;
`;

const DarkTitle = styled.h1`
  color: ${theme.colors.grey2};
`;

const Subtitle = styled.h4`
  font-weight: ${theme.fontWeights.regular};
  padding: 16px 48px 0 2px;
  color: ${theme.colors.lightgrey1};
  @media (max-width: ${theme.breakpoint[1]}) {
    padding: 16px 24px 0 2px;
  }
  @media (max-width: ${theme.breakpoint[2]}) {
    padding: 16px 8px 0 2px;
  }
`;

export default TopSection;
