import React from "react";
import Button from "./index";

export default {
	title: "Button",
	component: Button,
};

const style = {marginRight: 10};

export const Disabled = () => (
	<>
		<Button disabled>disabled</Button>
	</>
);

export const Size = () => (
	<>
		<Button size='small' style={style}>small</Button>
		<Button size-='medium' style={style}>medium</Button>
		<Button size='large' style={style}>large</Button>
	</>
);

export const BtnType = () => {
	return (
		<>
			<Button btnType='primary' style={style}>primary</Button>
			<Button btnType='danger' style={style}>danger</Button>
			<Button btnType='secondary' style={style}>secondary</Button>
			<Button btnType='success' style={style}>success</Button>
			<Button btnType='info' style={style}>info</Button>
			<Button btnType='light' style={style}>light</Button>
			<Button btnType='warning' style={style}>warning</Button>
			<Button btnType='dark' style={style}>dark</Button>
			<Button btnType='link' style={style}>link</Button>
		</>
	)
};
