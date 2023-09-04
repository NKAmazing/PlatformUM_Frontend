import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { categoriesData } from '../Constants';


export default function Categories() {
  return (
    <View>
      <View>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        >
        {categoriesData && categoriesData.length > 0 ? (
            categoriesData.map((cat, index) => {
            return (
                <TouchableOpacity key={index}>
                    <Image source={cat.image} style={{ width: wp(18), height: wp(16), borderRadius: 15, margin: wp(3) }} />
                    <Text style={{ fontSize: wp(3.5), textAlign:'center'}}>{cat.title}</Text>
                </TouchableOpacity>
            );
            })
        ) : (
            <Text>No categories data available.</Text>
        )}
      </ScrollView>

    </View>
  )
}