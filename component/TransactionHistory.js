import React from 'react'
import { StyleSheet, Text, View , Image, FlatList , TouchableOpacity } from 'react-native'
import {icons , SIZES , COLORS , FONTS} from '../constants'


const TransactionHistory = ({customStylesComponent , history}) => {

    const renderItem = ({item})=>(
        <TouchableOpacity 
            style={{
                flexDirection:'row',
                alignItems:'center',
                paddingVertical : SIZES.base
            }}
            onPress={()=>console.log(item)}
        >
            <Image
                source={icons.transaction}
                style={{
                    width : 30,
                    height : 30,
                    tintColor :  COLORS.primary
                }}
            />
            <View style={{flex : 1 , marginLeft : SIZES.base}}>
                <Text style={{...FONTS.h3 , color:COLORS.black}}>{item.description}</Text>
                <Text style={{...FONTS.body4}}>{item.date}</Text>
            </View>
            <View style={{
                height : "100%",
                flexDirection : 'row',
                alignItems:'center'
            }}>
                <Text
                    style={{
                        ...FONTS.body5,
                        color : item.type == "B" ? 
                        COLORS.green : COLORS.black
                    }}
                >{item.amount} {item.currency}</Text>
                <Image 
                    source={icons.right_arrow}
                    style={{
                        width : 20,
                        height : 20,
                        tintColor : COLORS.grey
                    }}
                />
            </View>
        </TouchableOpacity>
    )
    return (
        <View
            style={{
                ...customStylesComponent,
                backgroundColor : COLORS.white,
                marginTop : SIZES.padding,
                padding : 20,
                marginVertical : SIZES.padding,
                marginHorizontal : 13,
                borderRadius : SIZES.radius
            }}
        >
            <Text style={{...FONTS.h3 ,color:COLORS.black}}>Transaction History</Text>
            <FlatList
                contentContainerStyle={{
                    marginVertical : SIZES.padding,
                    // marginHorizontal : SIZES.padding
                }}
                data={history}
                scrollEnabled={false}
                renderItem={renderItem}
                keyExtractor={item =>`${item.id}`}
                ItemSeparatorComponent={()=>{
                    return(
                        <View style={{width : "100%" , height : 1 , backgroundColor : COLORS.lightGray}}></View>
                    )
                }}
            />
        </View>
    )
}

export  {TransactionHistory}

const styles = StyleSheet.create({})
