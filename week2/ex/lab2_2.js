import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Animated, TouchableOpacity } from 'react-native';

// ------------------  LAB 2.2  ------------------
export default function Lab2_2() {
    return (
        <View style={styles.container}>

            <View style={styles.nav}>
                <Image
                    source={require('./img/IT_Logo.png')}
                    //resizeMode: 'contain' ให้รูปอยู่ในกรอบไม่ตัดออก
                    style={{ width: 70, height: 70,resizeMode: 'contain', marginRight: 100 }} />

                <View style={styles.headNav}>
                    <Text style={{ fontSize: 50,color: 'blue',textAlign: 'center', }}>Programs</Text>
                </View>
            </View>

            <ScrollView>
                <Image
                    source={require('./img/course-bach-it.jpg')}
                    style={{ width: 450, height: 300 }} />

                <View style={styles.It}>
                    <TouchableOpacity>
                        <Text style={[{ color: 'black' }]} >Information Technology</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    source={require('./img/course-bach-dsba.jpg')}
                    style={{ width: 450, height: 300 }} />

                <View style={styles.It}>
                    <TouchableOpacity>
                        <Text style={styles.txtIt}>Data Science and Business Analytics Program</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    source={require('./img/course-bach-bit.jpg')}
                    style={{ width: 450, height: 300 }} />

                <View style={styles.It}>
                    <TouchableOpacity>
                        <Text style={styles.txtIt}>Business Information Technology (International Program)</Text>
                    </TouchableOpacity>
                </View>

                <Image
                    source={require('./img/course-bach-ait.jpg')}
                    style={{ width: 450, height: 300 }} />

                <View style={styles.It}>
                    <TouchableOpacity>
                        <Text style={styles.txtIt}>Artificial Intelligence Technology</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        alignItems: 'center',
        justifyContent: 'center',

    },
    headNav: {
        // backgroundColor: 'blue',
        
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    It: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtIt: {
        fontSize: 14,
        padding: 10,

    },
    box: {
        width: '60%',
        marginBottom: 12,
        gap: 10,
        flexDirection: 'column',
    },
});
