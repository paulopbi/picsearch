import { Search } from "lucide-react";
import { type ChangeEvent, useState } from "react";
import { useQueryTerm } from "../../context/QueryTermContext.tsx";
import useDebounce from "../../hooks/useDebounce";
import "./SearchBar.css";

const SearchBar = () => {
	const [search, setSearch] = useState("");

	const { setQueryValue } = useQueryTerm();
	const debouncedValue = useDebounce(search);

	setQueryValue(debouncedValue);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<div className="search-container">
			<form className="search-form">
				<Search className="search-icon" />
				<input
					placeholder="Search for a photo..."
					type="search"
					className="search-input"
					value={search}
					onChange={handleSearch}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
