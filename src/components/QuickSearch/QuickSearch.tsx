import useIsBreakpoint from "../../hooks/useIsBreakpoint";
import "./QuickSearch.css";

const buttonsContent = [
	{
		label: "Nature 🌳",
		value: "Nature",
	},
	{
		label: "Car 🚘",
		value: "Car",
	},
	{
		label: "Animals 🦄",
		value: "Animals",
	},
	{
		label: "Buildings 🏢",
		value: "Buildings",
	},
	{
		label: "Sports ⚽",
		value: "Sports",
	},
	{
		label: "People 👥",
		value: "People",
	},
];

const QuickSearch = () => {
	const { isBreakPoint } = useIsBreakpoint(800);

	const mobileButtonsAmount = isBreakPoint
		? buttonsContent.slice(0, 4)
		: buttonsContent;

	return (
		<div className="quick-search-container">
			{mobileButtonsAmount.map(({ label, value }) => (
				<button
					type="button"
					key={label}
					value={value}
					title={`Click to search for ${value}`}
					className="quick-search-button"
				>
					{label}
				</button>
			))}
		</div>
	);
};

export default QuickSearch;
