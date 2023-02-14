import React from 'react';

export default function Dialogue(props: { displayValue: string }) {
	return (
		<p
			style={{
				margin: 0,
				padding: '10px',
				maxWidth: '250px',
				height: '150px',
				color: '#FEFCFB',
				borderRadius: 5,
				textAlign: 'center',
				backgroundColor: '#034078'
			}}
		>
			Daniels Tiredness Level is <b>{props.displayValue}</b>
		</p>
	);
}
