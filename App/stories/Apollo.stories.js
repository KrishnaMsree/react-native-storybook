import React from "react";
import {View , Button, Text} from 'react-native';
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs, object, color, number } from '@storybook/addon-knobs';

import  App  from "../components/App";
import { BufferView } from "./decorators"

storiesOf('Apollo UI',module)
    // .addDecorator(BufferView)
    .addDecorator(withKnobs)
    .add('Index',() => (
        <App/>
    ))
    