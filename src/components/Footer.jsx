import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div id="footer">
            <Card>
                <Card.Body>
                    <Card.Text>
                        Created by Sai Gongidi
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Footer;