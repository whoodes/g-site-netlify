import React from 'react'
import { Card, Container, Icon, Image, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class FacilitiesManager extends React.Component {
  render() {
    const ContainerStyle = {
      marginTop: '128px',
      marginBottom: '32vh',
    }
    return (
        <div>
          <style>{'body { background-color: grey }'}</style>
          <Container style={ContainerStyle}>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='mini' src='/images/logo.svg'/>
                <Card.Header>
                  Oahu Facilities Manager
                  <h4><br/>Bayer Kunia Hawaii</h4>
                </Card.Header>
                <Card.Meta>Nov 2016 - Present</Card.Meta>
                <Card.Description>
                  This position includes the responsibilities of maintaining 3 Oahu Facilities and related
                  equipment and utilities with 3 direct reports. Much like the Maintenance Lead position but,
                  now I am not responsible for the rolling stock anymore. Instead I am responsible for 2
                  additional site locations and their air conditioners, plumbing, office related repairs along
                  with all the seed processing equipment used by the different teams. This includes 57 dryers,
                  16 lane 200-600 bushel corn husker, 6 corn shellers, 8 soy threshers, 22 conveyors,
                  irrigation pump & filter stations and more. I am also responsible for all the building
                  structures, lighting and utilities. I serve as the liaison for Hawaiian Electric
                  coordinating our account activities of 3 metered services feeding our 3 different pole-lines
                  that we own and maintain on our lower Kunia farm property feeding our 2 main pump stations
                  and facilities.

                  I also manage the Fire Systems: the fire alarm systems and the 15 fire hydrants. Our Aerobic
                  Water System handling our sewage waste treatment at our Lower Kunia Farm. I oversee our
                  employee qualified electrical training for Hawaii as the Hawaii competent electrically
                  qualified trainer. Continuing on to expand our Maintenance Connection CMMS Web Based
                  Software working with outer islands Maui and Molokai operations, providing detailed cost
                  analysis and equipment down time utilizing automated work order generation and reporting.

                  I serve as a safety team captain of 10 employees responsible for their general awareness
                  monthly safety trainings. This includes programs such as lock out-tag out, electrical
                  awareness, elevated work, combustible dust, fire, hearing conservation, spills and counter
                  measures and more.
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
