import { NextApiRequest, NextApiResponse } from "next";
import { Continent } from "../../../constants/continent-type";
import { asia, europe, oceania, southAmerica } from "../../../constants/continents";
import { transformStringToURL } from "../../../utils/transformString";

type ListType = {
	[key: string]: Continent,
}

const list: ListType = {
	europe,
	asia,
	oceania,
	'south-america': southAmerica,
}

export const getContinent = (c: string): Continent => {
	const continent = transformStringToURL(String(c));
	return list[continent];
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const { continent: c } = req.query;
		const continent = getContinent(String(c));
		if (continent) {
			return res.status(200).json(continent);
		}
		return res.status(404);
	} else {
		return res.status(405);
	}
}

