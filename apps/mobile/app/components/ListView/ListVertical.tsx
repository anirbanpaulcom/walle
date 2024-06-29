import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {getColor, getIcon} from '../../functions/functions';
import SpaceBetweenRow from '../Wrapper/SpaceBetweenRow';

const renderItem = ({item}) => (
  <TouchableOpacity style={styles.itemContainer}>
    <View
      style={[
        styles.iconContainer,
        {backgroundColor: getColor(item.category)},
      ]}>
      {getIcon(item.category)}
    </View>
    <View style={styles.textContainer}>
      <SpaceBetweenRow>
        <Text style={[styles.heading]}>{item.category}</Text>
        <Text style={[styles.heading]}>${item.amount}</Text>
      </SpaceBetweenRow>
      <SpaceBetweenRow>
        <Text style={styles.subHeading}>{item.type}</Text>
        <Text style={styles.subHeading}>{item.method}</Text>
      </SpaceBetweenRow>
    </View>
  </TouchableOpacity>
);

const VerticalFlatList = ({props}) => {
  return (
    <FlatList
      data={props}
      keyExtractor={item => item.key}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      inverted={true}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  iconContainer: {
    flex: 0.1,
    borderRadius: 25,
    padding: 12,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
  },
  textContainer: {
    flex: 0.9,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  heading: {
    marginTop: 5,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    overflow: 'hidden',
  },
  subHeading: {
    textAlign: 'left',
    fontSize: 12,
    color: '#555',
    overflow: 'hidden',
  },
});

export default VerticalFlatList;
