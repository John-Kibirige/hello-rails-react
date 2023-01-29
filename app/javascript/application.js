// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import ReactDOM from "react-dom";

import App from "./components/App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)