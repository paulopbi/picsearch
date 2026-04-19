import { useEffect, useState } from "react";

const useIsBreakpoint = (breakpoint: number = 640) => {
	const [isBreakPoint, setIsBreakPoint] = useState<null | boolean>(null);

	useEffect(() => {
		const handleResize = () => {
			if (window.matchMedia(`(max-width: ${breakpoint}px)`).matches) {
				setIsBreakPoint(true);
				return;
			}

			setIsBreakPoint(false);
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);

	return { isBreakPoint };
};

export default useIsBreakpoint;
