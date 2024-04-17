import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
  color: #f4a442;
`;

export const Input = styled.input`
  height: 25px;
  font: inherit;
  border: 2px solid #c1c1c1;
  padding: 5px 0px 5px 10px;
  outline: none;

  &:focus {
    border: 2px solid var(--light-green);
  }
`;