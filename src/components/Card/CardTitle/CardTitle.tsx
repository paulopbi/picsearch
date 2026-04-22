import type { IUnsplashPhotos } from "../../../interfaces";
import "./CardTitle.css";

interface ICardTitle extends IUnsplashPhotos {}

const CardTitle = ({ alt_description }: ICardTitle) => {
	return <h2 className="card-title">{alt_description}</h2>;
};

export default CardTitle;
