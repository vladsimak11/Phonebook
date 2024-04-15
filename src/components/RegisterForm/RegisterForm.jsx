import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, FormTitle, Input, Button  } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <FormTitle>Registration</FormTitle>
      <Input
        type="text"
        name="name"
        placeholder="Vladyslav"
      />

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

      <Button type="submit">Register</Button>
    </Form>
  );
};
