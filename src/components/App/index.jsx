import AppContent from "components/AppContent";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";


import '../../scss/index.scss'
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store";

function App() {
	return (
		<BrowserRouter>
			<ReduxProvider store={store}>
				<PersistGate persistor={persistor}>
					<AppContent/>
				</PersistGate>
			</ReduxProvider>
		</BrowserRouter>	
	);
}

export default App;
