const initialCreator = {
	name: 'Dea Dania',
	bio: 'JavaScript Anthusiast',
	alamat: 'Depok, Jawa Barat, Indonesia',
	socials: {
		github: {
			link: '',
			username: 'deadania14',
		},
		twitter: {
			link: '',
			username: 'deadania',
		},
	},
};

const creatorRed = (state = initialCreator, action) => {
	return state;
};

export default creatorRed;
