import React, { useState } from 'react';
import Modal from './modal';
import Button from '../Button';

export default {
	title: 'Modal ',
	component: { Modal },
};

export const Normal = () => {
	const [visible, setVisible] = useState(false);
	const onOk = () => {
		setVisible(false);
	}
	const onCancel = () => {
		setVisible(false);
	}
	return (
		<>
			<Modal 
				visible={visible} 
				onOk={onOk} 
				onCancel={onCancel} 
				title="标题" 
				maskClosable={true}
				afterClose={() => console.log('afterClose')}
			>
				<div>test</div>
			</Modal>
			<Button
				onClick={() => {
					setVisible(true);
				}}
			>
				展开
			</Button>
		</>
	)
}