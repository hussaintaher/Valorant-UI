import React from "react";
import { Image } from 'expo-image';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Button, Text, ScrollView, FlatList } from "react-native";
import Colors from "@/constants/Colors";
import { Link, Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import { List } from 'react-native-paper';


export default function AgentDetails() {
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
            <View style={{ marginTop: 80, width: '100%', height: 350, marginBottom: 30}}>
                <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/images/Brimstone1.png')} />
            </View>

        
            <View style={{paddingBottom: 20, flex: 1, width: '100%'}}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 200 }}>
                        <View style={{}}>
                            <View style={{justifyContent: 'space-between', flexDirection:'row'}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>ORIGIN:</Text>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>UNITED STATES</Text>
                            </View>
                            <View style={{width: '100%', height: '5%', backgroundColor:'#FFF', marginTop: 10}} />
                        </View>

                        <View style={{ marginTop: 10}}>
                            <View style={{justifyContent: 'space-between', flexDirection:'row'}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>TYPE:</Text>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>CONTROLLER</Text>
                            </View>
                            <View style={{width: '100%', height: '5%', backgroundColor:'#FFF', marginTop: 10}} />
                        </View>

                        <View style={{marginTop: 10}}>
                            <View style={{justifyContent: 'space-between', flexDirection:'row'}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>POINTS FOR ULTIMATE:</Text>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>6</Text>
                            </View>
                            <View style={{width: '100%', height: '5%', backgroundColor:'#FFF', marginTop: 10}} />
                        </View>


                        <View style={{display: 'flex', flexDirection:'column', marginTop: 10}}>
                            <View style={{display: 'flex', justifyContent: 'space-between',}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF'}}>
                                    <Text style={{color: '#FF4655'}}>DESCIPTION: </Text>
                                    Brimstone’s orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.                                </Text>
                            </View>
                            <View style={{width: '100%', height: '2%', backgroundColor:'#FFF', marginTop: 10}} />
                        </View>

                        <View style={{marginTop: 10,}}>
                            <View style={{marginBottom: 10, display: 'flex',}}>
                                <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>ABILITIES</Text>
                            </View>

                            {/* Card */}
                            <View style={{flexDirection: 'row',marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{width: '100%', borderWidth: 1, borderColor: 'red', height: 174, padding: 10}}>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>INCEDIARY</Text>
                                    <View style={{flexDirection: 'row', flex: 1,}}>
                                        <View style={{ width: 35}}>
                                            <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/images/Incendiary1.png')} />
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10}}>
                                            <Text style={{fontFamily: 'BowlbyOneSC',fontSize: 10, color: '#FF4655', fontSize: 10, marginBottom: 8}}>
                                                TYPE:
                                                <Text style={{color: '#FFF', }}> DAMAGE</Text>
                                            </Text>
                                            <Text style={{fontFamily: 'BowlbyOneSC',fontSize: 10, color: '#FF4655', fontSize: 10}}>
                                                BASIC:
                                                <Text style={{color: '#FFF',}}> 300</Text>
                                            </Text>
                                        </View>
                                        
                                    </View>
                                    <View style={{}}>
                                        <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF', fontSize: 10}}>
                                            <Text style={{color: '#FF4655'}}>DESCIPTION: </Text>
                                            Brimstone’s orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.                                
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* Card */}
                            <View style={{flexDirection: 'row',marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{width: '100%', borderWidth: 1, borderColor: 'red', height: 174, padding: 10}}>
                                    <Text style={{fontFamily: 'BowlbyOneSC', color: '#FF4655'}}>INCEDIARY</Text>
                                    <View style={{flexDirection: 'row', flex: 1,}}>
                                        <View style={{ width: 35}}>
                                            <Image style={{width: '100%', height: '100%', resizeMode: 'contain'}} source={require('../assets/images/Incendiary1.png')} />
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10}}>
                                            <Text style={{fontFamily: 'BowlbyOneSC',fontSize: 10, color: '#FF4655',  marginBottom: 8}}>
                                                TYPE:
                                                <Text style={{color: '#FFF', }}> BASIC</Text>
                                            </Text>
                                            <Text style={{fontFamily: 'BowlbyOneSC',fontSize: 10, color: '#FF4655',}}>
                                                BASIC:
                                                <Text style={{color: '#FFF',}}> 300</Text>
                                            </Text>
                                        </View>
                                        
                                    </View>
                                    <View style={{}}>
                                        <Text style={{fontFamily: 'BowlbyOneSC', color: '#FFF', fontSize: 10}}>
                                            <Text style={{color: '#FF4655'}}>DESCIPTION: </Text>
                                            Brimstone’s orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and safely make him the unmatched boots-on-the-ground commander.                                
                                        </Text>
                                    </View>
                                </View>
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
