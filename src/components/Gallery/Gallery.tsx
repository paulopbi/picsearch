import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useQueryTerm } from "../../context/QueryTermContext.tsx";
import type {
	IUnsplashPhotos,
	IUnsplashSearchResponse,
} from "../../interfaces/index.ts";
import { getData } from "../../services/api.ts";
import Card from "../Card/Card.tsx";
import CardContent from "../Card/CardContent/CardContent.tsx";
import CardDownload from "../Card/CardDownload/CardDownload.tsx";
import CardHeader from "../Card/CardHeader/CardHeader.tsx";
import CardImage from "../Card/CardImage/CardImage.tsx";
import CardTitle from "../Card/CardTitle/CardTitle.tsx";
import CardUser from "../Card/CardUser/CardUser.tsx";
import Loading from "../Loading/Loading.tsx";
import "./Gallery.css";
import PaginationButtons from "./PaginationButtons/PaginationButtons.tsx";

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
