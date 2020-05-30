import React, {Component} from 'react';
import {connect} from 'react-redux';
import {campaignUpdate, campaignCreate} from '../actions';
import {Card, CardSection, Input, Button} from '../../components/common';
import {Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';

class CampaignCreate extends Component {

    onButtonPress() {
        const {campaignName,
            campaignDesc,
            campaignMobile,
            campaignDiscount,
            campaignCategory} = this.props;

        this.props.campaignCreate({campaignName,
            campaignDesc,
            campaignMobile,
            campaignDiscount,
            campaignCategory: campaignCategory || 'Clothing'});
        

    }

    render() {
        return (
            <Card>
                <CardSection> 
                    <Input labelText="Name" 
                    placeholderText="Campaign Name" 
                    value = {this.props.campaignName}
                    onChangeText={text=>this.props.campaignUpdate(
                        {prop:'campaignName', value: text})}/>
                </CardSection>

                <CardSection> 
                    <Input labelText="Description" 
                    value = {this.props.campaignDesc} 
                    onChangeText={text=>this.props.campaignUpdate(
                        {prop:'campaignDesc', value: text})}/>

                </CardSection>

                <CardSection> 
                    <Input labelText="Discount %" 
                    value = {this.props.campaignDiscount} 
                    onChangeText={text=>this.props.campaignUpdate(
                        {prop:'campaignDiscount', value: text})}/>

                </CardSection>

                <CardSection> 
                    <Input labelText="Mobile" 
                    placeholderText="555-55-5555" 
                    value = {this.props.campaignMobile}
                    onChangeText={text=>this.props.campaignUpdate(
                        {prop:'campaignMobile', value: text})}/>

                </CardSection>

                <CardSection  >
                    <Text style={styles.pickerLabelStyle}> Category:    </Text>
                    <Picker 
                        style={{flex:1}}
                        selectedValue={this.props.campaignCategory}
                        onValueChange={value => this.props.campaignUpdate(
                            {prop:'campaignCategory', value}) }
                    >
                        <Picker.Item label="Clothing" value="clothing" />
                        <Picker.Item label= "Jewelry" value= "jewelry" />
                        <Picker.Item label= "Food" value= "food" />
                        <Picker.Item label= "Electronics" value= "electronics" />
                        <Picker.Item label= "Sports Items" value= "sports" />
                    </Picker>
                </CardSection>

                <CardSection> 
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>

            </Card>
        )
    }
};

const mapStateToProps = (state) => {
    console.log("mapStateToProps:", state);
    const  {
        campaignName,
        campaignDesc,
        campaignMobile,
        campaignDiscount,
        campaignCategory
     } = state.campaignForm;

     return{        
        campaignName,
        campaignDesc,
        campaignMobile,
        campaignDiscount,
        campaignCategory
    };

}

const styles = StyleSheet.create({
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
});

export default connect(mapStateToProps, {campaignUpdate, campaignCreate}) 
    (CampaignCreate);