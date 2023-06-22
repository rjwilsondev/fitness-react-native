import { useRouter, useSegments } from "expo-router";
import React from "react";

export type User = {
  userId: number;
  username: string;
  email: string;
};

type UserOrNull = User | null;

type AuthState = {
  signIn: (user: User) => void;
  signOut: () => void;
  user: UserOrNull;
};

//@ts-expect-error Initializing AuthState in Provider
const AuthContext = React.createContext<AuthState>({});

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
const useProtectedRoute = (user: UserOrNull) => {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("(tabs)/home");
    }
  }, [user, segments]);
};

export const AuthProvider = (props: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [user, setAuth] = React.useState<UserOrNull>(null);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (user: User) => setAuth(user),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
