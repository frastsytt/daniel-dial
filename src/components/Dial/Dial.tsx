import React, { useEffect, useState } from 'react';
import Dialogue from '../DialogueBox/DialogueBox';
import { genRandomNum } from '../Helpers/Helpers';
import GaugeChart from 'react-gauge-chart';
import HistoryChart from '../HistoryChart/HistoryChart';
export default function Dial() {
	const [something, setSomething] = useState<number>(0);
	const [arrayNumber, setArrayNumber] = useState<Array<number>>([]);
	const [rollIndex, setRollIndex] = useState<Array<number>>([]);

	useEffect(() => {
		const interval = setInterval(() => {
			const number: number = genRandomNum();
			setSomething(number);
			return null;
		}, 3000);
	}, []);

	useEffect(() => {
		// Append and/or slice the data set numbers
		const constructNumberArray = (inputNumber: number) => {
			if (arrayNumber.length < 10) {
				setArrayNumber((arrayNumber) => [
					...arrayNumber,
					inputNumber,
				]);
				if (rollIndex.length > 0)
					setRollIndex((rollIndex) => [
						...rollIndex,
						rollIndex[rollIndex.length - 1] + 1,
					]);
				else {
					setRollIndex((rollIndex) => [...rollIndex, 1]);
				}
			} else {
				setArrayNumber((arrayNumber) => [
					...arrayNumber.slice(1),
					inputNumber,
				]);
				setRollIndex((rollIndex) => [
					...rollIndex.slice(1),
					rollIndex[rollIndex.length - 1] + 1,
				]);
			}
		};
		constructNumberArray(something);
	}, [something]);
	// ignore ESLint on something, it works fine
	const tirednessScale = [
		'Fully Rested: He feels fully energized and ready to take on the day.',
		"Slightly Tired: He feels a little fatigued, but it's not affecting his performance.",
		'Somewhat Tired: He feels tired and his energy level is lower than normal, but he can still focus on his tasks.',
		"Moderately Tired: He feels noticeably tired, and it's starting to affect his ability to concentrate.",
		"Very Tired: He feels exhausted, and he're struggling to stay alert and focused.",
		"Completely Worn Out: He feels extremely tired, and he're having difficulty keeping his eyes open.",
		'Utterly Drained: He feels completely drained of energy, and every movement feels like a chore.',
		"Almost Unable to Function: He feels barely able to function, and he're struggling to complete even the simplest tasks.",
		"Completely Incapacitated: He's so tired that he can barely move or think, and he need to rest immediately.",
		'Exhausted to the Point of Collapse: He feels completely overwhelmed and on the brink of collapse, and he need urgent rest and recuperation.',
	];

	return (
		<>
			<div
				style={{
					display: 'flex',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<GaugeChart
						nrOfLevels={10}
						percent={something / 10 + 0.05}
						animate={true}
						animDelay={0}
						animateDuration={1500}
						hideText={true}
					/>
					<Dialogue displayValue={tirednessScale[something]} />
				</div>
				<div style={{ maxWidth: '400px' }}>
					<HistoryChart
						dataFrom={arrayNumber}
						labels={rollIndex}
					/>
				</div>
			</div>
		</>
	);
}
