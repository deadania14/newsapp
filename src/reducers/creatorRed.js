const initialCreator = {
	name: 'Dea Dania',
	bio: 'JavaScript Anthusiast',
	alamat: 'Depok, Jawa Barat, Indonesia',
	socials: {
		github: {
			link: 'https://github.com/deadania14/',
			username: 'deadania14',
		},
		twitter: {
			link: 'https://twitter.com/deadania?lang=en',
			username: 'deadania',
		},
	},
};

const creatorRed = (state = initialCreator, action) => {
	return state;
};

export default creatorRed;
