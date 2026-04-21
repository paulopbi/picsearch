import { useQuery } from "@tanstack/react-query";
import { DownloadIcon, ImageDown } from "lucide-react";
import type { IUnsplashAPI } from "../../interfaces";
import { getData } from "../../services/api";
import "./GalleryGrid.css";

const GalleryGrid = () => {
	const apiKey = import.meta.env.VITE_API_KEY ?? "";
	const randomImageUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=11`;

	const { data, isLoading, error } = useQuery({
		queryKey: ["random"],
		queryFn: () => getData<IUnsplashAPI[]>(randomImageUrl),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div className="container">
			{/* grid container */}
			<div className="gallery">
				{data?.map(({ id, urls, alt_description, downloads, links, user }) => (
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
							<div
								className="gallery-card-info"
								title={`Downloads: ${downloads}`}
							>
								<DownloadIcon size={18} />
								<span>{downloads}</span>
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
