import "./CardContent.css";

interface ICardContent {
	children: React.ReactNode;
}

const CardContent = ({ children }: ICardContent) => {
	return <div className="card-content">{children}</div>;
};

export default CardContent;
