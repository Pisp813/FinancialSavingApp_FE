import React, { createContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  kycState: 'pending' | 'verified' | 'rejected';
  stripeCustomerId?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  // TODO: Add login/logout functions that call API
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null); // Placeholder: null initially

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};