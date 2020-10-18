import React, {useState} from 'react';
import { StyleSheet, Text, View, StleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import { v4 as uuid4} from 'uuid';


const App = () => {
  const [items, setItems] = useState([
    {id: uuid4(), text: 'Milk'},
    {id: uuid4(), text: 'Eggs'},
    {id: uuid4(), text: 'Bread'},
    {id: uuid4(), text: 'Juice'},
  ])

 // adding delete function

const deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id);
  })
}


  return (
    <View style={styles.container}>
            {/* using props for title for practice. not necessary */}
      <Header title="SHOPPING LIST"/>

      <FlatList
        data={items}
        renderItem={({item}) => (
           <ListItem item={item} deleteItem={deleteItem}/>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, 
    // added padding top because iphone 11 would block the top
  }
}); 


export default App;