import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { GroupContext } from '../contexts/GroupContext';

export default function GroupDetailScreen() {
  const route = useRoute();
  const { groupId } = route.params as { groupId: string };
  const { groups } = useContext(GroupContext);
  const navigation = useNavigation();

  // Find group by ID (placeholder logic)
  const group = groups.find(g => g.id === groupId) || { name: 'Placeholder Group', members: [], contributionAmount: 100 };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Group Detail: {group.name}</Text>
      <Text>Members: {group.members.length}</Text>
      <Text>Contribution: ${group.contributionAmount}</Text>
      <Button title="Contribute" onPress={() => navigation.navigate('Contribution', { groupId })} />
      <Button title="View Payouts" onPress={() => navigation.navigate('Payout', { groupId })} />
      {/* TODO: List rota, members, statuses */}
    </View>
  );
}