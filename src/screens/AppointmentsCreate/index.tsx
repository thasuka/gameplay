import React, { ReactNode, useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  ImageBackgroundProps,
  FlatList,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import { GuildIcon } from '../../components/GuildIcon'
import { Smallinput } from '../../components/Smallinput'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { ModalView } from '../../components/ModalView'


import { Guilds } from '../Guilds'
import { GuildProps } from '../../components/Guild'

export function AppointmentsCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true)
  }

  function handleGuildSelected(guildSelected: GuildProps) {
    console.log('guildSelected', guildSelected)
    setGuild(guildSelected)
    setOpenGuildsModal(false)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        {/* <Background> */}
        <Header title='Agendar partida' />

        <Text style={[styles.label, {
          marginLeft: 24,
          marginTop: 36,
          marginBottom: 18
        }]}>
          Categoria
        </Text>

        <CategorySelect
          hasCheckBox={true}
          setCategory={setCategory}
          categorySelected={category}
        />

        <View style={styles.form}>
          <RectButton
            onPress={handleOpenGuildsModal}
          >
            <View style={styles.select}>
              {
                guild.icon
                ? <GuildIcon />
                : <View style={styles.image}/>
              }
              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  { guild.name
                    ? guild.name
                    : 'Selecione um servidor'}
                </Text>
              </View>

              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />

            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={styles.label}>
                Dia e m??s
              </Text>

              <View style={styles.column}>
                <Smallinput maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <Smallinput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>
                Hora e minuto
              </Text>

              <View style={styles.column}>
                <Smallinput maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <Smallinput maxLength={2} />
              </View>
            </View>
          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>
              Descri????o
            </Text>

            <Text style={styles.caracteresLimit}>
              Max. 100 caracteres
            </Text>
          </View>
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
        </View>
        <View style={styles.footer}>
          <Button
            title='Agendar'
          />
        </View>
        {/* </Background> */}
      </ScrollView>

      <ModalView visible={openGuildsModal} >
        <Guilds handleGuildSelected={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  )


}

