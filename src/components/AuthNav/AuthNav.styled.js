import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavList = styled.div`
  display: flex;
  gap: 30px;
  font-size: 20px;
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

  background-color: #2ee59d;
  color: white;

  &:hover {
    background-color: white;
    color: #2ee59d;
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

  background-color: white;
  color: #2ee59d;

  &:hover {
    background-color: #2ee59d;
    color: white;
  }
`;