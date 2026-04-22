import type { IUnsplashPhotos } from "../../../interfaces";
import "./CardContent.css";

interface ICardContent extends IUnsplashPhotos {}

const CardContent = ({ alt_description, user }: ICardContent) => {
	return (
		<div className="card-content">
			<h2 className="card-title">{alt_description}</h2>
			<a
				href={user.links.html}
				target="_blank"
				rel="noopener noreferrer"
				className="card-user"
			>
				<img src={user.profile_image.medium} alt={user.name} />
				<span>{user.name}</span>
			</a>
		</div>
	);
};

export default CardContent;
