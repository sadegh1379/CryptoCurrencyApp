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
import { VictoryChart , VictoryAxis , VictoryScatter , VictoryLine} from 'victory-native'
import {VictoryCustomTheme} from '../styles'

const CryptoDetail = ({route ,  navigation }) => {
    const [selectedCurrency , setSelectedCurrency] = useState(null)
    const ScrollX = 
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
                    <Text style={{...FONTS.h3 , color:COLORS.black}}>{selectedCurrency?.amount}</Text>
                    <Text style={{
                        ...FONTS.body4,
                        color : selectedCurrency?.type == "I" ? COLORS.green : COLORS.red
                    }}>{selectedCurrency?.changes}</Text>
                </View>
            </View>
            {/* chart */}
            <View
                style={{
                    marginTop : -30
                }}
            >
                <VictoryChart
                    theme={VictoryCustomTheme}
                    height={220}
                    width={SIZES.width - 40 }
                >
                    <VictoryLine
                        style={{
                            data:{
                                stroke: COLORS.secondary
                            },
                            parent:{
                                border : "1px solid #ccc"
                            }  
                        }}
                        data={selectedCurrency?.chartData}
                        categories={{
                            x :["15 MIN" , "30 MIN" , "45 MIN" , "60 MIN"],
                            y : ["15" , "30" , "45"]
                        }}
                    />
                    <VictoryScatter
                        data={selectedCurrency?.chartData}
                        size={5}
                        style={{
                            data:{
                                fill : COLORS.secondary
                            }
                        }}
                    />
                    <VictoryAxis
                        style={{
                            grid : {
                                stroke : "transparent"
                            }
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            axis:{
                                stroke:"transparent"
                            },
                            grid:{
                                stroke : "grey"
                            }
                        }}
                    />
                </VictoryChart>
            </View>
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