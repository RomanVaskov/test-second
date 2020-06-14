import React from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';


export default class App extends React.Component {

    state = {
        show: true,
        error: false
    }

    componentDidCatch() {
        this.setState({ error: true })
    }

    handleChange = () => {
        this.setState((state) => {
            return {
                show: !state.show
            }
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        return (
            <div>
                <Container>
                    <Header />
                    <Button color="primary" onClick={this.handleChange}>Random char</Button>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {this.state.show ? <RandomChar /> : null}
                        </Col>
                    </Row>
                    <CharacterPage />
                </Container>
            </div>
        );
    }
};