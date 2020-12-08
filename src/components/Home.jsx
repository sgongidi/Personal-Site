import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Home.css';

const Home = () => {
    return (
        <div id="home">
            <Card>
                <Card.Body>
                    <Card.Title>
                        Welcome to my personal website!
                    </Card.Title>
                    <Card.Text>
                        This site is in progress. Full site coming soon.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;