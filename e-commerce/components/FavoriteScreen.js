

import React from 'react';
import { View, Text, FlatList, Button,Image } from 'react-native';
import styles from '../styles/styles';
import { useProduct } from './reducerContext';  // Import the useProduct hook

const FavoriteScreen = ({ navigation }) => {
  const { state, dispatch } = useProduct();  // Use the product context
  const favorites = state.favorite;

  const removeFavorite = (itemID) => {
    dispatch({
      type: 'REMOVE_FROM_FAVORITE',
      payload: itemID,
  });
  };

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <Text style={styles.title}>No favorite items found</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item, index) =>index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
    
              <Button title="Remove from Favorites" onPress={() => removeFavorite(item.id)} />
            </View>
          )}
        />
      )}
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default FavoriteScreen;