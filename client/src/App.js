import "./style/App.css";
import RoutineTracker from "./pages/RoutineTracker";
import { Route, Routes } from "react-router-dom";
import CreateRoutinePage from "./pages/CreateRoutinePage";
import EditRoutinePage from "./pages/EditRoutinePage";
import SingleEditPage from "./pages/SingleEditPage";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/add-task" element={<CreateRoutinePage />} />
				<Route path="/edit" element={<EditRoutinePage />} />
				<Route path="/edit/:name" element={<SingleEditPage />} />
				<Route path="/" element={<RoutineTracker />} />
			</Routes>
		</div>
	);
}

export default App;
