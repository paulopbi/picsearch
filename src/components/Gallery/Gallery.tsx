import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useQueryTerm } from "../../context/QueryTermContext.tsx";
import type {
	IUnsplashPhotos,
	IUnsplashSearchResponse,
} from "../../interfaces/index.ts";
import { API_KEY, BASE_URL, getData } from "../../services/api.ts";
import Loading from "../Loading/Loading.tsx";
import PhotoCard from "../PhotoCard/PhotoCard.tsx";
import "./Gallery.css";
import PaginationButtons from "./PaginationButtons/PaginationButtons.tsx";

const Gallery = () => {
	const [page, setPage] = useState(1);
	const { queryValue } = useQueryTerm();

	const { data, isLoading, error } = useQuery<
		IUnsplashPhotos[] | IUnsplashSearchResponse
	>({
		queryKey: ["photos", queryValue, page],
		queryFn: async () => {
			if (queryValue) {
				return await getData<IUnsplashSearchResponse>(
					`${BASE_URL}/search/photos?${API_KEY}&query=${queryValue}&per_page=18&page=${page}`,
				);
			}
			return await getData<IUnsplashPhotos[]>(
				`${BASE_URL}/photos?${API_KEY}&per_page=18&page=${page}`,
			);
		},
	});

	const isLastPage =
		data !== undefined && "total_pages" in data && page === data.total_pages;
	const isFirstPage = page === 1;

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="container">
			<div className="gallery">
				{Array.isArray(data)
					? data?.map((props) => <PhotoCard key={props.id} {...props} />)
					: data?.results?.map((props) => (
							<PhotoCard key={props.id} {...props} />
						))}
			</div>

			<PaginationButtons
				disableLeftButton={isFirstPage}
				disableRightButton={isLastPage}
				setPage={setPage}
			/>
		</div>
	);
};

export default Gallery;
