import styled, { keyframes } from 'styled-components';

const typing = keyframes`   
from { width: 0 }
to { width: 100% }
`;

const blinkCaret = keyframes`   
from, to { border-color: transparent }
50% { border-color: var(--light-green); }
`;

export const HeaderBlock= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  color: var(--dark-blue);
  border-radius: 10px;
  width: 700px;
  padding: 25px 10px 25px 10px;
  margin-top: 250px;

  @media screen and (max-width: 480px) {
    width: 320px;
    padding: 15px 10px 15px 10px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  overflow: hidden; 
  border-right: .15em solid var(--light-green);
  white-space: nowrap;
  margin: 0 auto;
  animation: 
  ${typing} 3.5s steps(40, end),
  ${blinkCaret} .75s step-end infinite;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }

`;