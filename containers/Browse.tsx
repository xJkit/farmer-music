import React from 'react';
import { View, Text } from 'react-native';
import { Flex } from 'antd-mobile';

export default () => {
  return (
    <Flex
      style={{ backgroundColor: 'yellow', flex: 1, justifyContent: 'center' }}
    >
      <Text>Browse the music</Text>
    </Flex>
  );
};
