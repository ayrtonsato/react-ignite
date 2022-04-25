export type Image = {
	src: string;
	alt: string;
	credits?: string;
}

export type City = {
	name: string;
	country: string;
	flagImage: Image,
	cityImage: Image
}

export type Continent = {
	title: string,
	hero: Image,
	description: string,
	briefInfo: {
		countries: number,
		languages: number,
		cities: number,
	},
	cities: City[],
}