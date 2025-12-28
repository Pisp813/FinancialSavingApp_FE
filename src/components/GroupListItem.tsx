import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface GroupListItemProps {
  group: { id: string; name: string; contributionAmount: number };
  onPress: () => void;
}

export default function GroupListItem({ group, onPress }: GroupListItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 10, borderBottomWidth: 1 }}>
        <Text>{group.name} - ${group.contributionAmount}</Text>
      </View>
    </TouchableOpacity>
  );
}