//styles
import "./Header.css";

//icons
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header() {
  return (
    <div className="header">
      <div className="kindaNav">
        <h1>TO DO</h1>
        <LightModeIcon />
      </div>
      <div className="add">
        <form>
          <label htmlFor="addTodo">
            <input type="text" id="addTodo" placeholder="add a new to do.." />
          </label>
        </form>
      </div>
    </div>
  );
}
