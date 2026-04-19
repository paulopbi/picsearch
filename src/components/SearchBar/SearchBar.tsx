import { Search } from "lucide-react";
import "./SearchBar.css";

const SearchBar = () => {
	return (
		<div className="search-container">
			<form className="search-form">
				<Search className="search-icon" />
				<input
					placeholder="Write something"
					type="search"
					className="search-input"
				/>
			</form>
		</div>
	);
};

export default SearchBar;
