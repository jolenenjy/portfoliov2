import * as React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Link from "next/link";

interface Props {
  title?: string;
  subtitle?: string;
  imgurl?: string;
  url?: string;
  cta?: string;
  title2?: string;
  subtitle2?: string;
  imgurl2?: string;
  url2?: string;
  cta2?: string;
  onlyone?: boolean;
}

const WorkSection: React.FunctionComponent<Props> = ({
  title = "default",
  subtitle = "default",
  imgurl = "/grab.png",
  url = "/selfpickup",
  cta = "Read case study",
  title2 = "default",
  subtitle2 = "default",
  imgurl2 = "/grab.png",
  url2 = "/deliveryfeatures",
  cta2 = "Read case study",
  onlyone = false,
}) => (
  <ProjectGrid>
    <Link href={url}>
      <ProjectCard>
        <ProjectDesc>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectTitle>{subtitle}</ProjectTitle>
          <ProjectCTA>{cta}</ProjectCTA>
        </ProjectDesc>
        <ProjectImg src={imgurl} alt="my image" />
      </ProjectCard>
    </Link>
    <div style={{ display: onlyone ? "none" : "block" }}>
      <Link href={url2}>
        <ProjectCard>
          <ProjectDesc>
            <ProjectTitle>{title2}</ProjectTitle>
            <ProjectTitle>{subtitle2}</ProjectTitle>
            <ProjectCTA>{cta2}</ProjectCTA>
          </ProjectDesc>
          <ProjectImg src={imgurl2} alt="my image" />
        </ProjectCard>
      </Link>
    </div>
  </ProjectGrid>
);

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  @media (max-width: ${theme.breakpoint[2]}) {
    grid-template-columns: 1fr;
    grid-gap: 48px;
  }
`;

const ProjectCard = styled.a`
  background: rgba(31, 31, 54, 0.4);
  height: 380px;
  border-radius: 8px;
  cursor: pointer;
  transition: ${theme.animations.default};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const ProjectDesc = styled.div`
  padding: 24px 32px 8px 32px;
`;

const ProjectImg = styled.img`
  width: 100%;
  bottom: 0;
  border-radius: 0px 0px 8px 8px;
  opacity: 0.5;
  filter: grayscale(100%);
  transition: ${theme.animations.default};
  @media (max-width: ${theme.breakpoint[1]}) {
    filter: grayscale(0%);
    opacity: 1;
  }
  ${ProjectCard}:hover & {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  color: ${theme.colors.lightgrey1};

  transition: ${theme.animations.default};
  ${ProjectCard}:hover & {
    color: ${theme.colors.lightgrey1};
    opacity: 1;
  }

  @media (max-width: ${theme.breakpoint[1]}) {
    color: ${theme.colors.lightgrey1};
    opacity: 1;
  }
`;

const ProjectCTA = styled.h5`
  padding: 12px 0px;
  color: ${theme.colors.grey4};
  font-weight: ${theme.fontWeights.medium};
  opacity: 1;
  transition: ${theme.animations.default};
  ${ProjectCard}:hover & {
    opacity: 1;
    ::after {
      transform: translateX(4px);
    }
  }
  ::after {
    content: "→";
    margin-left: 4px;
    position: absolute;
    transition: ${theme.animations.default};
  }
  @media (max-width: ${theme.breakpoint[1]}) {
    opacity: 1;
  }
`;

export default WorkSection;
