import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Principal() {
  const { darkMode, setDarkMode } = useContext(Context);

  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>asdasd</button>
    </div>
  );
}
