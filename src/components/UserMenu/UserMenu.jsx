import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { UserMenuBlock,  UserName, Logout} from './UserMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuBlock>
      <UserName>Welcome, {user.name}</UserName>
      <Logout type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Logout>
    </UserMenuBlock>
  );
};