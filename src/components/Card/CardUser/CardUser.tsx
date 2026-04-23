import type { UnsplashPhotoResponse } from "../../../interfaces";
import "./CardUser.css";

const CardUser = ({ user }: UnsplashPhotoResponse) => {
	return (
		<a
			href={user.links.html}
			target="_blank"
			rel="noopener noreferrer"
			className="card-user"
		>
			<img src={user.profile_image.medium} alt={user.name} />
			<span>{user.name}</span>
		</a>
	);
};

export default CardUser;
