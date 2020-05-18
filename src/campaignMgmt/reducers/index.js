import {combineReducers} from 'redux';
import CampaignFormReducer from './CampaignFormReducer'


export default combineReducers({
    campaignForm: CampaignFormReducer
});