import React, {useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import OttService from '../../Service/OttService';
import { Container } from 'native-base';
// import SquareCard from '../../Components/Ott/SquareCard';
import { COLORS } from '../../Constants/Colors';
import HeaderTwo from '../../Components/Header/HeaderTwo';
import RectengularCard from '../../Components/Ott/RectengularCard';

export default function CategoryData(props) {
  const route = useRoute();
  const id = route.params.id;
  const name = route.params.name;

  const [allData, setallData] = useState({});

  useEffect(() => {
   getData();
  }, []);

  const getData = async () => {
      let result = await OttService.getCategoryData(id);
      console.log("result",JSON.stringify(result));
      if (result && result.status) {
          setallData(result.data);
      }
  }

  return (
    <Container style={{backgroundColor:COLORS.themecolor}}>
       <HeaderTwo name={name}/>
       <View style={{justifyContent:'center',alignItems:'center',paddingBottom: 50,}}>
          <FlatList
                data={allData.movies}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item,index) => index}
                renderItem={({ item }) => {
                return (
                    <RectengularCard item={item} />
                )
                }}
            />
       </View>
    </Container>
  );
}
