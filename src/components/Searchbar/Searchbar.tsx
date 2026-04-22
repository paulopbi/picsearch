import { type ChangeEvent, useState } from "react";
import { useQueryTerm } from "../../context/QueryTermContext.tsx";
import useDebounce from "../../hooks/useDebounce.tsx";
import "./Searchbar.css";
import SearchbarContent from "./SearchbarContent/SearchbarContent.tsx";
import SearchbarIcon from "./SearchbarIcon/SearchbarIcon.tsx";
import SearchbarInput from "./SearchbarInput/SearchbarInput.tsx";

const Searchbar = () => {
	const [search, setSearch] = useState("");

	const { setQueryValue } = useQueryTerm();
	const debouncedValue = useDebounce(search);

	setQueryValue(debouncedValue);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<section className="search-container">
			<SearchbarContent>
				<SearchbarIcon />
				<SearchbarInput value={search} handleSearch={handleSearch} />
			</SearchbarContent>
		</section>
	);
};

export default Searchbar;
