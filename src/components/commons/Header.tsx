import { useNavigate } from "react-router"


export const Header = () => {

  const navigate = useNavigate();

  const redirect = (path: string): void => {
    navigate(path)
  }

  return (
    <div className="Header">
      <nav className="Header_navbar">
        <ul>
          <li
            id="home"
            onClick={() => redirect("/")}
          >
            <code>{"<"}Home{"/>"}</code>
          </li>
          <li
            id="products"
            onClick={() => redirect("products")}
          >
            <code>{"<"}Products{"/>"}</code>
          </li>
          <li
            id="about"
            onClick={() => redirect("about")}
          >
            <code>{"<"}About{"/>"}</code>
          </li>
        </ul>
      </nav>
    </div>
  )
}