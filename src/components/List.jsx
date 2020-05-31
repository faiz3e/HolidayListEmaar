import React from 'react';
import PropTypes from 'prop-types';

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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

List.propTypes = {
    HolidayData: PropTypes.array
};
