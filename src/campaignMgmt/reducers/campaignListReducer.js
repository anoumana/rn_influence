import {CAMPAIGN_LIST_SUCCESS, CAMPAIGN_LIST_FAIL} from '../types';
import { act } from 'react-test-renderer';

const INITIAL_STATE= { campaignListInfo: [] };

export default (state = INITIAL_STATE, action) => {
    console.log("list reducer:", action.payload);
    
    switch (action.type) {
      case CAMPAIGN_LIST_SUCCESS:
            console.log("in CAMPAIGN_LIST_SUCCESS:", action.payload)
            return {...state, campaignList:action.payload};
        case CAMPAIGN_LIST_FAIL:
            console.log("in CAMPAIGN_LIST_FAIL:", action.payload)
            return {...state, error: 'Campaign list Failed'};
        default:
            return state;
    }
}