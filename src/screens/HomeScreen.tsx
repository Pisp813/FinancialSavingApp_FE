import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GroupContext } from '../contexts/GroupContext';
import GroupListItem from '../components/GroupListItem'; // Assuming a component for list items

export default function HomeScreen() {
  const { groups } = useContext(GroupContext);
  const navigation = useNavigation();

  // Placeholder data if context is empty
  const placeholderGroups = [
    { id: '1', name: 'Family Savings', contributionAmount: 100, payoutFrequency: 'monthly', createdBy: 'user1', members: [] },
  ];

  const displayGroups = groups.length > 0 ? groups : placeholderGroups;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Home - List of Groups</Text>
      <FlatList
        data={displayGroups}
        renderItem={({ item }) => (
          <GroupListItem
            group={item}
            onPress={() => navigation.navigate('GroupDetail', { groupId: item.id })}
          />
        )}
        keyExtractor={item => item.id}
      />
      <Button title="Create New Group" onPress={() => {/* TODO: Implement group creation */}} />
    </View>
  );
}