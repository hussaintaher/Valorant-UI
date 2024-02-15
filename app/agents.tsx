import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
// import { Text, View } from '@/components/Themed';
import Colors from "@/constants/Colors";
import { Link, Stack } from "expo-router";
import AppBar from "@/components/Header";
import { useFonts } from "expo-font";


export default function AgentsScreen() {
  const [fontsLoaded] = useFonts({
    BowlbyOneSC: require("../assets/fonts/BowlbyOneSC-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={{backgroundColor: Colors.BG, }}>
    <View
          style={{
            backgroundColor: Colors.BG,
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 50
          }}
    >
      <View style={styles.characterContainer}>
        <View
          style={styles.characterHeader}
        >
          <Text style={{ fontFamily: "BowlbyOneSC", color: "#FFF" }}>Brimstone</Text>
        </View>
        <View
          style={styles.charachterStyle}
        >
          <Image
            source={require("../assets/images/Brimstone_artwork.png")}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View style={styles.characterContainer}>
        <View
          style={styles.characterHeader}
        >
          <Text style={{ fontFamily: "BowlbyOneSC", color: "#FFF" }}>Breach</Text>
        </View>
        <View
          style={styles.charachterStyle}
        >
          <Image
            source={require("../assets/images/Breach_artwork.png")}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View style={styles.characterContainer}>
        <View
          style={styles.characterHeader}
        >
          <Text style={{ fontFamily: "BowlbyOneSC", color: "#FFF" }}>JETT</Text>
        </View>
        <View
          style={styles.charachterStyle}
        >
          <Image
            source={require("../assets/images/Jett_artwork.png")}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View style={styles.characterContainer}>
        <View
          style={styles.characterHeader}
        >
          <Text style={{ fontFamily: "BowlbyOneSC", color: "#FFF" }}>Omen</Text>
        </View>
        <View
          style={styles.charachterStyle}
        >
          <Image
            source={require("../assets/images/Omen_artwork.png")}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View style={styles.characterContainer}>
        <View
          style={styles.characterHeader}
        >
          <Text style={{ fontFamily: "BowlbyOneSC", color: "#FFF" }}>Phonenix</Text>
        </View>
        <View
          style={styles.charachterStyle}
        >
          <Image
            source={require("../assets/images/Phoenix_artwork.png")}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </View>
      </View>
      <View style={styles.characterContainer}>
        <View
          style={styles.characterHeader}
        >
          <Text style={{ fontFamily: "BowlbyOneSC", color: "#FFF" }}>Raze</Text>
        </View>
        <View
          style={styles.charachterStyle}
        >
          <Image
            source={require("../assets/images/Raze_artwork.png")}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </View>
      </View>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  characterContainer: {
    backgroundColor: "orange",
    minWidth: 153.5,
    height: 260,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "red",
  },
  charachterStyle: {
    padding: 10,
    backgroundColor: Colors.BG,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  characterHeader: {
    height: 50,
    backgroundColor: Colors.BG,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});
