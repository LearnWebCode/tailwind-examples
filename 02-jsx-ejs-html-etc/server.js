const express = require("express")
const React = require("react")
const ReactDOMServer = require("react-dom/server")
const ExampleComponent = require("./src-react/components/ExampleComponent").default

const app = express()
app.set("view engine", "ejs")
app.set("views", "./views")

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/about", (req, res) => {
  const generatedHTML = ReactDOMServer.renderToString(<ExampleComponent />)
  res.render("about", { generatedHTML })
})

app.listen(3000)
