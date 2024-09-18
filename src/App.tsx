import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
return (
<HashRouter>
<div>
<Routes>
<Route path="/" element={<Navigate to="Labs" />} />
<Route path="/Labs/*" element={<Labs />} />
</Routes>
</div>
</HashRouter>
);
}
