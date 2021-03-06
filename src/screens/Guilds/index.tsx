import React from "react";
import {
  View,
  FlatList
} from 'react-native'
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";


import { GuildProps } from "../../components/Guild";
import { styles } from './styles'

type Props ={
  handleGuildSelected: (guild: GuildProps)=> void;
}

export function Guilds({handleGuildSelected}:Props) {
  const guilds =[
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) =>(
          <Guild
            data={item}
            onPress={ () => handleGuildSelected(item)}
          />
        )}
        ItemSeparatorComponent={()=>(<ListDivider/>)}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />

    </View>
  )
}