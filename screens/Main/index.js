import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function (props) {
  const navigation = useNavigation();

  return <PageMain {...props} navigation={navigation} />;
}
class PageMain extends Component {
  render () {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>Main</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f8',
  },
  tabBarIcon: {
    width: 21,
    height: 21,
  },
});
