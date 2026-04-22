import "./CardHeader.css";

const CardHeader = ({ children }: { children: React.ReactNode }) => {
	return <div className="card-header">{children}</div>;
};

export default CardHeader;
