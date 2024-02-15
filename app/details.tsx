import React from "react";
import { Image } from 'expo-image';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Button, Text, ScrollView, FlatList } from "react-native";
import Colors from "@/constants/Colors";
import { Link, Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import { List } from 'react-native-paper';


export default function DetailsScreen() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    'BowlbyOneSC': require('../assets/fonts/BowlbyOneSC-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.BG, }}>
        <View style={{height: 389, position: 'absolute', top: 0, left: 0, width: '100%'}}>
            <Image style={{width: '100%', height: '100%'}} source={require('../assets/images/Vector4.png')} />
        </View>

        <View style={{ paddingHorizontal: 35, flex: 1, alignItems: 'center', }}>
            <View style={{ marginTop: 200, width: 310, height: 150,}}>
                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/images/Judge 1.png')} />
            </View>

      
            <View style={{paddingBottom: 20, flex: 1, width: '100%'}}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 200 }}>
                        <View style={{}}>
                            <View style={{justifyContent: 'space-between', flexDirection:'row'}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>TYPE:</Text>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>SHOTGUN</Text>
                            </View>
                            <View style={{width: '100%', height: '5%', backgroundColor:'#FFF', marginTop: 10}} />
                        </View>

                        <View style={{ marginTop: 10}}>
                            <View style={{justifyContent: 'space-between', flexDirection:'row'}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>CREDS:</Text>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>1500</Text>
                            </View>
                            <View style={{width: '100%', height: '5%', backgroundColor:'#FFF', marginTop: 10}} />
                        </View>

                        <View style={{marginTop: 10}}>
                            <View style={{justifyContent: 'space-between', flexDirection:'row'}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>MAGAZINE:</Text>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>7</Text>
                            </View>
                            <View style={{width: '100%', height: '5%', backgroundColor:'#FFF', marginTop: 10}} />
                        </View>

                        <View style={{marginTop: 10}}>
                            <View style={{justifyContent: 'space-between', flexDirection:'row'}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>WALL PENETRATION:</Text>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>MEDIUM</Text>
                            </View>
                            <View style={{width: '100%', height: '5%', backgroundColor:'#FFF', marginTop: 10}} />
                        </View>

                        <View style={{marginTop: 10}}>
                            <View style={{justifyContent: 'space-between', flexDirection:'row'}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>FIRE RATE:</Text>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>3.5 ROUNDS/SEC</Text>
                            </View>
                            <View style={{width: '100%', height: '5%', backgroundColor:'#FFF', marginTop: 10}} />
                        </View>

                        <View style={{display: 'flex', flexDirection:'column', marginTop: 1}}>
                            <View style={{display: 'flex', justifyContent: 'space-between',}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>
                                    <Text style={{color: '#FF4655'}}>DESCIPTION: </Text>
                                    The Judge is the most expensive shotgun in Valorant, sitting at 1500 credits. It is a fully automatic shotgun with a medium wall penetration
                                </Text>
                            </View>
                            <View style={{width: '100%', height: '2%', backgroundColor:'#FFF', marginTop: 10}} />
                        </View>

                        <View style={{marginTop: 10,}}>
                            <View style={{marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>DAMAGE</Text>
                            </View>
                            <View style={{flexDirection: 'row',marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{display: 'flex', flex: 1, alignItems: 'center', marginTop: 5}}>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>RANGE</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                </View>
                                <View style={{display: 'flex', flex: 1, alignItems: 'center', marginTop: 5}}>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>BODY</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                </View>
                                <View style={{display: 'flex', flex: 1, alignItems: 'center', marginTop: 5}}>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>HEAD</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                </View>
                                <View style={{display: 'flex', flex: 1, alignItems: 'center', marginTop: 5}}>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>LEG</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>0 - 10</Text>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{marginVertical: 10}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>SKINS:</Text>
                            </View>
                            <View>
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                                    <View style={{borderWidth: 1, borderColor: 'red', padding: 10, width: 125, height: 100}}>
                                        <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/images/Gun1.png')} />
                                    </View>
                                    <View style={{borderWidth: 1, borderColor: 'red', marginLeft: 20, padding: 10, width: 125, height: 100}}>
                                        <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/images/Gun2.png')} />
                                    </View>
                                    <View style={{borderWidth: 1, borderColor: 'red', marginLeft: 20, padding: 10, width: 125, height: 100}}>
                                        <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/images/Gun3.png')} />
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
            </View>
        </View>
        

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
});
