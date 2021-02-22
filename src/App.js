import React from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css'

class App extends React.Component {
  state = {
    input: "# Welcome to my React Markdown Previewer!  \n## This is a sub heading...  \n### And here's some other cool stuff:  \nYou can make text **bold**... whoa!  \nOr _italic_.  \nOr... wait for it... **_both_**  \n  \nThere's also links.  \nHere's the link to one of my other [projects](https://adyatand.github.io/Random_quote_generator/)  \nClick [here](https://www.google.com) to visit Google.  \nClick [here](https://www.youtube.com) to visit YouTube.  \nThis is how you can make links to various web pages.  \n  \n- And of course there are lists.  \n   - Some are bulleted.  \n      - With different indentation levels.  \n  \n1. And then there are numbered lists too.  \n1. Use just 1s if you want,  \n1. to make numbered lists!.  \n  \nAnd last but not least, let's not forget  \n> Block quotes!"
  }


    handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

    clearInput = () => {
      this.setState({
        input:""
      })
      document.getElementById("text").placeholder = "Enter text here...";
    }

  render() {
    return (
      <div>
          <h1>Markdown Previewer</h1>
          <div className="headings">
              <h2>Markdown Text</h2>
              <h2>Preview Text</h2>
          </div>
          <button onClick={this.clearInput.bind(this)}>Clear</button>
          <div className="container">
              <textarea autoFocus value={this.state.input} onChange={this.handleChange.bind(this)} className="inputField" id="text"></textarea>
              <ReactMarkdown source={this.state.input} className="preview" />
          </div>
      </div>

    )
  }
}

export default App

