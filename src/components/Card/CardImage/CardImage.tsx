import type { IUnsplashPhotos } from "../../../interfaces";
import "./CardImage.css";

interface ICardImage extends IUnsplashPhotos {}

const CardImage = ({ urls, alt_description }: ICardImage) => {
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
