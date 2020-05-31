import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { Provider } from 'react-redux';

class Home extends React.Component {
    render() {
        console.log("props",this.props);
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
        justifyContent: 'center',
    },
});


function mapStateToProps(state) {
    return state;
}

const connectedHome = connect(mapStateToProps)(Home);
export { connectedHome as Home };
