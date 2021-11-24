import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const TextButton = ({label , customBtnStyle , customLabelStyle , onPress}) => {
    return (
        <TouchableOpacity
            style={{
                height : 45,
                backgroundColor:COLORS.green,
                alignItems:'center',
                justifyContent:'center',
                borderRadius : SIZES.radius,
                ...customBtnStyle
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    color:COLORS.white,
                    ...FONTS.h3,
                    ...customLabelStyle
                }}
            >{label}</Text>
        </TouchableOpacity>
    )
}

export  {TextButton}

