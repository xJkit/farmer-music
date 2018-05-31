import React, { Fragment } from 'react';
import { StyleSheet, Platform, View } from 'react-native';

/** components */
import MyTabBar from './components/MyTabBar';

/** containers */
import Browse from './containers/Browse';
import Search from './containers/Search';
import YourLibrary from './containers/YourLibrary';

type TabName = 'Browse' | 'Search' | 'YourLibrary';

interface AppState {
  activeTab: TabName;
}

export default class App extends React.PureComponent<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeTab: 'Browse'
    };
  }

  _onSelect = activeTab => this.setState({ activeTab });

  render() {
    return (
      <Fragment>
        <View style={styles.statusBarStyle} />
        <MyTabBar activeTab={this.state.activeTab} onSelect={this._onSelect}>
          <MyTabBar.Item title="瀏覽" key="Browse">
            <Browse />
          </MyTabBar.Item>
          <MyTabBar.Item title="搜尋" key="Search">
            <Search />
          </MyTabBar.Item>
          <MyTabBar.Item title="你的音樂庫" key="YourLibrary">
            <YourLibrary />
          </MyTabBar.Item>
        </MyTabBar>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  statusBarStyle: {
    height: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'yellow'
  }
});
