import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Enter from "./components/Enter"
import Quiz from "./components/Quiz"
import Footer from "./components/Footer"
import Win from "./components/Win"
import Lose from "./components/Lose"

function App() {
  return (
    <Router>
      <div className="container">
        <div className="content">
          <Header />
          <Routes>
            <Route path="/" element={<Enter />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/lose" element={<Lose />} />
            <Route path="/win" element={<Win />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
