import React from 'react';
import {Input} from "antd";

export const myInput = props => {
    return (
        <Input {...props.input} type={props.type} placeholder={props.placeholder} />
    );
};