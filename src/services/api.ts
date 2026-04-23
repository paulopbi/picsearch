export const API_KEY = import.meta.env.VITE_API_KEY ?? "";
export const BASE_URL =
	import.meta.env.VITE_BASE_URL ?? "https://api.unsplash.com";

export const getData = async <T>(url: string) => {
	const req = await fetch(url);

	if (!req.ok) {
		throw new Error("Failed to fetch images");
	}

	const data = req.json() as Promise<T>;

	return data;
};
