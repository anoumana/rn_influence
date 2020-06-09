import React, {Component} from 'react';
import {connect} from 'react-redux';
import {campaignUpdate, campaignCreate} from '../actions';
import {Card, CardSection, Button} from '../../components/common';
import CampaignForm from './campaignForm';

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
                <CampaignForm {...this.props}/>
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
    //console.log("mapStateToProps:", state);
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


export default connect(mapStateToProps, {campaignCreate}) 
    (CampaignCreate);