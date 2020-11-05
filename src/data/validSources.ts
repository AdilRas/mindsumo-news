import {SourceIdentity} from '../util/NewsAPI/NewsSource';

const validSources : SourceIdentity[] = [
    {
		id:"ars-technica",
		name:"Ars Technica",
	},
	{
		id:"bbc-sport",
		name:"BBC Sport",
	},
	{
		id:"bleacher-report",
		name:"Bleacher Report",
	},
	{
		id:"buzzfeed",
		name:"Buzzfeed",
	},
	{
		id:"crypto-coins-news",
		name:"Crypto Coins News",
	},
	{
		id:"engadget",
		name:"Engadget",
	},
	{
		id:"entertainment-weekly",
		name:"Entertainment Weekly",
	},
	{
		id:"espn",
		name:"ESPN",
	},
	{
		id:"espn-cric-info",
		name:"ESPN Cric Info",
	},
	{
		id:"football-italia",
		name:"Football Italia",
	},
	{
		id:"four-four-two",
		name:"FourFourTwo",
	},
	{
		id:"fox-sports",
		name:"Fox Sports",
	},
	{
		id:"gruenderszene",
		name:"Gruenderszene",
	},
	{
		id:"hacker-news",
		name:"Hacker News",
	},
	{
		id:"ign",
		name:"IGN",
	},
	{
		id:"lequipe",
		name:"L'equipe",
	},
	{
		id:"marca",
		name:"Marca",
	},
	{
		id:"mashable",
		name:"Mashable",
	},
	{
		id:"mtv-news",
		name:"MTV News",
	},
	{
		id:"mtv-news-uk",
		name:"MTV News (UK)",
	},
	{
		id:"nfl-news",
		name:"NFL News",
	},
	{
		id:"nhl-news",
		name:"NHL News",
	},
	{
		id:"polygon",
		name:"Polygon",
	},
	{
		id:"recode",
		name:"Recode",
	},
	{
		id:"t3n",
		name:"T3n",
	},
	{
		id:"talksport",
		name:"TalkSport",
	},
	{
		id:"techcrunch",
		name:"TechCrunch",
	},
	{
		id:"techcrunch-cn",
		name:"TechCrunch (CN)",
	},
	{
		id:"techradar",
		name:"TechRadar",
	},
	{
		id:"the-lad-bible",
		name:"The Lad Bible",
	},
	{
		id:"the-next-web",
		name:"The Next Web",
	},
	{
		id:"the-sport-bible",
		name:"The Sport Bible",
	},
	{
		id:"the-verge",
		name:"The Verge",
	},
	{
		id:"wired",
		name:"Wired",
	},
	{
		id:"wired-de",
		name:"Wired.de",
    }
];

const validIds: Set<string> = new Set<string>([
    "ars-technica",
    "bbc-sport",
    "bleacher-report",
    "buzzfeed",
    "crypto-coins-news",
    "engadget",
    "entertainment-weekly",
    "espn",
    "espn-cric-info",
    "football-italia",
    "four-four-two",
    "fox-sports",
    "gruenderszene",
    "hacker-news",
    "ign",
    "lequipe",
    "marca",
    "mashable",
    "mtv-news",
    "mtv-news-uk",
    "nfl-news",
    "nhl-news",
    "polygon",
    "recode",
    "t3n",
    "talksport",
    "techcrunch",
    "techcrunch-cn",
    "techradar",
    "the-lad-bible",
    "the-next-web",
    "the-sport-bible",
    "the-verge",
    "wired",
    "wired-de",
]);

const validNames: Set<string> = new Set<string>([
    "Ars Technica",
    "BBC Sport",
    "Bleacher Report",
    "Buzzfeed",
    "Crypto Coins News",
    "Engadget",
    "Entertainment Weekly",
    "ESPN",
    "ESPN Cric Info",
    "Football Italia",
    "FourFourTwo",
    "Fox Sports",
    "Gruenderszene",
    "Hacker News",
    "IGN",
    "L'equipe",
    "Marca",
    "Mashable",
    "MTV News",
    "MTV News (UK)",
    "NFL News",
    "NHL News",
    "Polygon",
    "Recode",
    "T3n",
    "TalkSport",
    "TechCrunch",
    "TechCrunch (CN)",
    "TechRadar",
    "The Lad Bible",
    "The Next Web",
    "The Sport Bible",
    "The Verge",
    "Wired",
    "Wired.de",
]);

export {validSources, validIds, validNames};