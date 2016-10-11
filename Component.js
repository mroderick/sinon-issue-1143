import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class AppComponent extends React.Component {

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <Text>
          {this.props.content}
        </Text>
      </TouchableOpacity>
    );
  }

}
