import GalleryGrid from "./components/GalleryGrid/GalleryGrid.tsx";
import QuickSearch from "./components/QuickSearch/QuickSearch.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import { QueryTermProvider } from "./context/QueryTermContext.tsx";

function App() {
	return (
		<QueryTermProvider>
			<main>
				<SearchBar />
				<QuickSearch />
				<GalleryGrid />
			</main>
		</QueryTermProvider>
	);
}

export default App;
