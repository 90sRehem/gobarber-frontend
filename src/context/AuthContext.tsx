import React, { createContext, useCallback } from 'react';
import api from '../services/api'

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  SignIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const SignIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    })
    console.log(response.data)
  }, [])

  return (
    <AuthContext.Provider value={{ name: "Jonathan", SignIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
