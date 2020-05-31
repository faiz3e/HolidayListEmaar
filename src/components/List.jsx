import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

export const List = ({ HolidayData }) => {

    return (
        <FlatList
            data={HolidayData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, id }) => <Text style={styles.item}>{item.summary}</Text>}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})