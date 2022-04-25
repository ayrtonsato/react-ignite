import { Continent } from "./continent-type";

export const europe: Continent = {
	title: 'Europa',
	description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
	hero: {
		src: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
		alt: 'Foto de Praga',
		credits: 'https://unsplash.com/photos/aDxmYZtYj7g',
	},
	briefInfo: {
		countries: 46,
		languages: 60,
		cities: 27,
	},
	cities: [
		{
			name: 'Londres',
			country: 'Reino Unido',
			flagImage: {
				src: '/images/flags/uk.png',
				alt: 'Bandeira do Reino Unido',
			},
			cityImage: {
				src: '/images/cards/london.webp',
				alt: 'Foto do Big Ben em Londres'
			}
		},
		{
			name: 'Paris',
			country: 'França',
			flagImage: {
				src: '/images/flags/france-flag.png',
				alt: 'Bandeira da França',
			},
			cityImage: {
				src: '/images/cards/torre-eiffel.webp',
				alt: 'Foto da Torre Eiffel em Paris'
			}
		},
		{
			name: 'Roma',
			country: 'Itália',
			flagImage: {
				src: '/images/flags/italy-flag.svg',
				alt: 'Bandeira da Itália',
			},
			cityImage: {
				src: '/images/cards/coliseu.jpg',
				alt: 'Foto do Coliseu em Roma'
			}
		},
		{
			name: 'Praga',
			country: 'República Tcheca',
			flagImage: {
				src: '/images/flags/czech-flag.png',
				alt: 'Bandeira da República Tcheca',
			},
			cityImage: {
				src: '/images/cards/praga.jpg',
				alt: 'Foto de Praga'
			}
		},
	],
};

export const asia: Continent = {
	title: 'Ásia',
	hero: {
		src: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		alt: 'Foto de Lungshan Temple, Taiwan',
		credits: 'https://unsplash.com/photos/TnUG2pWraPE',
	},
	description: "A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.",
	briefInfo: {
		countries: 51,
		languages: 2031,
		cities: 27,
	},
	cities: [
		{
			name: 'Bangalore',
			country: 'Índia',
			flagImage: {
				src: '/images/flags/india-flag.png',
				alt: 'Bandeira da Índia',
			},
			cityImage: {
				src: '/images/cards/bangalore.webp',
				alt: 'Foto de uma estrada em Bangalore'
			}
		},
		{
			name: 'Krabi',
			country: 'Tailândia',
			flagImage: {
				src: '/images/flags/thailand.svg',
				alt: 'Bandeira da Tailândia',
			},
			cityImage: {
				src: '/images/cards/krabi.jpg',
				alt: 'Foto de uma praia em Krabi'
			}
		},
		{
			name: 'Jeju',
			country: 'Coréia do Sul',
			flagImage: {
				src: '/images/flags/south-korea-flag.svg',
				alt: 'Bandeira da Coréia do Sul',
			},
			cityImage: {
				src: '/images/cards/jeju.jpg',
				alt: 'Foto de Jeju'
			}
		},
		{
			name: 'Fukuoka',
			country: 'Japão',
			flagImage: {
				src: '/images/flags/japan-flag.svg',
				alt: 'Bandeira do Japão',
			},
			cityImage: {
				src: '/images/cards/fukuoka.jpg',
				alt: 'Foto de Fukuoka'
			}
		},
	]
}

export const oceania: Continent = {
	title: 'Oceania',
	description: "A Oceania é um continente localizado a sudeste da Ásia, compreendendo um conjunto de ilhas somado à Austrália, essa última considerada como uma massa continental chamada de “Australásia”. Possui uma área total de 8.480.355 km², onde habitam aproximadamente 38 milhões de pessoas.",
	hero: {
		src: 'https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		alt: 'Foto de Sydney, Australia',
		credits: 'https://unsplash.com/photos/x_H-9suOpck',
	},
	briefInfo: {
		countries: 14,
		languages: 1323,
		cities: 3,
	},
	cities: [
		{
			name: 'Auckland',
			country: 'Nova Zelândia',
			flagImage: {
				src: '/images/flags/new-zealand-flag.svg',
				alt: 'Bandeira da Nova Zelândia',
			},
			cityImage: {
				src: '/images/cards/auckland.webp',
				alt: 'Foto de Auckland'
			}
		},
		{
			name: 'Melbourne',
			country: 'Austrália',
			flagImage: {
				src: '/images/flags/australia-flag.svg',
				alt: 'Bandeira da Austrála',
			},
			cityImage: {
				src: '/images/cards/melbourne.jpg',
				alt: 'Foto de Melbourne'
			}
		},
		{
			name: 'Sydney',
			country: 'Austrália',
			flagImage: {
				src: '/images/flags/australia-flag.svg',
				alt: 'Bandeira da Austrála',
			},
			cityImage: {
				src: '/images/cards/sydney.jpg',
				alt: 'Foto da Opera House em Sydney'
			}
		},
	]
}

export const southAmerica: Continent = {
	title: 'América do Sul',
	description: "A América do Sul é um subcontinente pertencente à América. A maior parte do seu território se encontra no hemisfério sul, além de estar na porção oeste do planeta. É banhada pelos oceanos Pacífico, a oeste, e Atlântico, a leste. Possui 12 países e um território ultramarino, a Guiana Francesa.",
	hero: {
		src: 'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
		alt: 'Foto de Rio de Janeiro, Brazil',
		credits: 'https://unsplash.com/photos/76L0Hup2Zyo',
	},
	briefInfo: {
		countries: 12,
		languages: 9,
		cities: 3,
	},
	cities: [
		{
			name: 'Buenos Aires',
			country: 'Argentina',
			flagImage: {
				src: '/images/flags/argentina-flag.svg',
				alt: 'Bandeira da Argentina',
			},
			cityImage: {
				src: '/images/cards/buenos-aires.jpg',
				alt: 'Foto de Buenos Aires'
			}
		},
		{
			name: 'Lima',
			country: 'Peru',
			flagImage: {
				src: '/images/flags/peru-flag.svg',
				alt: 'Bandeira do Peru',
			},
			cityImage: {
				src: '/images/cards/lima.jpg',
				alt: 'Foto da cidade de Lima'
			}
		},
		{
			name: 'Rio de Janeiro',
			country: 'Brasil',
			flagImage: {
				src: '/images/flags/brasil-flag.svg',
				alt: 'Bandeira do Brasil',
			},
			cityImage: {
				src: '/images/cards/rio.jpg',
				alt: 'Foto do Rio de Janeiro'
			}
		},
	]
}