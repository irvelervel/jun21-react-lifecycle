import { Component } from 'react'
import { Card } from 'react-bootstrap'

class MovieDetail extends Component {

    state = {
        // here I will store the data coming from the fetch
        movieDetails: null
    }

    fetchMovieData = async () => {
        // here I can do my fetch
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + this.props.selectedMovie)
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                console.log(data.Search[0])
                this.setState({
                    movieDetails: data.Search[0]
                })
            } else {
                console.log('something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }

    async componentDidMount() {
        this.fetchMovieData()
    }

    componentDidUpdate(previousProps, previousState) {
        // behaves in the same exact way as render
        // fires itself again every time there's a change in the state or in the props of this component
        console.log('componentDidUpdate happened')
        // it's aware I'm changing the movie!
        // let's fetch the data again!
        // this.fetchMovieData()
        // it works! but because in my fetchMovieData function I'm also setting the state,
        // that is as well invoking componentDidUpdate again.
        // so --> infinite loop!
        // solution -> I want to fetch the new movie when I selected a new option in the dropdown.
        // but I don't want to call fetchMovieData again when I've already performed the new fetch
        // it works, but we need a handbrake, an emergency stop!
        // you ALWAYS want to put a condition in your componentDidUpdate, otherwise -> infinite loop
        if (previousProps.selectedMovie !== this.props.selectedMovie) {
            this.fetchMovieData()
        }
    }

    render() {
        console.log('MovieDetail rendered again')
        // the render() method gets fired again everytime there's a change in its state or in its props
        return (
            <div className="mt-3">
                <p>Movie selected: {this.props.selectedMovie}</p>
                {
                    this.state.movieDetails && (
                        // I'm entering this portion of the JSX just when the fetch is completed
                        // so just when movieDetails in the state is not null anymore
                        <div>
                            <Card>
                                <Card.Img variant="top" src={this.state.movieDetails.Poster} />
                                <Card.Body>
                                    <Card.Title>{this.state.movieDetails.Year}</Card.Title>
                                    <Card.Text>
                                        {this.state.movieDetails.imdbID}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default MovieDetail