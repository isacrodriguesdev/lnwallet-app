import { Redirect, Stack, Tabs } from "expo-router";
import { useSession } from "@/contexts/SessionContext";
import { Text } from "react-native";
//
export default function AppLayout() {
  const { isAuthenticated, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }

  return (
    // <Tabs screenOptions={{ headerShown: false }}>
    //   <Tabs.Screen
    //     name="index"
    //     options={{
    //       tabBarLabel: "Home",
    //       tabBarStyle: { borderTopWidth: 0 },
    //       tabBarIcon: ({ color, size }) => (
    //         <Feather name="home" color={color} size={size} />
    //       ),
    //     }}
    //   />
    // </Tabs>

    <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
      <Stack.Screen name="index" />
      <Stack.Screen name="(deposit)" />
      <Stack.Screen name="(transfer)" />
    </Stack>
  );
}
