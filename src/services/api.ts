// Dummy API service - Replace BASE_URL with your backend URL
const BASE_URL = 'http://192.168.31.101:8000'; // TODO: Use env variable for production

export const signup = async (data: { name: string; email: string; password: string }) => {
  // Simulate API call
  return { success: true, user: { id: '1', name: data.name, email: data.email } }; // TODO: Implement real fetch to /auth/signup
};

export const login = async (data: { email: string; password: string }) => {
  // Simulate
  return { success: true, token: 'dummy_token' }; // TODO: /auth/login
};

export const getGroups = async () => {
  // Simulate
  return []; // TODO: GET /groups with auth header
};

export const createGroup = async (data: any) => {
  // Simulate
  return { id: 'new_group_id' }; // TODO: POST /groups
};

export const getGroup = async (id: string) => {
  // Simulate
  return { name: 'Group ' + id }; // TODO: GET /groups/:id
};

export const contributeToGroup = async (id: string) => {
  // Simulate Stripe client secret
  return 'client_secret_placeholder'; // TODO: POST /groups/:id/contribute - Returns Stripe client secret
};

export const getPayouts = async (id: string) => {
  // Simulate
  return []; // TODO: GET /groups/:id/payouts
};

// TODO: Add more endpoints as needed, handle errors, auth tokens