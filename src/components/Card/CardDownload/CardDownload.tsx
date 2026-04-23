import { ImageDown } from "lucide-react";
import type { UnsplashPhotoResponse } from "../../../interfaces";
import "./CardDownload.css";

const CardDownload = ({ links }: UnsplashPhotoResponse) => {
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
