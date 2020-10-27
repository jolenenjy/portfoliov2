import * as React from "react";
import { useRef } from "react";
import styled from "styled-components";
import theme from "../styles/theme";

interface Props {
  title?: string;
  subtitle?: string;
  url?: string;
  title2?: string;
  subtitle2?: string;
  url2?: string;
  onlyone?: boolean;
  seevideo?: boolean;
}

class WorkSection2 extends React.Component<Props> {
  state = { seevideo: false };

  showVideo = () => {
    document.body.style.overflow = "hidden";
    this.refs.video.play();
    this.refs.video.volume = 0.3;
    this.setState({ seevideo: true });
  };

  hideVideo = () => {
    document.body.style.overflow = "scroll";
    this.refs.video.pause();
    this.refs.video.currentTime = 0;
    this.setState({ seevideo: false });
  };

  render() {
    return (
      <ProjectGrid>
        <VideoContainer
          style={{ display: this.state.seevideo ? "flex" : "none" }}
        >
          <CloseContainer onClick={this.hideVideo}>
            <CloseIcon
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </CloseIcon>
          </CloseContainer>
          <VideoModal ref="video" controls controlsList="nodownload">
            <source src="/aether.mp4" type="video/mp4" />
          </VideoModal>
        </VideoContainer>
        <a onClick={this.showVideo}>
          <ProjectCard>
            <ProjectDesc>
              <ProjectTitle>{this.props.title}</ProjectTitle>
              <ProjectTitle>{this.props.subtitle}</ProjectTitle>
              <ProjectCTA>Watch video</ProjectCTA>
            </ProjectDesc>
          </ProjectCard>
        </a>
        <div style={{ display: this.props.onlyone ? "none" : "block" }}>
          <a href={this.props.url2}>
            <ProjectCard2>
              <ProjectDesc>
                <ProjectTitle>{this.props.title2}</ProjectTitle>
                <ProjectTitle>{this.props.subtitle2}</ProjectTitle>
                <ProjectCTA2>View more</ProjectCTA2>
              </ProjectDesc>
            </ProjectCard2>
          </a>
        </div>
      </ProjectGrid>
    );
  }
}

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  @media (max-width: ${theme.breakpoint[2]}) {
    grid-template-columns: 1fr;
    grid-gap: 48px;
  }
`;

const ProjectCard2 = styled.div`
  position: relative;
  height: 380px;
  border-radius: 8px;
  background-color: rgba(31, 31, 54, 0.4);
  cursor: pointer;
  transition: ${theme.animations.default};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-image: url(/matr1sq.jpg);
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: -1;
    transition: ${theme.animations.default};
  }
  :hover {
    ::after {
      opacity: 1;
    }
  }
  @media (max-width: ${theme.breakpoint[1]}) {
    ::after {
      opacity: 1;
    }
  }
`;

const ProjectCard = styled.div`
  position: relative;
  height: 380px;
  border-radius: 8px;
  background-color: rgba(31, 31, 54, 0.4);
  cursor: pointer;
  transition: ${theme.animations.default};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-image: url(/aether1.png);
    background-size: cover;
    background-position: center;
    opacity: 0.6;
    z-index: -1;
    transition: ${theme.animations.default};
  }
  :hover {
    ::after {
      opacity: 1;
    }
  }

  @media (max-width: ${theme.breakpoint[1]}) {
    ::after {
      opacity: 1;
    }
  }
`;

const ProjectDesc = styled.div`
  padding: 24px 32px;
`;

const ProjectCTA2 = styled.h5`
  padding: 12px 0px;
  color: ${theme.colors.grey4};
  font-weight: ${theme.fontWeights.medium};
  opacity: 1;
  transition: ${theme.animations.default};
  ${ProjectCard2}:hover & {
    opacity: 1;
    ::after {
      transform: translateX(3px) translateY(-1px) rotate(-40deg);
    }
  }
  ::after {
    content: "→";
    margin-left: 4px;
    position: absolute;
    transform: rotate(-40deg);
    transition: ${theme.animations.default};
  }
  @media (max-width: ${theme.breakpoint[1]}) {
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

const ProjectTitle = styled.h3`
  color: ${theme.colors.lightgrey1};
  transition: ${theme.animations.default};
  ${ProjectCard}:hover & {
    color: ${theme.colors.lightgrey1};
  }
  ${ProjectCard2}:hover & {
    color: ${theme.colors.lightgrey1};
  }
  @media (max-width: ${theme.breakpoint[1]}) {
    color: ${theme.colors.lightgrey1};
  }
`;

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2000;
`;

const VideoModal = styled.video`
  width: 80%;
  height: auto;
`;

const CloseContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(31, 31, 54, 0.2);
  transition: ${theme.animations.default};
  :hover {
    background-color: rgba(31, 31, 54, 0.4);
  }
`;

const CloseIcon = styled.svg`
  width: 32px;
  fill: rgba(255, 255, 255, 0.6);
  transition: ${theme.animations.default};
  ${CloseContainer}:hover & {
    fill: rgba(255, 255, 255, 0.8);
  }
`;

export default WorkSection2;
