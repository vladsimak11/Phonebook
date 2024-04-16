import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 20px;
    margin: 0 auto;
    background-color: hsla(234.55, 34.38%, 12.55%, 0.8);
    height: 80px;

  @media screen and (max-width: 480px) {
    height: 70px;
    padding: 0 15px 0 15px;
  }
`;