
import firestore from '@react-native-firebase/firestore';
import {Actions } from 'react-native-router-flux'
import {CAMPAIGN_UPDATE, CAMPAIGN_CREATE, CAMPAIGN_CREATE_SUCCESS,
    CAMPAIGN_CREATE_FAIL, CAMPAIGN_CAT_LIST, CAMPAIGN_LIST_SUCCESS,
    CAMPAIGN_LIST_FAIL} from '../types'

    export const campaignUpdate = ({prop, value}) =>{
        console.log("action:", prop, value)
        return {
            type: CAMPAIGN_UPDATE,
            payload: {prop, value}
        };
    };

   export  const campaignCatList= ()=>{
        console.log("Campaign Cat List");

        return (dispatch) => {
            dispatch({type: CAMPAIGN_CAT_LIST});
            firestore().collection('campaigns')
                .onSnapshot(querySnapshot => {
                    const campaignList = [];
                    console.log("Campaign Cat List2", campaignList);

                    querySnapshot.forEach(documentSnapshot => {
                        campaignCatList.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                      });
                      console.log("Campaign Cat List3", campaignList);

                    })
                })
                .then(data => {
                    console.log("camp cat list data:", data);
                    console.log("camp cat list data2:",  campaignList);
                    // data.forEach(function(doc) {
                    //     // doc.data() is never undefined for query doc snapshots
                    //     console.log(doc.id, " => ", doc.data());
                    // });
                    dispatch({type: CAMPAIGN_LIST_SUCCESS,
                        payload: campaignList});
                    Actions.campaignList();
                })
                .catch((error) =>{ 
                    dispatch({
                        type: CAMPAIGN_LIST_FAIL
                    });
                });
        };
    }
        
export const campaignCreate= ( {campaignName, campaignDesc, campaignMobile,
    campaignDiscount,  campaignCategory} )  => {

        return (dispatch) => {
            dispatch({type: CAMPAIGN_CREATE});
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

export const campaignCreateFail= (dispatch, error)=>{
    console.log("Campaign create error", error);
    dispatch({
        type: CAMPAIGN_CREATE_FAIL
    });
}

export const campaignCreateSuccess= (dispatch, data) => {
    console.log("campaign Create Success ");
    dispatch({type: CAMPAIGN_CREATE_SUCCESS,
        payload: data});
    
    Actions.campaignList();

}