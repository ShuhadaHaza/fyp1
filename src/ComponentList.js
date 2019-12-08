import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {componentFetch} from './src/actions/ComponentAction';

class App extends Component{

    componentWillMount(){
        this.props.componentFetch();
    }

    render(){
        return(
            <View>
              <Text>
                list
              </Text>
        </View>
        );
        
    }

}

export default connect(null, {componentFetch})(App);
