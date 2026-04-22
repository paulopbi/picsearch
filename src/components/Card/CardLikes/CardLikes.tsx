import { Heart } from "lucide-react";
import type { IUnsplashPhotos } from "../../../interfaces";
import "./CardLikes.css";

interface ICardLikes extends IUnsplashPhotos {}

const CardLikes = ({ likes }: ICardLikes) => {
	return (
		<div className="card-header-likes" title={`Likes: ${likes}`}>
			<Heart size={18} />
			<span>{likes ?? "0"}</span>
		</div>
	);
};

export default CardLikes;
