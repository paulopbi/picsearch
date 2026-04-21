import { createContext, useContext, useState } from "react";

interface QueryTermContextInterface {
	queryValue: string;
	setQueryValue: React.Dispatch<React.SetStateAction<string>>;
}

// crate context
export const QueryTermContext = createContext<QueryTermContextInterface | null>(
	null,
);

// provide the context
export const QueryTermProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [queryValue, setQueryValue] = useState<string>("");

	return (
		<QueryTermContext.Provider value={{ queryValue, setQueryValue }}>
			{children}
		</QueryTermContext.Provider>
	);
};

// hook to use the context
export const useQueryTerm = () => {
	const context = useContext(QueryTermContext);

	if (!context) {
		throw new Error("useQueryTerm must be used within a QueryTermProvider");
	}

	return context;
};
