import React from 'react';
import Meta from '../common/Meta';
import { Jumbotron, Container } from 'react-bootstrap'

const Domain = () => {
    return (
        <div>
            <Meta title='Domain regaistration' />
            <Jumbotron fluid>
                <Container>
                    <h1>Domain Regsitration</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
            <p1>This is  paragrap</p1>

        </div>
    );
};

export default Domain;