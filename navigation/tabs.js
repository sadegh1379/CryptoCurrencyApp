import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import { Home  , CryptoDetail , Portfolio, Transaction_T, Prices, Settings} from "../screens"
import { COLORS, FONTS, icons } from "../constants"
import LinearGradient from 'react-native-linear-gradient'; 

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({children , onPress})=>{
    return(
        <TouchableOpacity
            style={{
                top : -30,
                justifyContent:'center',
                alignItems:'center',
                ...styles.shadow
            }}
            onPress={onPress}
        >
            <LinearGradient
                colors={[COLORS.primary , COLORS.secondary]}
                style={{
                    width : 70,
                    height : 70,
                    borderRadius : 35
                }}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}
const Tabs = () => {
    return (
        <Tab.Navigator
          screenOptions={{
              headerShown :false,
                tabBarShowLabel :false,
                tabBarStyle:{
                    position:'absolute',
                    bottom :0,
                    left : 0,
                    right : 0,
                    elevation :0,
                    backgroundColor : COLORS.white,
                    borderTopColor : "transparent",
                    height : 60
                }
          }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{justifyContent:'center' , alignItems:'center'}}>
                            <Image source={icons.home}
                                style={{
                                    width :20,
                                    height : 20,
                                    tintColor : focused?COLORS.primary :
                                    COLORS.black
                                }}
                                resizeMode="contain"
                            />
                            <Text style={{color : focused ? COLORS.primary : COLORS.black}}>Home</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Portfolio"
                component={Portfolio}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{justifyContent:'center' , alignItems:'center'}}>
                            <Image source={icons.pie_chart}
                                style={{
                                    width :20,
                                    height : 20,
                                    tintColor : focused?COLORS.primary :
                                    COLORS.black
                                }}
                                resizeMode="contain"
                            />
                            <Text style={{color : focused ? COLORS.primary : COLORS.black}}>PORTFOLIO</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={Transaction_T}
                options={{
                    tabBarIcon : ({focused})=>(
                      <Image
                        resizeMode="contain"
                        source={icons.transaction}
                        style={{
                            width : 30,
                            height : 30,
                            tintColor : COLORS.white,

                        }}
                      />
                    ),
                    tabBarButton:(props)=>(
                        <TabBarCustomButton {...props}/>
                    )
                }}
            />
            <Tab.Screen
                name="Prices"
                component={Prices}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{justifyContent:'center' , alignItems:'center'}}>
                            <Image source={icons.line_graph}
                                style={{
                                    width :20,
                                    height : 20,
                                    tintColor : focused?COLORS.primary :
                                    COLORS.black
                                }}
                                resizeMode="contain"
                            />
                            <Text style={{color : focused ? COLORS.primary : COLORS.black}}>PRICES</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{justifyContent:'center' , alignItems:'center'}}>
                            <Image source={icons.settings}
                                style={{
                                    width :20,
                                    height : 20,
                                    tintColor : focused?COLORS.primary :
                                    COLORS.black
                                }}
                                resizeMode="contain"
                            />
                            <Text style={{color : focused ? COLORS.primary : COLORS.black}}>SETTING</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;