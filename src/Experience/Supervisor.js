import React from 'react'
import { Card, Container, Icon, Image, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class FacilitiesManager extends React.Component {
  render() {
    const ContainerStyle = {
      marginTop: '128px',
      marginBottom: '38vh',
    }
    return (
        <div>
          <style>{'body { background-color: lightgrey }'}</style>
          <Container style={ContainerStyle}>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='/images/logo.svg'/>
                <Card.Header>
                  Production Supervisor
                  <h4><br/>Reynolds Industry Inc.</h4>
                </Card.Header>
                <Card.Meta>1981 - 1992</Card.Meta>
                <Card.Description textAlign='center'>
                  I worked as a Machinist running lathes that utilized Numerical Controls to automate the
                  machines. Including set ups, sharping of all my own tools and later I started programming Computerized
                  Numerical Controls machines in the Aerospace Industry. Six years later I was promoted to a manager. I
                  was responsible for 16 direct reports for the assembly department where we put together all the
                  parts I used to make. These parts were all assembled for the US Defense Department and Aerospace
                  Industry. During that time the Aerospace Industries was experiencing slow downs in 1992. I decided to
                  search for a better quality of life moving from California to Oahu Hawaii.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Container textAlign='center'>
                  <Button color='blue'
                          icon
                          labelPosition='left'
                          as={NavLink}
                          activeClassName=""
                          exact to="/WorkExperience">
                    <Icon name='check' size='large' />
                    Back to Work Experience
                  </Button>
                </Container>
              </Card.Content>
            </Card>
          </Container>
        </div>
    );
  }
}

export default FacilitiesManager;
