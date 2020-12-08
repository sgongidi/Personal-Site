import React from 'react';
import { Card } from 'react-bootstrap';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div id="footer">
            <Card>
                <Card.Body>
                    <Card.Text>
                        Created by Sai Gongidi. Copyright &copy; 2020
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Footer;