import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import MainHome from './MainHome'

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: '', icon: 'home'},
    { key: 'albums', title: '', icon: 'album'},
    { key: 'recents', title: '', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MainHome,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      
    />
  );
};

export default Home;