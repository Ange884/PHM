import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Root stack should render the (tabs) group, not a non-existent index route */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
