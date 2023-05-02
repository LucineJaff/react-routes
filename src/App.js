import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { BookLayout } from "./pages/BookLayout"
import { BookRoutes } from "./pages/BookRoutes"
import { NavLink } from "react-router-dom"

function App() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink style={({ isActive }) => {
          return isActive? { color: "red" } : {}
          }}
          to="/">
            Home
          </NavLink>
        </li>
        <li><NavLink to="/books">BookList</NavLink></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/books/*" element={ <BookRoutes />}/>
        <Route path="*" element={ <NotFound />}/>
      </Routes>
    </>
  )
}

export default App
