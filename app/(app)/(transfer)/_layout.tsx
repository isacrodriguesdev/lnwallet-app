import { Stack } from "expo-router";

export default function SendLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
      <Stack.Screen name="index" />
      <Stack.Screen name="amount-screen" />
      <Stack.Screen name="confirm-screen" />
    </Stack>
  );
}