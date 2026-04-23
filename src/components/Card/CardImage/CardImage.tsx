import type { UnsplashPhotoResponse } from "../../../interfaces";
import "./CardImage.css";

const CardImage = ({ urls, alt_description }: UnsplashPhotoResponse) => {
	return (
		<img
			className="card-image"
			src={urls.regular}
			alt={alt_description}
			loading="lazy"
		/>
	);
};

export default CardImage;
