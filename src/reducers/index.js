import {combineReducers} from 'redux';
import CategoryReducer from './CategoryReducer'
import selectedCategoryId from './SelectionReducer';
import AuthReducer from '../login/reducers/AuthReducer'
import CampaignFormReducer from '../campaignMgmt/reducers/campaignFormReducer'

export default combineReducers({
    auth: AuthReducer,
    campaignForm: CampaignFormReducer,
    categories: CategoryReducer,
    selectedCategoryId: selectedCategoryId
});