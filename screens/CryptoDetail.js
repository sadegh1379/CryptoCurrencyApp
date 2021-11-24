import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Image,
  ScrollView,
} from 'react-native';
import {HeaderBar, CurrencyLabel, TextButton} from '../component';
import {icons, SIZES, COLORS, FONTS, dummyData} from '../constants';
import {
  VictoryChart,
  VictoryAxis,
  VictoryScatter,
  VictoryLine,
} from 'victory-native';
import {VictoryCustomTheme} from '../styles';

const CryptoDetail = ({route, navigation}) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [chartOptions , setChartOptions] = useState(dummyData.chartOptions)
  const [selectedOptions , setSelectedOptions] = useState(dummyData.chartOptions[0])

  const ScrollX = new Animated.Value(0);
  const numberOfCharts = [1, 2, 3];
  useEffect(() => {
    setSelectedCurrency(route.params.currency);
  }, []);

  const handleSelectOption = (option)=>{
    setSelectedOptions(option)
  }

  const renderDots = ()=>{
    const dotPosition = Animated.divide(ScrollX , SIZES.width)

    return(
      <View
        style={{
          height : 30,
          marginTop : 15
        }}
      >
        <View style={{flexDirection :'row', justifyContent:'center' , alignItems:'center'}}>
            {
              numberOfCharts.map((item,index)=>{
                const opacity = dotPosition.interpolate({
                  inputRange : [index -1 , index , index+1],
                  outputRange : [0.3, 1 ,0.3],
                  extrapolate:'clamp'
                })
                const dotSize = dotPosition.interpolate({
                  inputRange : [index-1 , index , index + 1],
                  outputRange:[SIZES.base * 0.8 , 10 , SIZES.base * 0.8],
                  extrapolate:'clamp'
                })
                const dotColor= dotPosition.interpolate({
                  inputRange : [index -1 , index , index + 1],
                  outputRange : [COLORS.gray , COLORS.primary , COLORS.gray],
                  extrapolate  : 'clamp'
                })

                return(
                  <Animated.View
                    key={`dot-${index}`}
                    opacity={opacity}
                    style={{
                      borderRadius : SIZES.radius,
                      width : dotSize,
                      height : dotSize,
                      backgroundColor:dotColor,
                      marginHorizontal : 3
                    }}
                  />
                )
              })
              
            }
        </View>
      </View>
    )
  }

  const renderChart = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.radius,
          alignItems: 'center',
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          ...styles.shadow,
        }}>
        {/* header */}
        <View style={{flexDirection: 'row', padding: SIZES.padding}}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <CurrencyLabel
              currency={selectedCurrency?.currency}
              icon={selectedCurrency?.image}
              code={selectedCurrency?.code}
            />
          </View>
          <View>
            <Text style={{...FONTS.h3, color: COLORS.black}}>
              {selectedCurrency?.amount}
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color:
                  selectedCurrency?.type == 'I' ? COLORS.green : COLORS.red,
              }}>
              {selectedCurrency?.changes}
            </Text>
          </View>
        </View>
        {/* chart */}
        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={16}
          snapToAlignment="start"
          snapToInterval={SIZES.width - 40}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: ScrollX}}}],
            {useNativeDriver: false},
          )}>
          {numberOfCharts.map((item, index) => (
            <View
              key={`chart-${index}`}
              style={{marginLeft: index === 0 ? SIZES.base : 0}}>
              <View
                style={{
                  marginTop: -30,
                }}>
                <VictoryChart
                  theme={VictoryCustomTheme}
                  height={220}
                  width={SIZES.width - 40}>
                  <VictoryLine
                    style={{
                      data: {
                        stroke: COLORS.secondary,
                      },
                      parent: {
                        border: '1px solid #ccc',
                      },
                    }}
                    data={selectedCurrency?.chartData}
                    categories={{
                      x: ['15 MIN', '30 MIN', '45 MIN', '60 MIN'],
                      y: ['15', '30', '45'],
                    }}
                  />
                  <VictoryScatter
                    data={selectedCurrency?.chartData}
                    size={5}
                    style={{
                      data: {
                        fill: COLORS.secondary,
                      },
                    }}
                  />
                  <VictoryAxis
                    style={{
                      grid: {
                        stroke: 'transparent',
                      },
                    }}
                  />
                  <VictoryAxis
                    dependentAxis
                    style={{
                      axis: {
                        stroke: 'transparent',
                      },
                      grid: {
                        stroke: 'grey',
                      },
                    }}
                  />
                </VictoryChart>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
        {/* options */}
        <View style={{width:'100%' , 
         flexDirection:'row' , justifyContent:'space-between',
         alignItems:'center' , 
         paddingHorizontal : SIZES.padding
        }}> 
        {
          chartOptions.map((op)=>(
            <TextButton
              key={`chart-option-${op.id}`}
              label={op.label}
              customBtnStyle={{
                  height : 30 ,          
                  width : 60,
                  borderRadius : 15,
                  backgroundColor : selectedOptions.id === op.id ? COLORS.primary : COLORS.lightGray
              }}
              customLabelStyle={{
                color : selectedOptions.id === op.id ? COLORS.white : COLORS.gray,
                ...FONTS.body5
              }}
              onPress={()=>handleSelectOption(op)}
            />
          ))
        }
        </View>
        {/* dots */}
        {renderDots()}
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray1,
      }}>
      <HeaderBar right={true} />
      <ScrollView>
        <View style={{flex: 1, marginBottom: SIZES.padding}}>
          {renderChart()}
        </View>
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

export default CryptoDetail;
