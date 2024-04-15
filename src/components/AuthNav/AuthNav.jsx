import { AuthNavList, LinkRegister, LinkLogin } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavList>
      <LinkRegister to="/register">
        Sign Up
      </LinkRegister>
      <LinkLogin to="/login">
        Sign In
      </LinkLogin>
    </AuthNavList>
  );
};
