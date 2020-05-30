
import firestore from '@react-native-firebase/firestore';
import {Actions } from 'react-native-router-flux'
import {CAMPAIGN_UPDATE, CAMPAIGN_CREATE, CAMPAIGN_CREATE_SUCCESS,
    CAMPAIGN_CREATE_FAIL} from '../types'

export const campaignUpdate = ({prop, value}) =>{
    console.log("action:", prop, value)
    return {
        type: CAMPAIGN_UPDATE,
        payload: {prop, value}
    };
};

export const campaignCreate= ( {campaignName, campaignDesc, campaignMobile,
    campaignDiscount,
    campaignCategory} )  => {

        return (dispatch) => {
            dispatch({type: CAMPAIGN_CREATE});
           // var fstore = firebase.firestore();
            firestore().collection('campaigns')
                .add({
                    name: campaignName,
                    description: campaignDesc,
                    categoryName: campaignCategory
                })
                .then(data => {
                    campaignCreateSuccess(dispatch,data)  })
                .catch((error) =>{ 
                    campaignCreateFail(dispatch, error);
                });
        }
};

const campaignCreateFail= (dispatch, error)=>{
    console.log("Campaign create error", error);
    dispatch({
        type: CAMPAIGN_CREATE_FAIL
    });
}
const campaignCreateSuccess= (dispatch, data) => {
    console.log("campaign Create Success ");
    dispatch({type: CAMPAIGN_CREATE_SUCCESS,
        payload: data});
    
    Actions.campaignList();

}