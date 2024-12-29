import {
  Container,
  FormInputContainer,
  FormContainer,
  TextInput,
  Button,
  Title,
  ButtonText,
} from "@/app/styles";
import { useSession } from "@/contexts/SessionContext";
import { useState } from "react";
import { Text } from "react-native";

interface UserCredentials {
  email: string;
  password: string;
}

export default function SignIn() {
  const { signIn } = useSession();
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "isacrodriguesdev@protonmail.com",
    password: "admin",
  } as UserCredentials);

  return (
    <Container>
      <Title>My Bank</Title>

      <FormContainer>
        <FormInputContainer>
          <Text>Email</Text>
          <TextInput
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
            onChangeText={(email) => setCredentials({ ...credentials, email })}
            value={credentials.email}
          />
        </FormInputContainer>

        <FormInputContainer>
          <Text>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            secureTextEntry
            onChangeText={(password) =>
              setCredentials({ ...credentials, password })
            }
            value={credentials.password}
          />
        </FormInputContainer>
      </FormContainer>

      <Button onPress={() => signIn(credentials.email, credentials.password)}>
        <ButtonText>Entrar</ButtonText>
      </Button>
    </Container>
  );
}
