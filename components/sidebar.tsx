import * as React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface Props {
  showInfo?: boolean;
}

function Links() {
  const router = useRouter();
  return (
    <Nav>
      <Link href="/" shallow={true}>
        <NavLink
          style={{
            color: router.pathname == "/" ? theme.colors.textLink : "white",
            fontWeight:
              router.pathname == "/"
                ? theme.fontWeights.medium
                : theme.fontWeights.regular,
          }}
        >
          Home
        </NavLink>
      </Link>
      <Link href="/playground" shallow={true}>
        <NavLink
          style={{
            color:
              router.pathname == "/playground"
                ? theme.colors.textLink
                : "white",
            fontWeight:
              router.pathname == "/playground"
                ? theme.fontWeights.medium
                : theme.fontWeights.regular,
          }}
        >
          Playground
        </NavLink>
      </Link>
      <Link href="/about">
        <NavLink
          style={{
            color:
              router.pathname == "/about" ? theme.colors.textLink : "white",
            fontWeight:
              router.pathname == "/about"
                ? theme.fontWeights.medium
                : theme.fontWeights.regular,
          }}
        >
          About
        </NavLink>
      </Link>
    </Nav>
  );
}

export class Sidebar extends React.Component<Props> {
  render() {
    return (
      <SidebarContainer
        style={{ marginBottom: this.props.showInfo ? 100 : -38 }}
      >
        <Link href="/">
          <Logo>
            <svg width="120px" viewBox="0 0 333 161">
              <g
                id="Page-1"
                stroke={theme.colors.textSecondary}
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <g
                  id="Asset-3"
                  transform="translate(3.000000, 4.000000)"
                  strokeWidth="6"
                >
                  <path
                    d="M24.21,62.57 L88.21,34.57 C88.21,34.57 43.02,165.32 2.21,152.57 C-13.79,147.57 87.59,76.57 95.21,76.57 C110.21,76.57 100.39,119.82 82.21,108.57 C61.21,95.57 144.21,21.57 146.21,2.57 C148.21,-16.43 104.21,101.57 119.21,111.57 C134.21,121.57 170.21,56.57 163.21,54.57 C156.21,52.57 131.21,94.57 144.21,106.57 C157.21,118.57 174.21,65.57 174.21,65.57 L165.21,103.57 C165.21,103.57 188.21,59.57 192.21,95.57 C196.21,131.57 220.21,67.57 215.21,58.57 C210.21,49.57 194.21,100.57 211.21,101.57 C228.21,102.57 248.21,85.57 261.21,85.57 C274.21,85.57 281.21,89.57 288.21,89.57 C295.21,89.57 307.21,85.57 307.21,85.57"
                    id="Path"
                  ></path>
                  <line
                    x1="326.31"
                    y1="78.01"
                    x2="326.21"
                    y2="77.57"
                    id="Path"
                  ></line>
                </g>
              </g>
            </svg>
          </Logo>
        </Link>
        <Links />

        <Socials>
          <a href="https://www.linkedin.com/in/joleneng/">
            <SocialIcon
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                className=""
              ></path>
            </SocialIcon>
          </a>

          <a href="https://www.instagram.com/jolenenjy/">
            <SocialIcon
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </SocialIcon>
          </a>

          <a href="/">
            <SocialIcon
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                className=""
              ></path>
            </SocialIcon>
          </a>
        </Socials>

        <Divider />
      </SidebarContainer>
    );
  }
}

const SidebarContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 120px;
  height: 360px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${theme.breakpoint[1]}) {
    display: none;
  }
`;

const Logo = styled.a`
  padding: 0 8px;
`;

const Nav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 24px 0px 0 0;
`;

const NavLink = styled(motion.a)`
  position: relative;
  width: 160px;
  padding: 8px 8px;
  cursor: pointer;
  border-radius: 8px;

  :hover {
    background: rgba(31, 31, 54, 0.4);
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  margin: 32px 0 0 0;
`;

const SocialIcon = styled.svg`
  height: 20px;
  padding: 0 16px 0 8px;
  color: ${theme.colors.grey2};
  transition: ${theme.animations.default};
  :hover {
    color: ${theme.colors.textLink};
  }
`;

const Divider = styled.div`
  min-height: 3px;
  margin: 32px 0px 0 8px;
  width: 160px;
  background: ${theme.colors.grey2};
`;

export default Sidebar;
