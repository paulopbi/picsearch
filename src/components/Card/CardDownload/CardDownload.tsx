import { ImageDown } from "lucide-react";
import type { IUnsplashPhotos } from "../../../interfaces";
import "./CardDownload.css";

interface ICardDownload extends IUnsplashPhotos {}

const CardDownload = ({ links }: ICardDownload) => {
	return (
		<a
			href={links.download}
			target="_blank"
			rel="noopener noreferrer"
			className="card-header-download"
		>
			<ImageDown size={20} />
		</a>
	);
};

export default CardDownload;
