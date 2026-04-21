import "./Loading.css";

const Loading = () => {
	//three dots loading with animation style with custom css classes
	return (
		<div className="loading-container">
			<div className="loading-dots">
				<div className="loading-dot"></div>
				<div className="loading-dot"></div>
				<div className="loading-dot"></div>
			</div>
		</div>
	);
};

export default Loading;
