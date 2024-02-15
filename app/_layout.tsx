import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image  } from 'react-native';
import { Stack } from "expo-router";
import Header from '@/components/Header';
import Colors from '@/constants/Colors';
import { PaperProvider } from 'react-native-paper';



export default function Layout() {
    return (
      <PaperProvider>
      <Stack screenOptions={{
          headerStyle: { backgroundColor: Colors.BG,},
          headerTitleAlign: 'center',
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontFamily: 'BowlbyOneSC'
          },
        }}>
        
        <Stack.Screen
            name='index'
            options={{
            title: "Home",
            headerStyle: { backgroundColor: Colors.BG,},
            headerTitleAlign: 'center',
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
                fontFamily: 'BowlbyOneSC'
            },
            }}
        />
        <Stack.Screen
            name='details'
            options={{
            title: "Weapon Details",
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
                fontFamily: 'BowlbyOneSC'
            },
            }}
        />
        <Stack.Screen
            name='agentDetails'
            options={{
            title: "Agent Details",
            headerStyle: { backgroundColor: 'transparent' },
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
                fontFamily: 'BowlbyOneSC'
            },
            }}
        />

        </Stack>
      </PaperProvider>
        

        
    );
}