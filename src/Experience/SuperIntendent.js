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
                  Superintendent
                  <h4><br/>Hazama Corporation</h4>
                </Card.Header>
                <Card.Meta>1993 - 1994</Card.Meta>
                <Card.Description>
                  Oversaw and coordinated the construction of a semi-private 18 holes, 72 par Royal Kunia Golf
                  Course designed by Nelson & Wright in Waipio, HI. My responsibilities were to monitor and
                  inspect all installations and construction work. Including the construction of the pump
                  house, installation of the wet well, V.F.D.-Pumps, 480V 3 phase feeder line, electrical
                  panels, lighting, a complete Toro irrigation system with the Toro Network 8000 central
                  computer system as well as a storm drainage system designed to withstand a 100 year storm.
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
