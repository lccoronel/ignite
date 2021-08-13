import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";

import { api } from "../../services/api";
import { AuthContextData, AuthProviderProps, SignInCredentials, User } from "./types";

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const { push } = useRouter();
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'dashgo.token': token } = parseCookies();

    if (token) {
      api.get('/me').then(response => {
        const { email, permissions, roles } = response.data;

        setUser({ email, permissions, roles });
      })
    }
  }, [])

  async function signIn({email, password}: SignInCredentials) {
    try {
      const response = await api.post('sessions', { email, password })
      
      const { permissions, roles, token, refreshToken } = response.data;

      setCookie(undefined, 'dashgo.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })
      setCookie(undefined, 'dashgo.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      setUser({ email, permissions, roles });

      api.defaults.headers['Authorization'] = `Bearer ${token}`
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