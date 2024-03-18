import { Helmet } from 'react-helmet';
import css from './Home.module.css';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 className={css.title}>Welcome to your Phonebook</h1>
    </>
  );
}
