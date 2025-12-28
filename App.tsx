import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { UserProvider } from './src/contexts/UserContext';
import { GroupProvider } from './src/contexts/GroupContext';

// TODO: Replace with your actual Stripe publishable key
const STRIPE_PUBLISHABLE_KEY = 'pk_test_your_key_here';

export default function App() {
  return (
    <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
      <UserProvider>
        <GroupProvider>
          <AppNavigator />
        </GroupProvider>
      </UserProvider>
    </StripeProvider>
  );
}