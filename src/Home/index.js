import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { getHoliday } from '../actions/userActions';

import { Provider } from 'react-redux';

class Home extends React.Component {
    componentDidMount() {
        this.props.getHoliday();
    }
    render() {
        console.log("props", this.props);
        return (
            <View style={styles.container}>
                <Text>Its working</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
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
