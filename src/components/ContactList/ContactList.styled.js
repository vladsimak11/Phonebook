import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  list-style-type: circle;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Info = styled.span`
  display: block;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;

  padding: 10px;

  background-color: #fa0404;
  color: white;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;

  border-radius: 5px;
  border: none;
  opacity: 1;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.7;
  }
`;