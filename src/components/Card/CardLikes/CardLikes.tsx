import { Heart } from "lucide-react";
import type { UnsplashPhotoResponse } from "../../../interfaces";
import "./CardLikes.css";

const CardLikes = ({ likes }: UnsplashPhotoResponse) => {
	return (
		<div className="card-header-likes" title={`Likes: ${likes}`}>
			<Heart size={18} />
			<span>{likes ?? "0"}</span>
		</div>
	);
};

export default CardLikes;
