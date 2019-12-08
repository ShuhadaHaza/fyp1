import React from 'react';
import instance from '../instance';
import ResultDisplay from '../components/ResultDisplay';
import { Text, StyleSheet, ScrollView, TextInput, Picker, View } from 'react-native';

class ResultFetch extends React.Component{

    state ={
        components: []
    }

    componentDidMount(){
       instance.get('user/userId/component.json')
        .then(response=>{
            console.log(response.data);
            const fetchedResult =[];
            for(let key in response.data){
                fetchedResult.unshift(
                    {
                        ...response.data[key],
                        id:key
                    }

                )
            }
            this.setState({components:fetchedResult})
        })
    }

    render(){
        return(
            <View>
                {this.state.components.map(component => (
                    <ResultDisplay
                    key={component.id}
                    rebarname={component.rebarname}
                    diameter = {component.diameter}
                    material ={component.material}
                    wastage ={component.wastage}
                    wire = {component.wire}
                    skilled ={component.skilled}
                    rateskilled ={component.rateskilled}
                    outputskilled ={component.outputskilled}
                    unskilled ={component.unskilled}
                    rateunskilled ={component.rateunskilled}
                    outputunskilled ={component.outputskilled}
                    profit ={component.profit}
                    overhead ={component.overhead}
                    totalcost={component.totalcost}
                    />
                ))}
            </View>
        )
    }
}

export default ResultFetch;