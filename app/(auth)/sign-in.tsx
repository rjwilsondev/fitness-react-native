import { Text, View } from "react-native";
import { User, useAuth } from "../../context/auth";

const defaultUser: User = {
  userId: 1,
  username: "username",
  email: "test.example.com",
};

export default function SignIn() {
  const { signIn } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => signIn(defaultUser)}>Sign In</Text>
    </View>
  );
}
