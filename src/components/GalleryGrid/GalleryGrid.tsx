import { useQuery } from "@tanstack/react-query";
import { useQueryTerm } from "../../context/QueryTermContext.tsx";
import type {
	IUnsplashPhotos,
	IUnsplashSearchResponse,
} from "../../interfaces";
import { getData } from "../../services/api";
import Card from "../Card/Card.tsx";
import CardContent from "../Card/CardContent/CardContent.tsx";
import CardHeader from "../Card/CardHeader/CardHeader.tsx";
import CardImage from "../Card/CardImage/CardImage.tsx";
import Loading from "../Loading/Loading";
import "./GalleryGrid.css";

const GalleryGrid = () => {
	const { queryValue } = useQueryTerm();
	const apiKey = import.meta.env.VITE_API_KEY ?? "";

	const urls = {
		photos: `https://api.unsplash.com/photos?client_id=${apiKey}&per_page=15&page=1`,
		search: `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${queryValue}&per_page=15&page=1`,
	};

	const { data, isLoading, error } = useQuery<IUnsplashPhotos[]>({
		queryKey: ["photos", queryValue],
		queryFn: async () => {
			if (queryValue) {
				const response = await getData<IUnsplashSearchResponse>(urls.search);
				return response.results;
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
				{data?.map((props) => (
					<Card key={props.id}>
						<CardImage {...props} />
						<CardHeader {...props} />
						<CardContent {...props} />
					</Card>
				))}
			</div>
		</div>
	);
};

export default GalleryGrid;
