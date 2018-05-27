import React from 'react';
import { Text } from 'react-native';
import { Flex, List } from 'antd-mobile';
import ListItem from 'antd-mobile/lib/list/ListItem';

import records from '../mocks/seachRecords.json';

export default () => {
  return (
    <Flex
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'flex-start',
        paddingTop: 24
      }}
    >
      <Flex.Item>
        <List renderHeader={() => '搜尋紀錄'}>
          {records.map(record => (
            <List.Item
              key={record.id}
              thumb={record.imgUrl}
              arrow="horizontal"
              multipleLine
              onClick={() => {}}
            >
              {record.singer}
              <List.Item.Brief>{record.albumName}</List.Item.Brief>
            </List.Item>
          ))}
        </List>
      </Flex.Item>
    </Flex>
  );
};
