import * as React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface Props {
  children?: React.ReactNode;
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
          Back Home
        </NavLink>
      </Link>
    </Nav>
  );
}

export class Sidebar2 extends React.Component<Props> {
  render() {
    return (
      <SidebarContainer>
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
        {this.props.children}
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
  padding: 8px 8px 8px 28px;
  cursor: pointer;
  border-radius: 8px;
  transition: ${theme.animations.default};
  :hover {
    background: rgba(31, 31, 54, 0.4);
    opacity: 1;
    ::before {
      transform: translateX(-4px);
    }
  }
  ::before {
    content: "←";
    margin-left: -20px;
    position: absolute;
    transition: ${theme.animations.default};
  }
`;

const Divider = styled.div`
  min-height: 3px;
  margin: 32px 0px 0 8px;
  width: 160px;
  background: ${theme.colors.grey2};
`;

export default Sidebar2;
