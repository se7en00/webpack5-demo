import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const render = (Component: React.FC): void => {
    ReactDOM.render(<Component />, document.getElementById("root"))
}

render(App)
