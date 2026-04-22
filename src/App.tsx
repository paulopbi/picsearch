import Gallery from "./components/Gallery/Gallery.tsx";
import Heading from "./components/Heading/Heading.tsx";
import Searchbar from "./components/Searchbar/Searchbar.tsx";
import { QueryTermProvider } from "./context/QueryTermContext.tsx";

function App() {
	return (
		<main>
			<QueryTermProvider>
				<Searchbar />
				<Heading />
				<Gallery />
			</QueryTermProvider>
		</main>
	);
}

export default App;
