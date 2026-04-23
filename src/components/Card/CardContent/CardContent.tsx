import "./CardContent.css";

const CardContent = ({ children }: { children: React.ReactNode }) => {
	return <div className="card-content">{children}</div>;
};

export default CardContent;
