import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function PayoutScreen() {
  const route = useRoute();
  const { groupId } = route.params as { groupId: string };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Payout for Group {groupId}</Text>
      <Text>Status: Pending (Placeholder)</Text>
      <Button title="Trigger Payout" onPress={() => alert('Payout simulated!')} />
      {/* TODO: Fetch payouts from /groups/:id/payouts and handle logic */}
    </View>
  );
}