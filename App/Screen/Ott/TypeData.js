import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute, useTheme } from '@react-navigation/native';
import OttService from '../../Service/OttService';
import { Container } from 'native-base';
import { COLORS } from '../../Constants/Colors';
import HeaderTwo from '../../Components/Header/HeaderTwo';
import RectengularCard from '../../Components/Ott/RectengularCard';

export default function TypeData(props) {
  const route = useRoute();
  const id = route.params.id;
  const name = route.params.name;
  const {colors, dark} = useTheme();

  const [allData, setallData] = useState({});

  useEffect(() => {
   getData();
  }, []);

  const getData = async () => {
      let result = await OttService.getSingleTypeData(id);
      console.log("getSingleTypeData",JSON.stringify(result));
      if (result && result.status) {
          setallData(result.data);
      }
  }

  return (
    <Container style={{backgroundColor:colors.background}}>
       <HeaderTwo name={name}/>
       <View style={{justifyContent:'center',alignItems:'center',paddingBottom: 50,}}>
          <FlatList
                data={allData.movies}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item,index) => index}
                renderItem={({ item }) => {
                return (
                    <RectengularCard 
                    item={item}
                    faith={true}
                    listCardHeight={200}
                    listCardWidth={150}
                    />
                )
                }}
            />
       </View>
    </Container>
  );
}
