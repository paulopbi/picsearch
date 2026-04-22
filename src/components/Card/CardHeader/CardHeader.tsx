import { Heart, ImageDown } from "lucide-react";
import type { IUnsplashPhotos } from "../../../interfaces";
import "./CardHeader.css";

interface ICardHeader extends IUnsplashPhotos {}

const CardHeader = ({ likes, links }: ICardHeader) => {
	return (
		<div className="card-header">
			<div className="card-header-info" title={`Likes: ${likes}`}>
				<Heart size={18} />
				<span>{likes ?? "0"}</span>
			</div>

			<a
				href={links.download}
				target="_blank"
				rel="noopener noreferrer"
				className="card-header-download"
			>
				<ImageDown size={20} />
			</a>
		</div>
	);
};

export default CardHeader;
