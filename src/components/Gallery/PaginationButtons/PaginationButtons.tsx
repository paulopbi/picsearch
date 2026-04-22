import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import "./PaginationButtons.css";

interface IPaginationButtons {
	setPage: Dispatch<SetStateAction<number>>;
	disableLeftButton: boolean;
	disableRightButton: boolean;
}

const PaginationButtons = ({
	setPage,
	disableLeftButton,
	disableRightButton,
}: IPaginationButtons) => {
	return (
		<div className="gallery-pagination">
			<button
				type="button"
				className="gallery-pagination-button"
				onClick={() => setPage((prev) => prev - 1)}
				disabled={disableLeftButton}
			>
				<ChevronLeft size={20} /> Previous
			</button>
			<button
				type="button"
				className="gallery-pagination-button"
				onClick={() => setPage((prev) => prev + 1)}
				disabled={disableRightButton}
			>
				Next <ChevronRight size={20} />
			</button>
		</div>
	);
};

export default PaginationButtons;
