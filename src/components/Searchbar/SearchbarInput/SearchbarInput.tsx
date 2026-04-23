import "./SearchbarInput.css";

const SearchbarInput = ({
	...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			placeholder="Search for a photo..."
			type="search"
			className="search-input"
			title="Write something and the content will be filtered automatically"
			autoComplete="off"
			{...props}
		/>
	);
};

export default SearchbarInput;
