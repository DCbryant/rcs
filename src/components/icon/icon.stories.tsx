import React from "react";
import Icon from "./index";

export default {
	title: "Icon",
	component: Icon,
};

const style = {marginRight: 10};

export const Normal = () => (
	<>
		<Icon icon="search" spin style={style}></Icon>
    <Icon icon="coffee" style={style}></Icon>
	</>
);