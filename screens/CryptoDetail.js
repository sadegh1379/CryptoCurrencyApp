import React , {useState , useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView , 
    Animated , 
    Image,
    ScrollView
} from 'react-native';
import { HeaderBar , CurrencyLabel } from '../component';
import {icons , SIZES , COLORS , FONTS} from '../constants';


const CryptoDetail = ({route ,  navigation }) => {
    const [selectedCurrency , setSelectedCurrency] = useState(null)

    useEffect(()=>{
        setSelectedCurrency(route.params.currency)
    },[])


    const renderChart = ()=>{
        return(
            <View style={{
                marginTop : SIZES.padding,
                marginHorizontal : SIZES.radius,
                alignItems:'center',
                backgroundColor : COLORS.white,
                borderRadius : SIZES.radius,
                ...styles.shadow,
            
            }}>
            {/* header */}
            <View style={{flexDirection:'row' , padding:SIZES.padding}}>
                <View style={{flex : 1 , alignItems:'flex-start'}}>
                    <CurrencyLabel
                        currency={selectedCurrency?.currency}
                        icon={selectedCurrency ?.image}
                        code={selectedCurrency?.code}
                    />
                </View>
                <View>
                    <Text style={{...FONTS.h3}}>{selectedCurrency?.amount}</Text>
                    <Text style={{
                        ...FONTS.body4,
                        color : selectedCurrency?.type == "I" ? COLORS.green : COLORS.red
                    }}>{selectedCurrency?.changes}</Text>
                </View>
            </View>
            {/* chart */}
            {/* options */}
            {/* dots */}
            </View>
        )
    }
    return (
        <SafeAreaView
            style={{
                flex :1,
                backgroundColor : COLORS.lightGray1
            }}
        >
        <HeaderBar right={true}/>
        <ScrollView>
            <View style={{flex:1 , marginBottom : SIZES.padding}}>
                {renderChart()}
            </View>
        </ScrollView>
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