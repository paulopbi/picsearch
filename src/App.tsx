import GalleryGrid from "./components/GalleryGrid/GalleryGrid.tsx";
import QuickSearch from "./components/QuickSearch/QuickSearch.tsx";
import SearchBar from "./components/SearchBar/SearchBar.tsx";

function App() {
	return (
		<main>
			<SearchBar />
			<QuickSearch />
			<GalleryGrid />
		</main>
	);
}

export default App;
