import { Helmet } from 'react-helmet';
import {Title} from './Home.styled';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>Welcome to your Phonebook</Title>
    </>
  );
}
