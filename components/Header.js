import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header(props) {
  const {
    name,
    openDrawer
  } = props;
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openDrawer}>
        <Ionicons name="ios-menu" size={32} />
      </TouchableOpacity>
      <Text>{name}</Text>
      <Text style={{ width: 50 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
});
