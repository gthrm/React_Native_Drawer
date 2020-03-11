import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList
} from 'react-native';
import Item from '../components/Item';
import photo from '../assets/profile.jpg';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          name: 'Home',
          icon: 'ios-home'
        },
        {
          name: 'Profile',
          icon: 'ios-contact'
        },
        {
          name: 'Settings',
          icon: 'ios-settings'
        },
      ]
    };
  }


  render() {
    const {
      routes
    } = this.state;
    const {
      navigation
    } = this.props;
    return (
      <View style={styles.container}>
        <Image source={photo} style={styles.profileImg} />
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 10 }}>Janna Doe</Text>
        <Text style={{ color: 'gray', marginBottom: 10 }}>janna@doe.com</Text>
        <View style={styles.sidebarDivider} />
        <FlatList
          style={{ width: '100%', marginLeft: 30 }}
          data={routes}
          renderItem={({ item }) => <Item item={item} navigate={navigation.navigate} />}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
    flex: 1
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20
  },
  sidebarDivider: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 10
  }
});
