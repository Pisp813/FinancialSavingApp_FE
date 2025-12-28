import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useStripe } from '@stripe/stripe-react-native';

export default function ContributionScreen() {
  const route = useRoute();
  const { groupId } = route.params as { groupId: string };
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const handleContribute = async () => {
    // TODO: Fetch client secret from backend /groups/:id/contribute
    // const clientSecret = await api.contributeToGroup(groupId);
    // await initPaymentSheet({ clientSecret });
    // await presentPaymentSheet();
    alert('Contribution simulated!');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Contribution for Group {groupId}</Text>
      <Button title="Pay with Stripe" onPress={handleContribute} />
      {/* TODO: Integrate Stripe Payment Sheet for real payments */}
    </View>
  );
}