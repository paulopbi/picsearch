import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useQueryTerm } from "../../context/QueryTermContext.tsx";
import type {
	IUnsplashPhotos,
	IUnsplashSearchResponse,
} from "../../interfaces/index.ts";
import { getData } from "../../services/api.ts";
import Card from "../Card/Card.tsx";
import CardContent from "../Card/CardContent/CardContent.tsx";
import CardHeader from "../Card/CardHeader/CardHeader.tsx";
import CardImage from "../Card/CardImage/CardImage.tsx";
import Loading from "../Loading/Loading.tsx";
import "./Gallery.css";

const Gallery = () => {
	const [page, setPage] = useState(1);

	const { queryValue } = useQueryTerm();
	const apiKey = import.meta.env.VITE_API_KEY ?? "";
	const urls = {
		photos: `https://api.unsplash.com/photos?client_id=${apiKey}&per_page=18&page=${page}`,
		search: `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${queryValue}&per_page=18&page=${page}`,
	};

	const { data, isLoading, error } = useQuery<
		IUnsplashPhotos[] | IUnsplashSearchResponse
	>({
		queryKey: ["photos", queryValue, page],
		queryFn: async () => {
			if (queryValue) {
				const response = await getData<IUnsplashSearchResponse>(urls.search);
				return response;
			}
			return await getData<IUnsplashPhotos[]>(urls.photos);
		},
	});

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="container">
			<div className="gallery">
				{"results" in data
					? data.results.map((props) => (
							<Card key={props.id}>
								<CardImage {...props} />
								<CardHeader {...props} />
								<CardContent {...props} />
							</Card>
						))
					: data.map((props) => (
							<Card key={props.id}>
								<CardImage {...props} />
								<CardHeader {...props} />
								<CardContent {...props} />
							</Card>
						))}
			</div>

			<div className="gallery-pagination">
				<button
					type="button"
					className="gallery-pagination-button"
					onClick={() => setPage((prev) => prev - 1)}
					disabled={page === 1}
				>
					<ChevronLeft size={20} /> Previous
				</button>
				<button
					type="button"
					className="gallery-pagination-button"
					onClick={() => setPage((prev) => prev + 1)}
					disabled={"total_pages" in data && page === data.total_pages}
				>
					Next <ChevronRight size={20} />
				</button>
			</div>
		</div>
	);
};

export default Gallery;
