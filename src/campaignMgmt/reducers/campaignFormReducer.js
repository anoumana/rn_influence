import {CAMPAIGN_UPDATE} from '../types';
import { act } from 'react-test-renderer';

const INITIAL_STATE= {
    campaignName: '',
    campaignDesc: '',
    capaignMobile: '',
    campaignDiscount: ''

};

export default (state = INITIAL_STATE, action) => {
    console.log("reducer:", action.payload);
    
    switch (action.type) {
        case CAMPAIGN_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
}