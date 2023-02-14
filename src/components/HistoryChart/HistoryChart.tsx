import React, { useRef, useEffect, useState } from 'react';
import type { ChartData, ChartArea } from 'chart.js';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
);

interface HistoryChartProps {
	dataFrom: Array<number>;
	labels: Array<number>;
}

export default function HistoryChart({
	dataFrom,
	labels,
}: HistoryChartProps) {
	const data = {
		labels: labels,
		datasets: [
			{
				type: 'line' as const,
				label: 'Dataset 1',
				borderColor: 'rgb(255, 99, 132)',
				borderWidth: 2,
				fill: false,
				data: dataFrom,
			},
		],
	};

	return (
		<Chart
			type="line"
			data={data}
		/>
	);
}
