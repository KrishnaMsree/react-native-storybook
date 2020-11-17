import React from "react";
import {View , Button, Text} from 'react-native';
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { withKnobs, object, color, number, text, date } from '@storybook/addon-knobs';

import  BenefitsPreview  from "../components/screens/BenefitsPreview";
import  OnBoarding  from "../components/screens/onBoarding";
import  RetirementOutlook  from "../components/screens/retirementOutlook";
import  Dashboard  from "../components/screens/dashboard";
import  Goals  from "../components/screens/goals";
import  PayOff  from "../components/screens/payOff";
import { BufferView } from "./decorators"

const options = {
    range: true,
    min: 20,
    max: 80,
    step: 1,
}
const optionsPie = {
    range: true,
    min: 1,
    max: 100,
    step: 1,
}
// function myDateKnob(name, defaultValue) {
//   const stringTimestamp = date(name, defaultValue);
//   return new Date(stringTimestamp);
// }
const goalsPressingProps = {
    label: "Goals Actions",
    onPress: action("Add a new Goal Pressed")
}
storiesOf('Components',module)
    // .addDecorator(BufferView)
    .addDecorator(withKnobs)
    .add('BenefitsPreview',() => (
        <BenefitsPreview 
            heading={object('Heading', {name:"Your Benefits Page"})}
            date = {object('StartDate',{startDate:'Sep 26 2020'})} 
            age= {number("Age",24,options)}
        />
    ))
    .add('OnBoarding',() => (
        <OnBoarding  color = {color('Heading BgColor','lightgrey')}/>
    ))
    .add('RetirementOutlook',() => (
        <RetirementOutlook  
            BtnText = {object('Button Text',{text: 'Add Text '})} 
            color={color('Text Color','black')}
        />
    ))
    .add('Dashboard',() => (
        <Dashboard 
            HeadText={text('Heading Text', 'Benefits Overview')}
            BtnText = {object('Button Text',{text: 'Edit'})} 
            // color={color('Button Color','')}
            onPress = {action("Pressed on Edit Button")} 
        />
    ))
    .add('Goals',() => (
        <Goals label="GoalsLabel" 
            onPress={action("Add a goal Pressed")} 
            color={color('Text Color','black')}    
        />
    ))
    .add('PayOff',() => (
        <PayOff  
            firstVal = {number("First Value",85,optionsPie)}
            secVal = {number("Second Value",15,optionsPie)}
        />
    ))

// {color("Heading Background Color",'lightgrey')}