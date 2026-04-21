import { useQuery } from "@tanstack/react-query";
import { Heart, ImageDown } from "lucide-react";
import { useQueryTerm } from "../../context/QueryTermContext.tsx";
import type {
	IUnsplashRandomPhotos,
	IUnsplashSearchResponse,
} from "../../interfaces";
import { getData } from "../../services/api";
import Loading from "../Loading/Loading";
import "./GalleryGrid.css";

const GalleryGrid = () => {
	const { queryValue } = useQueryTerm();
	const apiKey = import.meta.env.VITE_API_KEY ?? "";

	const urls = {
		random: `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=11`,
		search: `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${queryValue}&per_page=11`,
	};

	const { data, isLoading, error } = useQuery<IUnsplashRandomPhotos[]>({
		queryKey: ["photos", queryValue],
		queryFn: async () => {
			if (queryValue) {
				const response = await getData<IUnsplashSearchResponse>(urls.search);
				return response.results;
			}
			return await getData<IUnsplashRandomPhotos[]>(urls.random);
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
			{/* grid container */}
			<div className="gallery">
				{data?.map(({ id, urls, alt_description, likes, links, user }) => (
					<div key={id} className="gallery-card">
						{/* background image */}
						<img
							className="gallery-card-image"
							src={urls.regular}
							alt={alt_description}
							loading="lazy"
						/>

						{/* top */}
						<div className="gallery-card-top">
							<div className="gallery-card-info" title={`Likes: ${likes}`}>
								<Heart size={18} />
								<span>{likes ?? "0"}</span>
							</div>
							<a
								href={links.download}
								target="_blank"
								rel="noopener noreferrer"
								className="gallery-card-download"
							>
								<ImageDown size={20} />
							</a>
						</div>

						{/* content */}
						<div className="gallery-card-content">
							<h2 className="gallery-card-title">{alt_description}</h2>

							{/* user */}
							<a
								href={user.links.html}
								target="_blank"
								rel="noopener noreferrer"
								className="gallery-card-user"
							>
								<img src={user.profile_image.medium} alt={user.name} />
								<span>{user.name}</span>
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GalleryGrid;
