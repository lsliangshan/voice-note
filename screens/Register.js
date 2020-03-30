import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function (props) {
  const navigation = useNavigation();

  return <PageRegister {...props} navigation={navigation} />;
}
class PageRegister extends Component {
  render () {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Button title="注册页面" onPress={() => navigation.push('Login')} />
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
  },
  tabBarIcon: {
    width: 21,
    height: 21,
  },
});
