import React from 'react';
import { Text } from 'react-native';
import { Flex } from 'antd-mobile';

export default () => {
  return (
    <Flex
      style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center' }}
    >
      <Text>Your Music Library</Text>
    </Flex>
  );
};
