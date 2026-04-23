import type { UnsplashPhotoResponse } from "../../../interfaces";
import "./CardTitle.css";

const CardTitle = ({ alt_description }: UnsplashPhotoResponse) => {
	return <h2 className="card-title">{alt_description ?? "No description"}</h2>;
};

export default CardTitle;
