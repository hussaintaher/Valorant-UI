import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
  return (
    <View style={{height: hp(10), backgroundColor: Colors.BG}}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  }
});
