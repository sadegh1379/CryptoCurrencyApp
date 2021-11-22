import React , {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
import {PriceAlert} from '../component'
import {COLORS , FONTS , dummyData , SIZES , icons , images} from '../constants';

const Home = ({ navigation }) => {
    const [trending , setTrending] = useState(dummyData.trendingCurrencies)

    const renderItem = ({item , index})=>(
        <TouchableOpacity
            style={{
                width : 180,
                paddingHorizontal : SIZES.padding,
                paddingVertical : SIZES.padding,
                marginBottom : 5,
                marginLeft : index == 0 ? SIZES.padding : 0,
                marginRight : SIZES.radius,
                borderRadius : 10,
                backgroundColor :COLORS.white,
                ...styles.shadow
            }}
        >
            {/* currency */}
            <View style={{flexDirection:'row'}}>
                <View>
                    <Image
                        style={{
                            width : 25,
                            height : 25,
                            marginTop : 5
                        }}
                    resizeMode="contain" source={item.image}/>
                </View>
                <View style={{marginLeft : SIZES.base}}>
                    <Text style={{...FONTS.h2}}>{item.currency}</Text>
                    <Text style={{color : COLORS.gray , ...FONTS.body3}}>{item.code}</Text>
                </View>

            </View>
            {/* value */}
            <View style={{marginTop : SIZES.base}}>
                <Text style={{...FONTS.h2}}>${item.amount}</Text>
                <Text style={{...FONTS.body5 , color: item.type === 'I' ? 
                    COLORS.green: COLORS.red
                }}>{item.changes}</Text>
            </View>
        </TouchableOpacity>
    )
    const renderHeader =()=>{
        return(
            <View style={{
                width : "100%",
                height : 290,
                ...styles.shadow
            }}>
                <ImageBackground
                    source={images.banner}
                    resizeMode="cover"
                    style={{
                        flex : 1,
                        alignItems:'center'
                    }}
                >
                    {/* header bar*/}
                <View
                    style={{
                        width :'100%',
                        alignItems:'flex-end',
                        marginHorizontal : 10,
                        marginTop :10,
                    }}
                >
                    <TouchableOpacity
                        onPress={()=>alert('notifycation')}
                        style={{
                            width : 35,
                            height : 35,
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                        <Image style={{flex : 1}} resizeMode="contain" source={icons.notification_white}/>
                    </TouchableOpacity>
                </View>
                    {/* balance */}
                <View 
                    style={styles.balance}
                >
                    <Text style={{color :COLORS.white ,...FONTS.h3}}>Your Portfolio Balance</Text>
                    <Text style={{color : COLORS.white , marginVertical : 10 , ...FONTS.h1}}>$ {dummyData.portfolio.balance}</Text>
                    <Text style={{color:COLORS.white , ...FONTS.body5}}>{dummyData.portfolio.changes} Last 24 hours</Text>

                </View>
                    {/* trading */}
                <View style={styles.flatListView}>
                    <Text style={{color :COLORS.white , ...FONTS.h2 , marginLeft : 24}}>Trading</Text>
                    <FlatList
                        contentContainerStyle={{marginTop : SIZES.base}}
                        data={trending}
                        renderItem={renderItem}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                </ImageBackground>
            </View>
        )
    }
    const renderPriceAlert = ()=>{
        return(
            <PriceAlert/>
        )
    }
    return (
        <ScrollView>
            <View style={{flex : 1 , paddingBottom : 130}}>
                {renderHeader()}
                {renderPriceAlert()}
            </View>
        </ScrollView>
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
    },
    balance:{
        width :"100%",
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    flatListView:{
        position : 'absolute',
        bottom : '-30%'
    }
})

export default Home;