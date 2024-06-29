import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import TextView from '../TextView/TextView';

const HorizontalFlatList = () => 
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
