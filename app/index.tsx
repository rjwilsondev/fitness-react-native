import { Stack } from "expo-router";
import { useAuth } from "../context/auth";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  const { user } = useAuth();
  console.log(user);
  return (
    <QueryClientProvider client={queryClient} >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </QueryClientProvider>
  );
}
