import { useOutletContext } from "react-router-dom"

export function BookList() {
  const obj = useOutletContext()
  return <h1>Book List</h1>
}
