export interface UnsplashPhotoUrls {
	raw: string;
	full: string;
	regular: string;
	small: string;
	thumb: string;
}

export interface UnsplashPhotoLinks {
	self: string;
	html: string;
	download: string;
	download_location: string;
}

export interface UnsplashUserLinks {
	self: string;
	html: string;
	photos: string;
	likes: string;
}

export interface UnsplashUserProfileImage {
	small: string;
	medium: string;
	large: string;
}

export interface UnsplashUser {
	id: string;
	name: string;
	username: string;
	profile_image: UnsplashUserProfileImage;
	links: UnsplashUserLinks;
}

export interface UnsplashPhotoResponse {
	id: string;
	slug: string;
	alt_description: string;
	urls: UnsplashPhotoUrls;
	links: UnsplashPhotoLinks;
	downloads: number;
	likes: number;
	user: UnsplashUser;
}

export interface UnsplashSearchResponse {
	total: number;
	total_pages: number;
	results: UnsplashPhotoResponse[];
}
