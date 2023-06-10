import { Stack } from "expo-router";
import { useAuth } from "../context/auth";

export default function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
