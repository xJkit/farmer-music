import * as React from 'react';

import { FlatList, StyleSheet } from 'react-native';
import { Flex, List } from 'antd-mobile';

import records from '../mocks/seachRecords.json';

interface IRecord {
  id: number;
  albumName: string;
  singer: string;
  imgUrl: string;
}

class Search extends React.Component<{}> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataSource: records
    };
  }

  public render() {
    return (
      <Flex
        style={{
          alignItems: 'flex-start',
          backgroundColor: 'yellow',
          flex: 1,
          paddingTop: 24
        }}
      >
        <List style={styles.listStyle}>
          <FlatList
            data={this.state.dataSource}
            onEndReachedThreshold={30}
            onEndReached={info => console.log(info)}
            renderItem={(record: IRecord) => {
              const { albumName, singer } = record.item;
              return (
                <List.Item key={record.id}>
                  {albumName}
                  <List.Item.Brief>{singer}</List.Item.Brief>
                </List.Item>
              );
            }}
          />
        </List>
      </Flex>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    height: 600
  }
});
