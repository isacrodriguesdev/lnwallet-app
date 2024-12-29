import { SafeAreaView, Text } from "react-native";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "@react-navigation/native";
import { DefaultTheme, Theme } from "@react-navigation/native";
import { SessionProvider } from "@/contexts/SessionContext";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Lato_400Regular, Lato_700Bold, Lato_900Black } from "@expo-google-fonts/lato";
import { Nunito_400Regular, Nunito_700Bold, Nunito_500Medium, Nunito_800ExtraBold } from "@expo-google-fonts/nunito";

const theme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
    border: "black",
    card: "white",
    primary: "black",
    text: "black",
  },
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SessionProvider>
      <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
        <ThemeProvider value={theme}>
          <Stack
            screenOptions={{ headerShown: false }}
            initialRouteName="(app)"
          >
            <Stack.Screen name="(app)" />
            <Stack.Screen
              name="sign-in"
              options={{
                presentation: "modal",
              }}
            />
          </Stack>
          <StatusBar backgroundColor="white" style="dark" />
        </ThemeProvider>
      </SafeAreaView>
    </SessionProvider>
  );
}
