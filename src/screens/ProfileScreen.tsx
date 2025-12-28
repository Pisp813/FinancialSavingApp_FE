import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { UserContext } from '../contexts/UserContext';

export default function ProfileScreen() {
  const { user, setUser } = useContext(UserContext);

  // Placeholder if no user
  const displayUser = user || { name: 'Guest', email: 'guest@example.com' };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Profile: {displayUser.name}</Text>
      <Text>Email: {displayUser.email}</Text>
      <Button title="Logout" onPress={() => setUser(null)} />
      {/* TODO: KYC verification placeholder - Integrate Stripe KYC */}
    </View>
  );
}