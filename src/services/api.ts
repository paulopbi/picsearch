export const getData = async <T>(url: string) => {
	const req = await fetch(url);

	if (!req.ok) {
		throw new Error("Failed to fetch images");
	}

	const data = req.json() as Promise<T>;

	return data;
};
