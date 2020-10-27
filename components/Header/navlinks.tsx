import React from "react";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import { screens } from "./navitems";
import theme from "../../styles/theme";

export default function NavLinks() {
  const [selected, setSelected] = useState(0);
  const [isHover, toggleHover] = useState(false);

  return (
    <AnimateSharedLayout>
      <Nav
        style={{ transform: "translateZ(0)" }}
        onMouseOver={() => toggleHover(true)}
        onHoverEnd={() => toggleHover(false)}
      >
        {screens.map(({ title, href }, i) => (
          <NavLink
            key={i}
            onMouseOver={() => setSelected(i)}
            onHoverEnd={() => setSelected(i)}
          >
            <Link href={href}>
              <Nava
                style={
                  isHover
                    ? {
                        color:
                          i === selected
                            ? theme.colors.text
                            : theme.colors.grey2,
                      }
                    : {
                        color: theme.colors.text,
                      }
                }
              >
                {title}
              </Nava>
            </Link>
          </NavLink>
        ))}
      </Nav>
    </AnimateSharedLayout>
  );
}

const Nav = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  margin: 24px 112px 0 0;
`;

const NavLink = styled(motion.div)`
  position: relative;
  padding: 8px 0;
`;

const Nava = styled.a`
  font-size: ${theme.fontSizes[5]};
  transition: ${theme.animations.default};
  padding: 8px;
  width: 100%;
`;
