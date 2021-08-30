import { Form } from 'react-bootstrap'

const MovieDropdown = ({ movieTitle, setMovie }) => (
    <Form>
        <Form.Group>
            <Form.Label>Choose a movie!</Form.Label>
            <Form.Control
                as="select"
                value={movieTitle}
                onChange={(e) => {
                    setMovie(e.target.value)
                }}
            >
                <option>Batman Begins</option>
                <option>Man of Steel</option>
                <option>Wonder Woman</option>
            </Form.Control>
        </Form.Group>
    </Form>
)

export default MovieDropdown