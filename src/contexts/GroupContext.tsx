import React, { createContext, useState, ReactNode } from 'react';

interface GroupMember {
  id: string;
  userId: string;
  rotaPosition: number;
  paidStatus: boolean;
  lastPaidDate?: Date;
}

interface Group {
  id: string;
  name: string;
  contributionAmount: number;
  payoutFrequency: 'monthly' | 'weekly';
  createdBy: string;
  members: GroupMember[];
}

interface GroupContextType {
  groups: Group[];
  setGroups: (groups: Group[]) => void;
  // TODO: Add functions to fetch/update groups from API
}

export const GroupContext = createContext<GroupContextType>({
  groups: [],
  setGroups: () => {},
});

export const GroupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>([]); // Placeholder: empty array

  return (
    <GroupContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupContext.Provider>
  );
};