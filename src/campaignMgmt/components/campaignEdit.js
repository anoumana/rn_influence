import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {campaignUpdate, campaignEdit} from '../actions';
import {Card, CardSection, Button} from '../../components/common';
import CampaignForm from './campaignForm';

class CampaignEdit extends Component {

    componentDidMount() {
        console.log("willmount:", this.props.selectedCampaign);
        _.each(this.props.selectedCampaign, (value, prop) => {
            if(prop === "name") prop = "campaignName";
            if(prop === "description") prop = "campaignDesc";
            if(prop === "name") prop = "categoryName";
            if(prop === "key") prop = "campaignKey";
            this.props.campaignUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {campaignName,
            campaignDesc,
            // campaignMobile,
            // campaignDiscount,
            campaignCategory, campaignKey} = this.props;
        
        console.log("button press :", campaignKey);

        this.props.campaignEdit({campaignKey, campaignName,
            campaignDesc,
            // campaignMobile,
            // campaignDiscount,
            campaignCategory: campaignCategory || 'Clothing'});
        

    }

    render() {
        return (
            <Card>
                <CampaignForm {...this.props}/>
                <CardSection> 
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Update
                    </Button>
                </CardSection>

            </Card>
        )
    }
};

const mapStateToProps = (state) => {
    //console.log("mapStateToProps:", state);
    const  {
        campaignName,
        campaignDesc,
        // campaignMobile,
        // campaignDiscount,
        campaignCategory,
        campaignKey
     } = state.campaignForm;

     return{        
        campaignName,
        campaignDesc,
        // campaignMobile,
        // campaignDiscount,
        campaignCategory,
        campaignKey
    };

}


export default connect(mapStateToProps, {campaignUpdate, campaignEdit}) 
    (CampaignEdit);