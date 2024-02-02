import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { styles } from './styles';

const DATA = [
    {
        id: '1',
        title: 'Data Structures',
        imageSource: require('../../accset/icon/check.png'),
    },
    {
        id: '2',
        title: 'STL',
        imageSource: require('../../accset/icon/check.png'),
    },
    {
        id: '3',
        title: 'C++',
        imageSource: require('../../accset/icon/check.png'),
    },
    {
        id: '4',
        title: 'Java',
        imageSource: require('../../accset/icon/check.png'),
    },
];
const Item = ({ title, imageSource }) => {
    return (
        <View style={styles.item}>
            <Image source={imageSource} style={styles.avatar}></Image>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const renderItem = ({ item }) => (
    <Item imageSource={item.imageSource} title={item.title} />
);

const ListCourre = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );

};
export default ListCourre;