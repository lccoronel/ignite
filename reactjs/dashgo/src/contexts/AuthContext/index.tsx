import { createContext, useState } from "react";
import { useRouter } from "next/router";

import { api } from "../../services/api";
import { AuthContextData, AuthProviderProps, SignInCredentials, User } from "./types";

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const { push } = useRouter();
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  async function signIn({email, password}: SignInCredentials) {
    try {
      const response = await api.post('sessions', { email, password })

      const { permissions, roles } = response.data;
      setUser({ email, permissions, roles });
      push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}