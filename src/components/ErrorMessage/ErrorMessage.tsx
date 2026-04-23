import { TriangleAlert } from "lucide-react";
import "./ErrorMessage.css";

interface IErrorMessage {
	message?: string;
}

const ErrorMessage = ({ message = "Something went wrong." }: IErrorMessage) => {
	return (
		<div className="error-wrapper">
			<div className="error-card">
				<TriangleAlert className="error-icon" size={32} />
				<h2 className="error-title">Oops! An error occurred</h2>
				<p className="error-message">{message}</p>
			</div>
		</div>
	);
};

export default ErrorMessage;
