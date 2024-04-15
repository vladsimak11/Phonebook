import { Helmet } from 'react-helmet';
import {HeaderBlock, Title} from './Home.styled';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeaderBlock>
        <Title>Welcome to your Phonebook</Title>
      </HeaderBlock>
    </div>
  );
}
