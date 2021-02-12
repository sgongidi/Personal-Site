import React, { Fragment } from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
    // margin-left: 2vw;
`;

const Subtitle = styled(Card.Subtitle)`
    margin-top: 2vh;
    margin-bottom: 1vh;
`;

const Text = styled(Card.Text)`
    margin-left: 3vw;
`;

const StyledRow = styled(Row)`
    width: 50vw;
`;

const Experience = () => {
    return (
        <Fragment>
            <Card.Title>Experience</Card.Title>
            <StyledContainer>
                <Row>
                    <StyledRow>
                        <Col>
                            <Subtitle>UNC Summer of Code 2020</Subtitle>
                        </Col>
                        <Col>
                            <Subtitle>June 2020 - August 2020</Subtitle>
                        </Col>
                    </StyledRow>
                    <Row>
                        <Text className="justify-content-center">
                            <strong>Full Stack Web Developer</strong>
                            <br />
                            <Container>
                                The UNC Computer Science Department created the UNC Summer of Code 
                                2020 program to provide a remote internship-like experience for students 
                                who have experienced difficulty securing a summer internship as a result 
                                of the COVID-19 pandemic. Worked remotely with a small team of student 
                                developers, software engineer mentors, and the UNC CS Department as clients.
                                Used Agile development methods to create the UNC CS Resumé Database website within 
                                the 6 week program length, ending with a beta test demo, and launching at the 
                                start of the school year with over 200 student sign-ups in the first week.
                            </Container>
                        </Text>
                    </Row>
                </Row>
                <Row>
                    <StyledRow>
                        <Col>
                            <Subtitle>Web Dev Carolina</Subtitle>
                        </Col>
                        <Col>
                            <Subtitle>August 2020 - Present</Subtitle>
                        </Col>
                    </StyledRow>
                    <Row>
                        <Text>
                            <strong>Project Leader</strong>
                            <br />
                            <Container>
                                Creating websites for local businesses and organizations. Leading weekly remote team meetings. Communicating requirements from client and 
                                delegating tasks to developers.
                            </Container>
                        </Text>
                    </Row>
                </Row>
            </StyledContainer>
        </Fragment>
    );
}

export default Experience;