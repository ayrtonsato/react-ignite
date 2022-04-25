import type { NextApiRequest, NextApiResponse } from 'next'

const continents = [{
	image: {
		src: '/images/carousel/europe.png',
		alt: 'foto de algum país da Europa'
	},
	continent: {
		title: 'Europa',
		subtitle: 'O continente mais antigo',
	},
	link: "/continents/europe",
}, {
	image: {
		src: '/images/carousel/asia.jpg',
		alt: 'foto de algum país da Ásia'
	},
	continent: {
		title: 'Ásia',
		subtitle: 'O maior continente',
	},
	link: "/continents/asia",
}, {
	image: {
		src: '/images/carousel/opera-house.jpg',
		alt: 'Foto da Opera House em Sydney/Austrália'
	},
	continent: {
		title: 'Oceania',
		subtitle: 'O menor continente do mundo',
	},
	link: "/continents/oceania",
}, {
	image: {
		src: '/images/carousel/cristo-redentor.jpg',
		alt: 'Foto do Cristo Redentor no Rio de Janeiro/Brasil'
	},
	continent: {
		title: 'América do Sul',
		subtitle: 'O menor continente do mundo',
	},
	link: "/continents/south-america",
}];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json(continents);
	} else {
		res.status(405);
	}
}