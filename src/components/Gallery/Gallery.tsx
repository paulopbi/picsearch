import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useQueryTerm } from "../../context/QueryTermContext.tsx";
import type {
	IUnsplashPhotos,
	IUnsplashSearchResponse,
} from "../../interfaces/index.ts";
import { getImages, searchImages } from "../../services/api.ts";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
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
				return await searchImages(queryValue, page);
			}
			return await getImages(page);
		},
	});

	const isLastPage =
		data !== undefined && "total_pages" in data && page === data.total_pages;
	const isFirstPage = page === 1;

	return (
		<section className="container gallery-container">
			{error && <ErrorMessage message={error.message} />}
			{isLoading && <Loading />}
			<div className="gallery">
				{Array.isArray(data)
					? data?.map((props) => <PhotoCard key={props.id} {...props} />)
					: data?.results?.map((props) => (
							<PhotoCard key={props.id} {...props} />
						))}
			</div>

			{!error && !isLoading && (
				<PaginationButtons
					disableLeftButton={isFirstPage}
					disableRightButton={isLastPage}
					setPage={setPage}
				/>
			)}
		</section>
	);
};

export default Gallery;
