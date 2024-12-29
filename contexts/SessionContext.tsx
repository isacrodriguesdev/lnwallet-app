import { router } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface SessionContextData {
  user: {
    email: string;
    avatar: string;
  };
  isLoading: boolean;
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: (callback?: () => void) => void;
}

export const SessionContext = createContext({} as SessionContextData);

export function useSession() {
  return useContext(SessionContext);
}

type StateProps = {
  children: React.ReactNode;
};

export function SessionProvider({ children }: StateProps) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({} as SessionContextData["user"]);

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((user) => {
        if (user) {
          setUser(JSON.parse(user));
          setAuthenticated(true);
          router.push("/(app)");
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  async function signIn(email: string, password: string) {
    // simulate a request to the server
    try {
      const response = await new Promise<SessionContextData["user"]>(
        (resolve) => {
          setTimeout(() => {
            resolve({
              avatar: "https://i.postimg.cc/T1r30RTF/173203457140296491.jpg",
              email,
            });
          }, 2000);
        }
      );

      setUser(response);
      setAuthenticated(true);
      AsyncStorage.setItem("user", JSON.stringify(response));
      router.push("/(app)");
    } catch (error) {
      console.error(error);
    }
  }

  function signOut(callback: () => void = () => {}) {
    setUser({} as SessionContextData["user"]);
    setAuthenticated(false);
    AsyncStorage.removeItem("user");
    callback();
  }

  return (
    <SessionContext.Provider
      value={{
        user,
        isAuthenticated,
        setAuthenticated,
        isLoading,
        signIn,
        signOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}
