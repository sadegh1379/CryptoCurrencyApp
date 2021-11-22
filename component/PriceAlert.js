import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity , Image } from 'react-native';
import {icons , SIZES , COLORS , FONTS} from '../constants'

const PriceAlert = () => {
    return (
        <TouchableOpacity
            style={[styles.touch , styles.shoddow]} 
            onPress={()=>console.log('price action')}       
        >
            <Image 
                source={icons.notification_color}
                style={{
                    width : 40,
                    height : 40,

                }}
            />
            <View>
                <Text style={{...FONTS.h3}}>Set Price Alert</Text>
                <Text style={{...FONTS.body5}}>get notifed when your coins are moing</Text>
            </View>
            <Image
                source={icons.right_arrow}
                style={{
                    width : 30,
                    height : 30,
                    tintColor : COLORS.gray
                }}            
            />
        </TouchableOpacity>
    )
}

export  {PriceAlert}

const styles = StyleSheet.create({
    touch:{
        flexDirection:'row',
        alignItems:'center',
        marginTop : SIZES.padding * 4 ,
        justifyContent:'space-between',
        paddingHorizontal : SIZES.padding,
        paddingVertical : SIZES.padding,
        backgroundColor : COLORS.white,
        marginHorizontal : 15,
        borderRadius : 7,



    },
    shoddow:{
        shadowColor : '#000',
        shadowOffset :{
            width : 0,
            height : 4
        },
        shadowRadius : 4.65,
        shadowOpacity : 0.35,
        elevation : 7
    }
})
