import React, {useState, useEffect, Component} from 'react';
import { ActivityIndicator } from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import {campaignCatList} from '../actions';
import { exp } from 'react-native-reanimated';
import firestore from '@react-native-firebase/firestore';



 function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

function CampaignList() {

        console.log("in list comp");

        const [loading, setLoading] = useState(true); // Set loading to true on component mount
        const [campaigns, setCampaigns] = useState([]); // Initial empty array of campaigns
      
        useEffect(() => {
          const subscriber = firestore()
            .collection('campaigns')
            .onSnapshot(querySnapshot => {
                const campaigns = [];
          
                querySnapshot.forEach(documentSnapshot => {
                    campaigns.push({
                    ...documentSnapshot.data(),
                    key: documentSnapshot.id,
                  });
                });
          
                setCampaigns(campaigns);
                setLoading(false);
              // see next step
            });
      
          // Unsubscribe from events when no longer in use
          return () => subscriber();
        }, []);
      
        if (loading) {
          return <ActivityIndicator />;
        }
      
        return (
          <SafeAreaView style={styles.container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={campaigns}
                renderItem={({ item }) => <Item title={item.name} />}
                keyExtractor={item => item.id}
            />
          </SafeAreaView>
        ); 

}

// const mapStateToProps = (state) => {
//     console.log("mapStateToProps camp list:", state);
//     const  {campaignList} = state.campaignForm;
//     console.log("mapStateToProps camp list2:", campaignList);

//      return{ campaignList  };

// }

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });


  export default CampaignList;
//export default connect(mapStateToProps, {campaignCatList}) (CampaignList);
  