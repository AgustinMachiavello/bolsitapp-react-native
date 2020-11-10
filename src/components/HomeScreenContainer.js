import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

// Components
import CircularProgressBar from './CircularProgressBar';
import PurchaseItemList from './PurchaseItemList';

class HomeScreenContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            points: 1500,
            purchases: [
                    {
                        id: 0,
                        date: '1/1/2020',
                        description: 'description',
                        points: 20
                    },
                    {
                        id: 1,
                        date: '1/1/2020',
                        description: 'description',
                        points: 7
                    }
                ]
            }
        }

    render(){
        return(
            <View style={styles.container}>
                <CircularProgressBar value={this.state.points}/>
                <PurchaseItemList itemList={this.state.purchases}/>
            </View>
        )
    }
}

export default HomeScreenContainer;

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        }
    }
)