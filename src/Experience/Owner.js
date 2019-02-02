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
                  Owner
                  <h4><br/>Dynamic Water Power Solutions LLC</h4>
                </Card.Header>
                <Card.Meta>Nov 2008 - Present</Card.Meta>
                <Card.Description>
                  When I left Pacific Electro Mechanical it would have created a gap where no one else had a
                  Water Distribution License. Sid Kent the owner encouraged me to start my own business to
                  continue servicing the PWS#315 in Kahuku and handle some of the North Shore account because
                  it made since being I lived in the area. Sid and I still have a great working relationship.
                  I have contracts and different service agreements with local farmers and landowners in the
                  area and other regular customers around Oahu. Some of the services I provide are; Preventive
                  Maintenance, Strategy Development, Equipment Analysis and Operational Risk Assessments,
                  Water Systems Management, Reporting, DNLR Coordination with groundwater usage reporting.
                  Specialize in Maintenance Inspections and Troubleshooting. I also provide a wide range of
                  Consulting services.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Container textAlign='center'>
                  <Button as={NavLink} activeClassName="" exact to="/WorkExperience"><Icon name='step backward' size='large'/>Go Back</Button>
                </Container>
              </Card.Content>
            </Card>
          </Container>
        </div>
    );
  }
}

export default FacilitiesManager;
