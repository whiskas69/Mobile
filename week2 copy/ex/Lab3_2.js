// import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, Image,  TouchableOpacity } from 'react-native';

// ------------------  LAB 3.2  ------------------
export default function Lab3_2() {
  const programIt = [
    {id:1, name: 'Information Technology', img: require('./img/course-bach-it.jpg')},
    {id:2, name: 'Data Science and Business Analytics Program', img: require('./img/course-bach-dsba.jpg')},
    {id:3, name: 'Business Information Technology (International Program)', img: require('./img/course-bach-bit.jpg')},
    {id:4, name: 'Artificial Intelligence Technology', img: require('./img/course-bach-ait.jpg')},
  ]
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image
          source={require('./img/IT_Logo.png')}
          //resizeMode: 'contain' ให้รูปอยู่ในกรอบไม่ตัดออก
          style={{ width: 70, height: 70,resizeMode: 'contain', marginRight: 100 }} />
        
        <View style={styles.headNav}>
        
          <Text style={{fontSize:40, color: 'blue',fontWeight: 'bold'}}>Programs</Text>
       
        </View>
      </View>

      <FlatList
        data={programIt}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.child}>
              <Image 
              source={item.img}
               style={{ width: 400, height: 250,}} />
              <Text>{item.name}</Text>
            </View>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
  },
  nav: {
    height: '10%',
    backgroundColor: 'skyblue',
    flexDirection: 'row',
  },
  headNav: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  child: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    margin: 5,
  }
});
