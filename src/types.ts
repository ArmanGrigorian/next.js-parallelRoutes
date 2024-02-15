export interface I_state {
	isLoggedIn: boolean;
}

type T_hair = {
	color: string;
	type: string;
};

type T_coordinates = {
	lat: number;
	lng: number;
};

type T_address = {
	address: string;
	city: string;
	coordinates: T_coordinates;
	postalCode: string;
	state: string;
};

type T_bank = {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
};

type T_company = {
	address: T_address;
	department: string;
	name: string;
	title: string;
};

type T_crypto = {
	coin: string;
	wallet: string;
	network: string;
};

type T_user = {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: T_hair;
	domain: string;
	ip: string;
	address: T_address;
	macAddress: string;
	university: string;
	bank: T_bank;
	company: T_company;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: T_crypto;
};

type T_users = T_user[];

export type T_usersReq = {
	users: T_users;
	total: number;
	skip: number;
	limit: number;
};

type T_post = {
	id: number;
	title: string;
	body: string;
	userId: number;
	tags: string[];
	reactions: number;
};

type T_posts = T_post[];

export type T_postsReq = {
	posts: T_posts;
	total: number;
	skip: number;
	limit: number;
};
