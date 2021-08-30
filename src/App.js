import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import MovieDetail from './components/MovieDetail'

// the goal for today is to work with lifecycle methods!
// all the lifecycle methods in a React Components just work in a Class

// constructor
// componentDidMount
// render
// componentDidUpdate
// componentWillUnmount
// all of these just work on a Class Component

class App extends Component {
  // constructor(props) {
  // what is this??
  // it's the FIRST method fired in a react component
  // most of the constructor duties in a react component nowadays are IMPLICIT
  // super(props)
  // super() invokes the constructor method of Component
  // console.log("I'm the constructor method")
  // nowadays, the constructor method is pretty much useless
  // in the early days, you NEEDED a constructor, for mainly two things:
  // 1) is for declaring the state
  // this.state = {
  // setting the properties here...
  // }
  // 2) for binding event listeners to the 'this' object
  // this.logoClick = this.logoClick.bind(this)
  // }

  state = {
    // initially, for declaring the state object you needed a constructor!
    movieTitle: 'Batman Begins',
  }

  componentDidMount() {
    // happens after the mounting of the component
    console.log("I'm the componentDidMount method")
    // it's supposed to launch your expensive operations
    // 90% of the times you'll use it for doing fetches
    // it will fire ALWAYS JUST ONCE for the entire lifetime of this component
    // you can rely on this for executing operations JUST ONCE
    // i.e, setting the state here is perfectly legit
    // this is the perfect place for a fetch and then a setState
  }

  logoClick = () => {
    // an arrow function doesn't have its own scope!
    // it will inherit the nearest outside one
    console.log(this)
  }

  render() {
    // render() is a lifecycle method
    // it's the method in charge of returning the JSX out of your class component
    // render() it's fired multiple times during a component's lifecycle
    // render() gets fired every time there's a change in the STATE or in the PROPS of this component
    // it keeps in sync your component with its state (if there is one) or the props it's receiving
    console.log("I'm the render method")

    return (
      <div className="App mt-3">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h2>MOVIE CHOOSER</h2>
              <Form>
                <Form.Group>
                  <Form.Label>Choose a movie!</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.movieTitle}
                    onChange={(e) => {
                      this.setState({
                        movieTitle: e.target.value,
                      })
                    }}
                  >
                    <option>Batman Begins</option>
                    <option>Man of Steel</option>
                    <option>Wonder Woman</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <MovieDetail selectedMovie={this.state.movieTitle} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
