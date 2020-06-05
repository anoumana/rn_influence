import {CAMPAIGN_UPDATE,  CAMPAIGN_CREATE_SUCCESS,
    CAMPAIGN_CREATE_FAIL, CAMPAIGN_LIST_SUCCESS,
    CAMPAIGN_LIST_FAIL} from '../types';
import { act } from 'react-test-renderer';

const INITIAL_STATE= {
    campaignName: '',
    campaignDesc: '',
    capaignMobile: '',
    categoryName:'',
    campaignDiscount: ''

};

export default (state = INITIAL_STATE, action) => {
    console.log("reducer:", action.payload);
    
    switch (action.type) {
        case CAMPAIGN_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case CAMPAIGN_CREATE_SUCCESS:
            console.log("in CAMPAIGN_CREATE_SUCCESS:", action.payload)
            return {...state, ...INITIAL_STATE};
        case CAMPAIGN_CREATE_FAIL:
            console.log("in CAMPAIGN_CREATE_FAIL:", action.payload)
            return {...state, error: 'Campaign Create Failed'};
        // case CAMPAIGN_LIST_SUCCESS:
        //     console.log("in CAMPAIGN_LIST_SUCCESS:", action.payload)
        //     return {...state, campaignList:action.payload};
        // case CAMPAIGN_LIST_FAIL:
        //     console.log("in CAMPAIGN_LIST_FAIL:", action.payload)
        //     return {...state, error: 'Campaign list Failed'};
        default:
            return state;
    }
}