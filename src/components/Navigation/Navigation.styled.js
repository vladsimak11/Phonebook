import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  font-size: 25px;
  color: var(--white);

  @media screen and (max-width: 480px) {
    gap: 15px;
  }
  
`;

export const LinkNav = styled(NavLink)`
  color: var(--white);
  text-decoration: none;

  &:hover {
    color: var(--light-green);
    text-decoration: underline;
  }

  &.active {
    color: var(--light-green);
  }
`;