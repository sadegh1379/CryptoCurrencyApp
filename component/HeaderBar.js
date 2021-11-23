import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import {icons, SIZES, COLORS, FONTS} from '../constants';
import {useNavigation} from '@react-navigation/native';

const HeaderBar = ({right}) => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', padding: SIZES.base + 3}}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          <Image
            source={icons.back_arrow}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.gray,
            }}
          />
          <Text
            style={{color: COLORS.black, ...FONTS.h3, marginLeft: SIZES.base}}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
      {right && (
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Image
              source={icons.star}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export {HeaderBar};

const styles = StyleSheet.create({});
