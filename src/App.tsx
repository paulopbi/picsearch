import Gallery from "./components/Gallery/Gallery.tsx";
import Heading from "./components/Heading/Heading.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import { QueryTermProvider } from "./context/QueryTermContext.tsx";

function App() {
	return (
		<QueryTermProvider>
			<main>
				<SearchBar />
				<Heading />
				<Gallery />
			</main>
		</QueryTermProvider>
	);
}

export default App;
