import { IconType } from 'react-icons';
import { DiStreamline } from "react-icons/di";
import { FaCode } from 'react-icons/fa';
import { RiRobot2Line } from "react-icons/ri";
import { IoIosCloudOutline } from "react-icons/io";

interface Card {
	icon: IconType;
	title: string;
	features: string[];
}

export const cards: Card[] = [
	{
		icon: FaCode,
		title: 'Full Stack Development',
		features: [
			'Front End: React, TypeScript',
			'Back End: Java, Python',
			'API Development',
			'Unit Testing',
		],
	},
	{
		icon: RiRobot2Line,
		title: 'AI Engineering',
		features: [
			'Azure OpenAI & Amazon Bedrock',
			'LangChain & Haystack',
			'Advanced Prompt Engineering',
			'Hallucination Handling',
		],
	},
	{
		icon: IoIosCloudOutline,
		title: 'Cloud Architecture',
		features: [
			'AWS & Azure Services',
			'CI/CD with Jenkins',
			'Microservice Architecture',
			'Containerization with Docker',
		],
	},
	{
		icon: DiStreamline,
		title: 'Data Engineering',
		features: [
			'SQL: PostgreSQL & MySQL',
			'NoSQL: MongoDB & Azure Storage',
			'Vector Databases',
			'AWS S3 & DynamoDB',
		],
	},
];
