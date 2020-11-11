import * as React from 'react';
import { Feather } from '@expo/vector-icons';

//Styling
import colors from '../styles/colors';

export default function BottomTabIcon(props) {
    return (
      <Feather
        name={props.name}
        size={30}
        color={props.focused ? colors.lightBlue : colors.grey}
      />
    );
  }