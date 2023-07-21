import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/layout"
import Home from "./pages/home"
import Launch from "./pages/launch"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="launch" element={<Launch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
