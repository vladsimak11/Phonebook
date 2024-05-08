import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    margin-top: 15px;
  }
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

export const Info = styled.div`
  display: flex;
  gap: 10px;
`;

export const Name = styled.span`
  display: block;
  color: #ff6f61;
  letter-spacing: 0.1em;
`;

export const Number = styled.span`
  display: block;
  color: var(--dark-blue);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 25px;

  padding: 10px;

  background-color: #fa0404;
  color: var(--white);
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