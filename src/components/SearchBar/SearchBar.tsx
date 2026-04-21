import { Search } from "lucide-react";
import { useState } from "react";
import { useQueryTerm } from "../../context/QueryTermContext.tsx";
import useDebounce from "../../hooks/useDebounce";
import "./SearchBar.css";

const SearchBar = () => {
	const [search, setSearch] = useState("");

	const { setQueryValue } = useQueryTerm();
	const debouncedValue = useDebounce(search);

	setQueryValue(debouncedValue);
	return (
		<div className="search-container">
			<form className="search-form">
				<Search className="search-icon" />
				<input
					placeholder="Write something"
					type="search"
					className="search-input"
					value={search}
					onChange={({ target }) => setSearch(target.value)}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
