import React, {Component} from 'react';
import { Text, StyleSheet, ScrollView, TextInput, Picker, View } from 'react-native';
import instance from './instance';
import {Card, CardSection, Button, Input} from './components/common';
//import {Card, CardSection, Input, Button} from './src/components/common';

export default class RebarScreen extends Component  {

  constructor(props) {
    super(props);
  
    this.state = {
      rebarname :'',
      diameter : '',
      material : '',
      wire : '',
      wastage : '',
      skilled : '',
      rateskilled: '',
      outputskilled: '',
      unskilled : '',
      rateunskilled : '',
      outputunskilled : '',
      profit : '',
      overhead : '',
      totalmate: 0,
      totalwastage : 0,
      totalcosti : 0,
      totalcost: 0,

    };
  }


    calculateSum = ()=> {
      var m = parseFloat(this.state.material);
      var w = parseFloat(this.state.wastage);
      var totalmate = m + ((w/100)*m);

      this.setState({ totalmate: totalmate})
      var wi = parseFloat(this.state.wire);
      var totalwi = 10 * wi;

      var s = parseFloat(this.state.skilled);
      var rs = parseFloat(this.state.rateunskilled);
      var a = s *rs;
      var os = parseFloat(this.state.outputskilled);
      var totalskil = a/os;

      var us= parseFloat(this.state.unskilled);
      var rus = parseFloat(this.state.rateunskilled);
      var b = us *rus;
      var ous = parseFloat(this.state.outputunskilled);
      var totalunskil = b/ous;

      var pro = parseFloat(this.state.profit);
      var ove = parseFloat(this.state.overhead);
      var overall =totalmate + totalwi + totalskil + totalunskil;
      this.setState({ overall: overall});
      var p = overall * (pro/100);
      var o =  overall * (ove/100);
      var totalcosti =  overall + p + o; 
      this.setState({ totalcosti: totalcosti});
    }

    postDataHandler = (e) => {
        e.preventDefault;
        const Data ={
            rebarname: this.state.rebarname,
            diameter : this.state.diameter,
            material: this.state.material,
            wastage : this.state.wastage,
            wire: this.state.wire,
            skilled: this.state.skilled,
            rateskilled: this.state.rateskilled,
            outputskilled : this.state.outputskilled,
            unskilled : this.state.unskilled,
            rateunskilled: this.state.unskilled,
            outputunskilled: this.state.outputunskilled,
            profit: this.state.profit,
            overhead: this.state.overhead,
            overal: this.state.overall,
            totalcost: this.state.totalcosti


        }
        instance.post('user/userId/component.json', Data).then(response =>{
            console.log(response);
        })
    }


    render  (){
    return (

     // <View>
       // 

       <Card>
      <CardSection>
      <Text style = {styles.textStyle}>Rebar Form</Text>
      </CardSection>

      <CardSection>
    <Input 
    label = "Rebar name:"
    placeholder = "rebarname"
    value = {this.state.rebarname}
    onChangeText = {(rebarname) => this.setState({rebarname})}
    //onChangeText={(password) => this.setState({ password })}
    />
    </CardSection>

    <CardSection>
    <Text >Material Cost</Text>
    </CardSection>

    <CardSection>
    <Text>Diameter</Text>      
   
    <Picker
      selectedValue={this.state.diameter}
      style={{ flex:1 }}
      onValueChange={(itemValue) => this.setState({ diameter: itemValue })}>
  <Picker.Item label="10 mm" value="10 mm" />
  <Picker.Item label="12 mm" value="12 mm" />
  <Picker.Item label="16 mm" value="16 mm" />
  <Picker.Item label="20 mm" value="20 mm" />
  <Picker.Item label="32 mm" value="32 mm" />
  <Picker.Item label="40 mm" value="40 mm" />

</Picker>
</CardSection>

      <CardSection>
    <Input 
    label ="Rate Price per piece (RM)"
    style = {styles.input}
    value = {this.state.material}
    keyboardType = 'numeric'
    onChangeText = {(material) => this.setState({material})}
    //onChangeText={(password) => this.setState({ password })}
    />
   </CardSection>

   <CardSection>
<Text>Spacer & wastage (%)</Text>
    <TextInput 
    style = {styles.input}
    value = {this.state.wastage}
    keyboardType = 'numeric'
    onChangeText = {(wastage) => this.setState({wastage})}
    />
     </CardSection>


     <CardSection>
    <Text>Tyring Wire(Price kg/tonne)</Text>
    <TextInput 
    style = {styles.input}
    value = {this.state.wire}
    keyboardType = 'numeric'
    onChangeText = {(wire) => this.setState({wire})}
    />
     </CardSection>


     <CardSection>
    <Text>Labour Cost</Text>
    <Text>No. of skilled labour</Text>
    <TextInput 
    style = {styles.input}
    value = {this.state.skilled}
    keyboardType = 'numeric'
    onChangeText = {(skilled) => this.setState({skilled})}
    />
     </CardSection>

     <CardSection>
    <Text>Rate of skilled labour (RM)</Text>
    <TextInput 
    style = {styles.input}
    value = {this.state.rateskilled}
    keyboardType = 'numeric'
    onChangeText = {(rateskilled) => this.setState({rateskilled})}
    />
     </CardSection>


     <CardSection>
    <Text>Output skilled labour (per tonne)</Text>
    <TextInput 
    style = {styles.input}
    value = {this.state.outputskilled}
    keyboardType = 'numeric'
    onChangeText = {(outputskilled) => this.setState({outputskilled})}
    />
     </CardSection>

     <CardSection>
    <Text>No. of unskilled labour</Text>
    <TextInput 
    style = {styles.input}
    value = {this.state.unskilled}
    keyboardType = 'numeric'
    onChangeText = {(unskilled) => this.setState({unskilled})}
    />
     </CardSection>

     <CardSection>
    <Text>Rate of unskilled labour (RM)</Text>
    <TextInput 
    style = {styles.input}
    value = {this.state.rateunskilled}
    keyboardType = 'numeric'
    onChangeText = {(rateunskilled) => this.setState({rateunskilled})}
    />
     </CardSection>

     <CardSection>
    <Text>Output unskilled labour (per tonne)</Text>
    <TextInput 
    style = {styles.input}
    value = {this.state.outputunskilled}
    keyboardType = 'numeric'
    onChangeText = {(outputunskilled) => this.setState({outputunskilled})}
    />
     </CardSection>


     <CardSection>
    <Text>Profit (%)</Text>
    <TextInput 
    style = {styles.input}
    value = {this.state.profit}
    keyboardType = 'numeric'
    onChangeText = {(profit) => this.setState({profit})}
    />
     </CardSection>
    
     <CardSection>
    <Text>Overhead (%)</Text>
    <TextInput 
    style = {styles.input}
    value = {this.state.overhead}
    keyboardType = 'numeric'
    onChangeText = {(overhead) => this.setState({overhead})}
    />
     </CardSection>

     <CardSection>
<Text>{`Total cost (material+ mobalization + labour): ${this.state.overall}`}</Text>
    </CardSection>

    <CardSection>
<Text>{`total cost ${this.state.totalcosti}`}</Text>
    </CardSection>

    <CardSection>
    {<Button 
      onPress={() => this.props.navigation.navigate('Result')}
      title = "Calculate"/>
    }
     </CardSection>
   
     <CardSection>
    <Button
      title = "Save"
      onPress = {this.postDataHandler}
    /> 
    </CardSection>

    </Card>
    );
    }
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize : 30
    },
    input : {
        margin : 15,
        borderColor: 'black',
        borderWidth: 1

    }
});

