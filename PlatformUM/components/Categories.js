import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import { categoriesData } from '../Constants';


export default function Categories() {
  const navigation = useNavigation();

  const handleCategoryPress = (categoryTitle) => {
    const categoryToScreenMapping = {
      "Today's Trip!": 'TodaysTripScreen',
      'Location': 'LocationsScreen',
      'Companies': 'CompaniesScreen',
    };

    const screenName = categoryToScreenMapping[categoryTitle];

    if (screenName) {
      navigation.navigate(screenName);
    } else {
      console.warn(`No screen found corresponding to the category "${categoryTitle}"`);
    }
  };

  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {categoriesData && categoriesData.length > 0 ? (
          categoriesData.map((cat, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleCategoryPress(cat.title)}
              >
                <Image
                  source={cat.image}
                  style={{ width: wp(18), height: wp(16), borderRadius: 15, margin: wp(3) }}
                />
                <Text style={{ fontSize: wp(3.5), textAlign: 'center' }}>{cat.title}</Text>
              </TouchableOpacity>
            );
          })
        ) : (
          <Text>No categories data available.</Text>
        )}
      </ScrollView>
    </View>
  );
}
