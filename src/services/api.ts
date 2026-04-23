import type {
	UnsplashPhotoResponse,
	UnsplashSearchResponse,
} from "../interfaces";

export const API_KEY = import.meta.env.VITE_API_KEY ?? "";
export const BASE_URL =
	import.meta.env.VITE_BASE_URL ?? "https://api.unsplash.com";

const headersConfig = {
	Authorization: `Client-ID ${API_KEY}`,
	"Accept-Version": "v1",
};

export const searchImages = async (query: string, page: number) => {
	const URL = `${BASE_URL}/search/photos?query=${query}&per_page=20&page=${page}`;
	const response = await fetch(URL, {
		headers: headersConfig,
	});

	if (!response.ok) {
		throw new Error("Failed to search image, try again later.");
	}

	const data = response.json() as Promise<UnsplashSearchResponse>;

	return data;
};

export const getImages = async (page: number) => {
	const URL = `${BASE_URL}/photos?page=${page}&per_page=20`;

	const response = await fetch(URL, {
		headers: headersConfig,
	});

	if (!response.ok) {
		throw new Error("Failed to load images, try again later.");
	}

	const data = response.json() as Promise<UnsplashPhotoResponse[]>;

	return data;
};
