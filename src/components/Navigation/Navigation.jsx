import { useAuth } from '../../hooks/useAuth';
import { Nav, LinkNav} from './Navigation.styled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <LinkNav to="/">
        Home
      </LinkNav>
      { isLoggedIn && (
      <LinkNav to="/contacts">
        Contacts
      </LinkNav>)}
    </Nav>
  );
};