class Animal {
  constructor(name) {
    this.name = name
  }
  hello() {

  }
}

//Above is the same as below (Below is old way)
function App(name) {
  this.name = name  
}

App.prototype.hello = function() {

}


const app = new App("jeffrey") // { name: "jeffrey" }

app.hello()



// react components

class Button extends Component {
  // props = {text: "click me!"}
  render() {
    // const text = this.props.text
    // const style = this.props.style
    const { text, style } = this.props
    return <button style={style}>{text}</button>

  }
}

//above same as below (bottom can replace above)

function Button({ text, style }) {
  return <button style={style}>{text}</button>
}


export default Button