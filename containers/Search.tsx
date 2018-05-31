import * as React from 'react';

import { FlatList, StyleSheet, View } from 'react-native';
import { Flex, List } from 'antd-mobile';

import records from '../mocks/seachRecords.json';

interface Item {
  albumName: string;
  singer: string;
  imgUrl: string;
}

interface Record {
  item: Item;
  id: number;
}

interface SearchState {
  dataSource: Item[];
}

class Search extends React.PureComponent<{}, SearchState> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataSource: records
    };
  }

  _handleListClickWithItem = ({ albumName, singer }: Item) => () => {
    alert(`you click ${albumName} sung by ${singer}`);
  };

  _handleReachEnd = () => {
    this.setState(prevState => ({
      dataSource: [...prevState.dataSource, ...records]
    }));
  };

  _keyExtractor = (_: Item, index: number) => String(index);

  _renderItem = (record: Record) => {
    const { albumName, singer } = record.item;
    return (
      <List.Item
        key={record.id}
        arrow="horizontal"
        onClick={this._handleListClickWithItem(record.item)}
      >
        {albumName}
        <List.Item.Brief>{singer}</List.Item.Brief>
      </List.Item>
    );
  };

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
        <View style={styles.listStyle}>
          <FlatList
            data={this.state.dataSource}
            keyExtractor={this._keyExtractor}
            initialNumToRender={10}
            onEndReachedThreshold={30}
            onEndReached={info => console.log(info)}
            renderItem={this._renderItem}
            onEndReachedThreshold={0.5}
            onEndReached={this._handleReachEnd}
          />
        </View>
      </Flex>
    );
  }
}

export default Search;

/** styles */
const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    height: 600
  }
});
