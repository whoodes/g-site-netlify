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
                  Maintenance Lead
                  <h4><br/>Monsanto Kunia Hawaii</h4>
                </Card.Header>
                <Card.Meta>Jan 2010 - Nov 2016</Card.Meta>
                <Card.Description>
                  I effectively managed the Annual Budget of $300K, with 6 direct reports. Lead as a service
                  provider for all the facilities; This includes 5 different buildings ranging in sizes up to
                  69,234 SQFT. Overseeing all utilities, plumbing, electrical, mechanical, air conditioners,
                  lighting, potable water, non-potable water and sewage. I ordered all the parts needed and
                  coordinated outside resources.

                  I oversaw vehicles; 40 trucks and 20 buses. I managed registration, safety checks and
                  Element Fleet Management Preventive Maintenance & Repairs.

                  Equipment; 8 planters, 12 sprayers, 12 tractors, 11 ATVs, 9 Dryers, 13 AC units, 24 Water
                  cannons, 2 Electric Pump stations, 2 Diesel Pump stations, 2 Emergency generators, 9 Soy
                  Bean Belt Threshers, 14 Light Towers, 27 farm implements, 14 Utility Type vehicles such as
                  Fork Lifts, Man-Lifts and Riding Mowers.

                  Power Grid; All power distribution equipment, utilities on site are owned by Monsanto. Being
                  a Licensed Journeyman Electrician allows me to make repairs and coordinate all activities
                  safely.

                  Fire system; This includes 15 fire hydrants, 3 sprinkler systems and associated valves.

                  Aerobic Wastewater System; An on site sewage plant that process wastewater and discharges R1
                  reclaimed water in to the evaporation fields via drip tape. Coordinate sampling activities
                  with IWT contactor and DOH.

                  Warehouse activities; All shipments for the site are received at our warehouse. We assure
                  all traceability and accountability for all seed and packages received notifying addressees
                  when delivered.

                  I established a predictive type maintenance, decreasing down time and costly repairs. My
                  Predictive Maintenance program includes facilities, heavy equipment and vehicles along with
                  registration and safety checks. Also all related housekeeping activities. Now I am
                  transforming my thriving maintenance program by taking it to the next level using CMMS Web
                  Based Software Maintenance Connection with extremely positive results.
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
