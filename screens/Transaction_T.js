import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, ScrollView, SafeAreaView} from 'react-native';
import {
  CurrencyLabel,
  HeaderBar,
  TextButton,
  TransactionHistory,
} from '../component';
import {SIZES, COLORS, icons, FONTS , dummyData} from '../constants';

const Transaction_T = ({route, navigation}) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const  randomInteger = (min, max)=> {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setSelectedCurrency(dummyData.trendingCurrencies[randomInteger(0,4)]);
  }, []);

  const renderTrade = () => {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.radius,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          padding: SIZES.padding,
          ...styles.shadow,
        }}>
        {/* currency label */}
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <CurrencyLabel
            icon={selectedCurrency?.image}
            code={selectedCurrency?.code}
            currency={selectedCurrency?.currency}
          />
        </View>
        {/* amount */}
        <View style={{alignItems: 'center', marginVertical: SIZES.base}}>
          <Text style={{color: COLORS.black, ...FONTS.h2}}>
            {selectedCurrency?.wallet.crypto} {selectedCurrency?.code}
          </Text>
          <Text style={{...FONTS.body4, color: COLORS.gray}}>
            ${selectedCurrency?.wallet.value}
          </Text>
        </View>
        {/* trade */}
        <TextButton
          label="Trade"
          customBtnStyle={{
            marginTop: SIZES.padding,
          }}
          onPress={()=>navigation.navigate('Transaction')}
        />
      </View>
    );
  };
  const renderTransaction = () => {
    return (
      <TransactionHistory
      customStylesComponent={{
          marginBottom : 60
      }}
       history={selectedCurrency?.transactionHistory} />
    );
  };
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <HeaderBar /> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {renderTrade()}
        {renderTransaction()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Transaction_T
