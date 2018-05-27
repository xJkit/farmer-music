import * as React from 'react';
import { TabBar } from 'antd-mobile';

interface IOnSelect {
  (activeTab: string): void;
}

interface TabBarProps {
  activeTab: string;
  onSelect: IOnSelect;
}

export default class MyTabBar extends React.Component<TabBarProps> {
  static Item = TabBar.Item;

  handleTabSelect = (tabKey: string) => () => {
    this.props.onSelect(tabKey);
  };

  render() {
    const newChildren = React.Children.map(this.props.children, child => {
      if (!child.key) {
        return child;
      }
      return React.cloneElement(child, {
        selected: this.props.activeTab === child.key,
        onPress: this.handleTabSelect(child.key),
        ...child.props
      });
    });
    return <TabBar>{newChildren}</TabBar>;
  }
}
