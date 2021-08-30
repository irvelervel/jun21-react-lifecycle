import { Component } from 'react'

class MovieDetail extends Component {

    state = {
        // here I will store the data coming from the fetch
    }

    async componentDidMount() {
        // here I can do my fetch
        try {
            let response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=" + this.props.selectedMovie)
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                console.log(data.Search[0])
            }
        } catch (error) {

        }
    }

    render() {
        console.log('MovieDetail rendered again')
        // the render() method gets fired again everytime there's a change in its state or in its props
        return (
            <p>Movie selected: {this.props.selectedMovie}</p>
        )
    }
}

export default MovieDetail