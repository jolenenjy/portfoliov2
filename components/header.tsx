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
      <Link href="/">
        <NavLink
          style={{
            color: router.pathname == "/" ? "white" : theme.colors.grey3,
          }}
        >
          Home
        </NavLink>
      </Link>
      <Link href="/playground">
        <NavLink
          style={{
            color:
              router.pathname == "/playground" ? "white" : theme.colors.grey3,
          }}
        >
          Playground
        </NavLink>
      </Link>
      <Link href="/about">
        <NavLink
          style={{
            color: router.pathname == "/about" ? "white" : theme.colors.grey3,
          }}
        >
          About
        </NavLink>
      </Link>
    </Nav>
  );
}

export class Header extends React.Component<Props> {
  render() {
    return (
      <SidebarContainer
        style={{ marginBottom: this.props.showInfo ? 55 : -82 }}
      >
        <Link href="/">
          <Logo>
            <Name viewBox="0 0 333 161">
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
            </Name>
          </Logo>
        </Link>
        <Links />
      </SidebarContainer>
    );
  }
}

const SidebarContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: hsl(240, 60%, 5%);
  z-index: 1000;
  @media (min-width: ${theme.breakpoint[1]}) {
    display: none;
  }
  @media (max-width: ${theme.breakpoint[3]}) {
    justify-content: center;
    height: 80px;
  }
`;

const Logo = styled.a`
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${theme.breakpoint[3]}) {
    display: none;
  }
`;

const Name = styled.svg`
  width: 70px;
`;

const Nav = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const NavLink = styled(motion.a)`
  position: relative;
  padding: 12px 12px;
  transition: ${theme.animations.default};
  :hover {
    color: white !important;
  }
`;

export default Header;
