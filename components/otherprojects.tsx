import * as React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  url1?: string;
  proj1?: string;

  url2?: string;
  proj2?: string;

  url3?: string;
  proj3?: string;
}

const OtherProjects: React.FunctionComponent<Props> = ({
  url1 = "/selfpickup",
  proj1 = "Self Pick-Up",
  url2 = "/deliveryfeatures",
  proj2 = "Delivery features",
  url3 = "/parentsgateway",
  proj3 = "Parents Gateway",
}) => (
  <Nav>
    <Link href={url1} shallow={true}>
      <NavLink>{proj1}</NavLink>
    </Link>
    <Link href={url2} shallow={true}>
      <NavLink>{proj2}</NavLink>
    </Link>
    <Link href={url3} shallow={true}>
      <NavLink>{proj3}</NavLink>
    </Link>
  </Nav>
);

const Nav = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 24px -8px 0 -8px;
  @media (max-width: ${theme.breakpoint[2]}) {
    flex-direction: column;
  }
`;

const NavLink = styled(motion.a)`
  position: relative;
  font-size: ${theme.fontSizes[4]};
  width: 260px;
  padding: 8px 8px;
  cursor: pointer;
  border-radius: 8px;
  color: white;
  transition: ${theme.animations.default};
  :hover {
    background: rgba(31, 31, 54, 0.4);
    opacity: 1;
    ::after {
      transform: translateX(4px);
    }
  }
  ::after {
    content: "→";
    margin-left: 8px;
    position: absolute;
    transition: ${theme.animations.default};
  }
  @media (max-width: ${theme.breakpoint[2]}) {
    width: 100%;
  }
`;

export default OtherProjects;
