
import React from 'react';
import Meta from '../common/Meta';
import { Jumbotron, Container } from 'react-bootstrap'

const Home = () => {
    return (
        <div>
            <Meta title='Welcome' />
            <Jumbotron fluid>
                <Container>
                    <h1>Demo web app</h1>
                    <p>
                      Thsi is starter page.
                    </p>
                </Container>
            </Jumbotron>
            <p1>This is home paragrap</p1>

        </div>
    );
};

export default Home;