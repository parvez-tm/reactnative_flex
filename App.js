import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <View style={styles.view1}>
        <Text>1</Text>
      </View>
      <View style={styles.view2}>
        <Text>2</Text>
      </View>
      <View style={styles.view3}>
        <Text>3</Text>
      </View>
    </View>
    <View style={styles.row}>
    <View style={styles.view4}>
        <Text>4</Text>
      </View>
    </View>
    <View style={styles.row}>
    <View style={styles.view5}>
        <Text>5</Text>
      </View>
    </View>
    <View style={styles.bigrow1}>
    <View style={styles.view6}>
        <Text>6</Text>
      </View>
      <View style={styles.bigrow2}>
    <View style={styles.view7}>
        <Text>7</Text>
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigrow1:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  bigrow2:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'brown',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex:1,
    width: 50,
    height:50,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex:2,
    width: 50,
    height:50,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    flex:3,
    width: 50,
    height:50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view4: {
    flex:1,
    width: 50,
    height:50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view5: {
    flex:1,
    width: 50,
    height:50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view6: {
    flex:1,
    width: 50,
    height:50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view7: {
    flex:1,
    width: 50,
    height:50,
    backgroundColor: 'brown',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
