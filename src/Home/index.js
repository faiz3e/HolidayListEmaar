import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { getHoliday } from '../actions/userActions';
import { List } from '../components/List';
import { parseHoliday } from '../helpers';

const Home = ({ holidayReducer, getHoliday }) => {

    useEffect(() => {
        getHoliday();
    }, []);

    const HolidayData = parseHoliday(holidayReducer)
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>List Of Holidays</Text>
            <List {...{ HolidayData }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 18,
        height: 44,
    }
});


function mapStateToProps(state) {
    const { holidayReducer } = state
    return { holidayReducer };
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHoliday: (data) => dispatch(getHoliday(data)),
    }
}
const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);
export { connectedHome as Home };
