import React from 'react';
import {Checkbox} from "antd";

export const myCheckbox = props => {
    return (
        <Checkbox {...props.input} type={props.type} placeholder={props.placeholder} />
    );
};