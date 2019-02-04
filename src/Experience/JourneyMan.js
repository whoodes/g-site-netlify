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
          <style>{'body { background-color: grey }'}</style>
          <Container style={ContainerStyle}>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='/images/logo.svg'/>
                <Card.Header>
                  Journeyman Electrician
                  <h4><br/>Electro Mechanical Inc</h4>
                </Card.Header>
                <Card.Meta>1994-2008</Card.Meta>
                <Card.Description>
                  I began as a field technician and was promoted to North Shore Manager of Operations. My
                  responsibilities were to complete electrical installations, custom motor controls, emergency
                  power systems, residential and commercial wiring, corn huskers, dryers and shellers, as well
                  as retrofit fabrication and welding. I performed preventative maintenance of well pumps and
                  potable public water systems. These activities included variable frequency drives, sewage
                  lift stations and unique power systems, Troubleshooting problems, systematically utilizing
                  blueprints and using theoretical analysis to make repairs to electrical 11.5KV pole
                  transmission lines, associated transformers, service equipment powering the motor controls,
                  associated hydraulics, and actuated solenoid valves and instruments.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Container textAlign='center'>
                  <Button color='blue' icon labelPosition='left' as={NavLink} activeClassName="" exact to="/WorkExperience">
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
