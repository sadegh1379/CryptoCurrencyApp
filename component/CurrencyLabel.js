import React from 'react'
import { View, Text , Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const CurrencyLabel = ({currency , icon , code}) => {
    return (
        <View style={{flexDirection:'row'}}>
            <View>
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                        width :25,
                        height : 25,
                    }}
                />
            </View>
            <View>
                <Text style={{...FONTS.h3 , color:COLORS.black , marginLeft : SIZES.base}}>{currency}</Text>
                <Text style={{...FONTS.body4 , color:COLORS.grey , marginLeft : SIZES.base}}>{code}</Text>
            </View>
        </View>
    )
}

export  {CurrencyLabel}
