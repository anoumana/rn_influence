import {CAMPAIGN_UPDATE,  CAMPAIGN_CREATE_SUCCESS,
    CAMPAIGN_CREATE_FAIL} from '../types';
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
        default:
            return state;
    }
}