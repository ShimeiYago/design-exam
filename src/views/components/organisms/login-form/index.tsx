import React from 'react';
import { Spacing } from 'views/components/atoms/spacing';
import { TextWrapper } from 'views/components/atoms/text-wrapper';
import { LabeledInputField } from 'views/components/moleculars/labeled-input-field';
import { Button } from 'views/components/atoms/button';

export function LoginForm(props: Props): JSX.Element {
  const { onLogin } = props;
  const [mailAddress, setMailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <Spacing>
        <TextWrapper size="xlarge" align="center" bold>
          ログイン
        </TextWrapper>
      </Spacing>
      <Spacing marginVertical="40px">
        <Spacing marginBottom="24px">
          <LabeledInputField
            label="メールアドレス"
            value={mailAddress}
            onChange={(e) => setMailAddress(e.target.value)}
          />
        </Spacing>
        <Spacing>
          <LabeledInputField
            label="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Spacing>
      </Spacing>
      <Spacing>
        <Button color="primary" fullWidth onClick={onLogin}>
          ログイン
        </Button>
      </Spacing>
    </>
  );
}

export type Props = {
  onLogin: () => void;
};
