import { IconType } from 'react-icons';
import { RiStackLine } from 'react-icons/ri';
import { FaCode } from 'react-icons/fa';

interface Card {
	icon: IconType;
	title: string;
	features: string[];
}

export const cards: Card[] = [
	{
		icon: RiStackLine,
		title: 'UI/UX Design',
		features: [
			'Landing Pages',
			'User Flow',
			'PRototyping',
			'Wireframing',
			'Mobile App Design',
		],
	},
	{
		icon: FaCode,
		title: 'Development',
		features: [
			'Frontend development',
			'Backend development',
			'Html, CSS',
			'JavaScript',
			'Python',
		],
	},
	{
		icon: FaCode,
		title: 'Development',
		features: [
			'Frontend development',
			'Backend development',
			'Html, CSS',
			'JavaScript',
			'Python',
		],
	},
	{
		icon: RiStackLine,
		title: 'UI/UX Design',
		features: [
			'Landing Pages',
			'User Flow',
			'PRototyping',
			'Wireframing',
			'Mobile App Design',
		],
	},
];
