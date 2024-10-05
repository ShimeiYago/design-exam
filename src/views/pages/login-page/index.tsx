import { Card } from 'views/components/atoms/card';
import { LoginForm } from 'views/components/organisms/login-form';
import { login } from 'store/login/slice';
import { Spacing } from 'views/components/atoms/spacing';
import { useAppDispatch } from 'store';

export function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Spacing paddingTop="30px" paddingHorizontal="5px">
      <Card maxWidth="480px">
        <Spacing paddingHorizontal="80px" paddingVertical="40px">
          <LoginForm onLogin={() => dispatch(login())} />
        </Spacing>
      </Card>
    </Spacing>
  );
}
