import { PositionType, ChartColor, Chart, ChartData, PointStyle } from '../core';

declare module "./chart.js" {
  interface ChartOptions {
    legend?: ChartLegendOptions;
  }
}

export interface ChartLegendOptions {
	align?: "center" | "end" | "start";
	display?: boolean;
	position?: PositionType;
	fullWidth?: boolean;
	onClick?(event: MouseEvent, legendItem: ChartLegendLabelItem): void;
	onHover?(event: MouseEvent, legendItem: ChartLegendLabelItem): void;
	onLeave?(event: MouseEvent, legendItem: ChartLegendLabelItem): void;
	labels?: ChartLegendLabelOptions;
	reverse?: boolean;
}

export interface ChartLegendLabelOptions {
	boxWidth?: number;
	fontSize?: number;
	fontStyle?: string;
	fontColor?: ChartColor;
	fontFamily?: string;
	padding?: number;
	generateLabels?(chart: Chart): ChartLegendLabelItem[];
	filter?(legendItem: ChartLegendLabelItem, data: ChartData): any;
	usePointStyle?: boolean;
}

interface ChartLegendLabelItem extends ChartLegendItem {
	datasetIndex?: number;
}

interface ChartLegendItem {
	text?: string;
	fillStyle?: string;
	hidden?: boolean;
	index?: number;
	lineCap?: "butt" | "round" | "square";
	lineDash?: number[];
	lineDashOffset?: number;
	lineJoin?: "bevel" | "round" | "miter";
	lineWidth?: number;
	strokeStyle?: string;
  pointStyle?: PointStyle;
}
