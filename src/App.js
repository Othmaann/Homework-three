import { NavLink } from "react-router-dom";
const App = () => {
    return (
      <div>
            <NavLink to="/login" className={"list-container"}> <button>Add Movie</button></NavLink>
      </div>
    )
  }

export default App;