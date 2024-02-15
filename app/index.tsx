import React from "react";
import { Image } from 'expo-image';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Button,  } from "react-native";
import Colors from "@/constants/Colors";
import { Link, Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

export default function HomeScreen() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'BowlbyOneSC': require('../assets/fonts/BowlbyOneSC-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href={'/agents'}>Agents</Link>
      <Link href={'/details'}>Details</Link>
      <Link href={'/agentDetails'}>AgentDetails</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
});
