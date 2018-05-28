import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

const SearchTab = createStackNavigator({
  Search: VideoList,
  Detail: VideoDetail,
});

SearchTab.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="search"
      size={26}
      color={focused ? '#58AADA' : 'grey'}
    />
  ),
});

export default SearchTab;
