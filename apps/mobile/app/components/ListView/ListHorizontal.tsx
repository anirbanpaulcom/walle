import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import TextView from '../TextView/TextView';

const HorizontalFlatList = () => {
  const data = [
    {
      key: '1',
      imageUri:
        'https://image.pixstory.com/optimized/Pixstory-image-164561888485065.png',
      title: 'Science',
    },
    {
      key: '2',
      imageUri:
        'https://images.squarespace-cdn.com/content/v1/53b6eb62e4b06e0feb2d8e86/1594942678203-T2DZHNP3HW0BDATHQB5Z/SamSpratt_NoPressure_Cover_Final+copy.jpg?format=2500w',
      title: 'Technology',
    },
    {
      key: '3',
      imageUri:
        'https://image.pixstory.com/optimized/Pixstory-image-164561888485065.png',
      title: 'Art',
    },
    {
      key: '4',
      imageUri:
        'https://pics.craiyon.com/2023-06-01/ca49f7574c9e4fccb6174f524663ad18.webp',
      title: 'Music',
    },
    {
      key: '5',
      imageUri:
        'https://pics.craiyon.com/2023-06-01/ca49f7574c9e4fccb6174f524663ad18.webp',
      title: 'songs',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.imageUri}} />
      </View>
      <TextView type="smallBold" style={styles.title}>
        {item.title}
      </TextView>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={item => item.key}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 200,
    marginRight: 20,
    alignItems: 'center',
    marginVertical: 10,
  },
  imageContainer: {
    borderRadius: 25,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 6,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  title: {
    marginTop: 5,
  },
});

export default HorizontalFlatList;
