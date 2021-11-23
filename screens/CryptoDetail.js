import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView , 
    Animated , 
    Image
} from 'react-native';
import { HeaderBar } from '../component';
import {icons , SIZES , COLORS , FONTS} from '../constants';


const CryptoDetail = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                flex :1,
                backgroundColor : COLORS.lightGray1
            }}
        >
        <HeaderBar right={true}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default CryptoDetail;