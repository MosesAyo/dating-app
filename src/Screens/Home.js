
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions
} from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import Love from '../../assets/svg/Love.svg';
import Dislike from '../../assets/svg/Dislike.svg';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;


const emptyState = () => 
<View style={{height: 500, display: 'flex', justifyContent: 'center'}}>

  <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>No one is nearby at this time.</Text>
</View>

const CardItem = ({item, index})=> (<Card style={[styles.card, styles.card1]}>
<View style={{position: 'relative', height: '100%', width: '100%'}}>
    <Image source={{uri: item.image}} style = {{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', borderRadius: 15}} />
    <View style={{position: 'absolute', bottom: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 15}}>
      <View style={{position: 'relative', height:'100%'}}>
        <View style={{position:'absolute', bottom: 60}}>
            <View style={{display: 'flex', flexDirection: 'row', marginTop: 40}}>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#fff', marginLeft: 16,}}>{item.name}</Text>
            </View>
        </View>
      </View>
    </View>
    <View style={{position: 'absolute', bottom: -25, left: 0, height: 50, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <TouchableOpacity style={{width: 50, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: '#000000', marginHorizontal: 30}}>
        <Dislike/>
      </TouchableOpacity>


      <TouchableOpacity style={{width: 50, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: '#FF0000', marginHorizontal: 30}}>
        <Love/>
      </TouchableOpacity>
    </View>
</View>
</Card>);

const Home = () => {

 
  return (
    <SafeAreaView>

    <View style={{backgroundColor: '#fff',height: '100%', flex: 1}} >

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%',paddingLeft: 16, paddingRight: 16, paddingTop: 40, height: 100}}>
            <Text style={{fontWeight: 'bold', fontSize: 30}}>Home</Text>
            <View>
                <Image source={{uri:'https://cdn.pixabay.com/photo/2020/12/16/04/15/man-5835659_1280.jpg'}} style = {{height: 40, width: 40, borderRadius: 10, marginLeft: 10 }} />
            </View>
        </View>
        <View style={{height: '100%', width:'100%'}}>
            <CardStack
              style={styles.content}
              renderNoMoreCards={emptyState}
              ref={swiper => {
              //   this.swiper = swiper
              }}
              onSwiped={() => console.log('onSwiped')}
              onSwipedLeft={() => console.log('onSwipedLeft')}
            >
              {data.map((item, index)=><CardItem item={item} index={index} />)}
                {/* <Card style={[styles.card, styles.card2]} onSwipedLeft={() => alert('onSwipedLeft')}><Text style={styles.label}>B</Text></Card>
                <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
                <Card style={[styles.card, styles.card2]}><Text style={styles.label}>D</Text></Card>
                <Card style={[styles.card, styles.card1]}><Text style={styles.label}>E</Text></Card> */}
            </CardStack>
        </View>

    </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#f2f2f2',
  },
  content:{
    padding: 0,
    margin: 0,
    // marginTop: 100,
    // justifyContent: 'center',
    // alignItems: 'center',
    // height: deviceHeight,
    // flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  card:{
    marginTop:60,
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth,
    height: deviceHeight*0.6,
    // backgroundColor: '#FE474C',
    // borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
  },
  card1: {
    // backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    // lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },


});

const data = [
    {
        image : 'https://cdn.pixabay.com/photo/2017/08/01/10/36/people-2564420_1280.jpg',
        name : 'Tolani',
    },
    {
        image : 'https://cdn.pixabay.com/photo/2016/02/05/12/16/smiling-1180847_1280.jpg',
        name : 'Sharon',
    },
    {
        image : 'https://cdn.pixabay.com/photo/2016/11/29/02/59/girl-1866959_1280.jpg',
        name : 'Anita',
    },
    {
        image : 'https://ca-times.brightspotcdn.com/dims4/default/b166660/2147483647/strip/true/crop/3000x2000+0+0/resize/568x379!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7f%2Fd6%2Fdfe7a286412ab34ce1beaa4b8dfb%2Fla-photos-freelance-contract-la-ig-launch-lauren-london-hero.jpg',
        name : 'Lauren',
    }
]

export default Home;