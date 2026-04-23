import type { IUnsplashPhotos } from "../../interfaces";
import Card from "../Card/Card";
import CardContent from "../Card/CardContent/CardContent";
import CardDownload from "../Card/CardDownload/CardDownload";
import CardHeader from "../Card/CardHeader/CardHeader";
import CardImage from "../Card/CardImage/CardImage";
import CardTitle from "../Card/CardTitle/CardTitle";
import CardUser from "../Card/CardUser/CardUser";

interface IPhotoCard extends IUnsplashPhotos {}

const PhotoCard = ({ ...props }: IPhotoCard) => {
	return (
		<Card>
			<CardImage {...props} />

			<CardHeader>
				<CardDownload {...props} />
			</CardHeader>

			<CardContent>
				<CardTitle {...props} />
				<CardUser {...props} />
			</CardContent>
		</Card>
	);
};

export default PhotoCard;
