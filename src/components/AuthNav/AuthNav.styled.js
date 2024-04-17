import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavList = styled.div`
  display: flex;
  gap: 30px;
  font-size: 20px;

  @media screen and (max-width: 480px) {
    gap: 15px;
  }
`;

export const LinkRegister = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    padding: 5px 10px 5px 10px;
  }

  background-color: var(--light-green);
  color: var(--white);

  &:hover {
    background-color: var(--white);
    color: var(--light-green);
  }
`;

export const LinkLogin = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    padding: 5px 10px 5px 10px;
  }

  background-color: var(--white);
  color: var(--light-green);

  &:hover {
    background-color: var(--light-green);
    color: var(--white);
  }
`;