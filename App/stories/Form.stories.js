import React from "react";
import { View, Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { BufferView } from "./decorators"

import { FieldWrapper, Form, TextInput, Switch } from "../components/Form";

const defaultTextInputProps = {
    label: "Demo",
    onChangeText: action("onChangeText")
}

storiesOf("Form/Switch",module)
    .addDecorator(BufferView)
    .add("default", () => (
        <Switch label="Agree to Terms" value/>
    ))
    .add("with error", () => (
        <Switch label="Agree to Terms" message="You must agree to the terms" messageType="error" />
    ))

    
storiesOf("Form/TextInput", module)
    .addDecorator(BufferView)
    .add("default", () => (
      <TextInput {...defaultTextInputProps} />
    ))
    .add("with placeholder", () => (
        <TextInput {...defaultTextInputProps} placeholder="Demo placeholder" />
    ))
    .add("with Value", () => (
        <TextInput {...defaultTextInputProps} value="Hello value" />
    ))
    .add("with error message", () => (
        <TextInput {...defaultTextInputProps} message="This is an error message" messageType="error" />
    ))
    .add("email", () => (
        <TextInput {...defaultTextInputProps} label="Email" value="reactnative@sb.com" keyboardType="email-address" />
    ))
    .add("password", () => (
        <TextInput {...defaultTextInputProps} label="Password" value="ReactNativeSB2020" secureTextEntry />
    ))
 



storiesOf("Form/FieldWrapper",module)
    .addDecorator(BufferView)
    .add("default",() => (
        <FieldWrapper label="Email">
            <Text>Hello Wrapper.</Text>
        </FieldWrapper>
    ))
    .add("error message", () => (
        <FieldWrapper label="Email" message="Please enter a valid email" messageType="error">
            <Text>Hello Wrapper.</Text>
        </FieldWrapper>
    ))
    .add("success message", () => (
        <FieldWrapper label="Email" message="Looks Legit!" messageType="success" >
            <Text>Hello Wrapper.</Text>
        </FieldWrapper>
    ))
    .add("multiple fields", () => (
        <React.Fragment>

            <FieldWrapper label="Email">
                <Text>Hello Wrapper.</Text>
            </FieldWrapper>

            <FieldWrapper label="Email" message="Please enter a valid email" messageType="error">
                <Text>Hello Wrapper.</Text>
            </FieldWrapper>

            <FieldWrapper label="Email" message="Looks Legit!" messageType="success" >
                <Text>Hello Wrapper.</Text>
            </FieldWrapper>
        </React.Fragment>
    ))

storiesOf("Form",module)
    .addDecorator(BufferView)
    .add("default",() => (
        <Form>
            <View style={{ flex: 1, backgroundColor:"#e6e6e6" }} />
        </Form>
    ))
    .add("with header", () => (
        <Form header="Hello.">
            <View style={{ flex: 1, backgroundColor: "#e6e6e6" }} />
        </Form>
    ))
    .add("with header and subHeader", () => (
        <Form header="Hello." subheader="Welcome Back, Enter your Details.">
            <View style={{ flex: 1, backgroundColor: "#e6e6e6" }} />
        </Form>
    ))