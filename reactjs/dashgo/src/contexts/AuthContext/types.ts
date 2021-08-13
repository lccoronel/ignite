import { ReactNode } from "react";

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface User {
  email: string;
  permissions: string[];
  roles: string[];
}

export interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: User;
} 

export interface AuthProviderProps {
  children: ReactNode;
}

