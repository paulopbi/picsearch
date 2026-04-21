export interface IUnsplashPhotos {
	id: string;
	slug: string;
	alt_description: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
	};
	links: {
		self: string;
		html: string;
		download: string;
		download_location: string;
	};
	downloads: number;
	likes: number;
	user: {
		id: string;
		name: string;
		username: string;
		profile_image: {
			small: string;
			medium: string;
			large: string;
		};
		links: {
			self: string;
			html: string;
			photos: string;
			likes: string;
		};
	};
}

export interface IUnsplashSearchResponse {
	total: number;
	total_pages: number;
	results: IUnsplashPhotos[];
}
