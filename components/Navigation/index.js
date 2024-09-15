import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  background-color: black;
  padding: 10px 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 15px;
  font-size: 1.1em;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: blue;
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link href="/">
            <NavLink>Spotlight</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/art-pieces">
            <NavLink>Pieces</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/favorites">
            <NavLink>Favorites</NavLink>
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
}
