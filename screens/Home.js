import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import Header from '../components/Header';
import image from '../assets/icon.png';

export default function Home(props) {
  const {
    navigation
  } = props;
  return (
    <View style={styles.container}>
      <Header name="Home" openDrawer={navigation.openDrawer} />
      <Image source={image} style={{ width: '80%', height: '30%' }} resizeMode="contain" />
      <Text style={{ padding: 20 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dictum sapien, nec viverra orci. Morbi sed maximus purus. Phasellus quis justo mi. Nunc ut tellus lectus.
      </Text>
      <Text style={{ padding: 20 }}>
        In eleifend, turpis sit amet suscipit tincidunt, felis ex tempor tellus, at commodo nunc massa rhoncus dui. Vestibulum at malesuada elit.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
    flex: 1
  },
});
