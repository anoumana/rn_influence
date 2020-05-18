import firebase from 'firebase';
import {Actions } from 'react-native-router-flux'
import {CAMPAIGN_UPDATE} from '../types'

export const campaignUpdate = ({prop, value}) =>{
    console.log("action:", prop, value)
    return {
        type: CAMPAIGN_UPDATE,
        payload: {prop, value}
    };
};