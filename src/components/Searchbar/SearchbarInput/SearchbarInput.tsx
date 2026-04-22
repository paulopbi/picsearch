import type { ChangeEvent } from "react";
import "./SearchbarInput.css";

interface SearchbarInputProps {
	value: string;
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchbarInput = ({ value, handleSearch }: SearchbarInputProps) => {
	return (
		<input
			placeholder="Search for a photo..."
			type="search"
			className="search-input"
			value={value}
			onChange={handleSearch}
		/>
	);
};

export default SearchbarInput;
