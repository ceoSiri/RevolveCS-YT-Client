import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Provider as PaperProvider, Button, Card, Appbar} from 'react-native-paper';

export default function App() {
    return (
        <PaperProvider>
            <Appbar style={{top: '8%', backgroundColor: 'red'}}>
        <Appbar.Action icon="menu" onPress={() => console.log('Pressed archive')} />        
      </Appbar>
            <View style={styles.container}>
                
                <Card elevation={100} style={{height: '30%', marginLeft: '5%', marginRight: '5%'}}>
                <Image style={{height: 200, width: 200, left: '24%'}}
    
        source={{uri: 'https://cdn.discordapp.com/attachments/707595841673756712/707604337362468894/RevolveYC.PNG'}}
      />
                    <Card.Content>
                <Button color="red" style={{top: '0%'}} icon="google" mode="contained" onPress={() => console.log('Pressed')}>
                    Sign In With Google
                </Button>
                    </Card.Content>
                    </Card>
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
});
