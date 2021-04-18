import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import {TouchableOpacity} from 'react-native'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const TopStories = () => (
<TouchableOpacity style={{
    padding:20
}}>
  <Card>
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>
  </TouchableOpacity>
);

export default TopStories;