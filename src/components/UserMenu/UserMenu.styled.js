import styled from 'styled-components';

export const UserMenuBlock = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserName = styled.p`
  color: white;
  
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Logout = styled.button`
  width: 120px;
  border: none;
  background-color: #2EE59D;
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  color: white;
  border-radius: 10px;
  text-transform: uppercase; 
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #18af73;
  
  }
`;