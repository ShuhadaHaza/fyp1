import React from 'react';
import { Text, StyleSheet, ScrollView, TextInput, Picker, View } from 'react-native';

const ResultDisplay =(props) => (
    <View>
        <Text>
        Rebar Name:{props.rebarname}
        Diameter:{props.diameter}
        Rate Price:{props.material}
        Wastage (%):{props.wastage} 
        Tyring Wire:{props.wire} 
        No. of skilled labour:{props.skilled}
        Rate of skilled labour (RM):{props.rateskilled}
        Output skilled labour (per tonne):{props.outputskilled}
        No. of unskilled labour:{props.unskilled}
        Rate of unskilled labour (RM):{props.rateunskilled}
        Output unskilled labour (per tonne):{props.outputunskilled} 
        Profit (%):{props.profit}
        Overhead (%):{props.overhead}
        {/* Total cost (material+ mobalization + labour):<br/> */}
        Total cost:{props.totalcost}
        </Text>
        </View>

)

export default ResultDisplay;