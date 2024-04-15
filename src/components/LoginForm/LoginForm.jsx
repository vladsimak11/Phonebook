import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Form, FormTitle, Input, Button  } from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <FormTitle>Login</FormTitle>
      <Input
        type="email"
        name="email"
        placeholder="vladsimak11@gmail.com"
      />

      <Input
        type="password"
        name="password"
        placeholder="Password"
      />

      <Button type="submit">Login</Button>
    </Form>
  );
};
