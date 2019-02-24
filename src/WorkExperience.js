import React from 'react'
import { Button, Card, Image, Container, Grid, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class WorkExperience extends React.Component {
  render() {
    const MainContainerStyle = {
      marginTop: '64px',
      marginBottom: '32vh',
    }

    return (
        <div>
          {/* TODO: there is some weird bug now that allows the window to resize outward */}
          <style>{'body { background-color: lightgrey }'}</style>
          <Grid>
            <Container fluid>
              <Grid container style={MainContainerStyle} >
                <Grid.Row centered>
                  <Grid.Column width={14}>
                    <Card.Group centered>
                      <Card>
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
                            it made since being I lived in the area...
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Container textAlign='center'>
                            <Button color='blue'
                                    size='small'
                                    as={NavLink}
                                    activeClassName=""
                                    exact to="/Experience/Owner">
                              <Icon name='wrench'
                                    size='large'/>
                                    Learn More
                            </Button>
                          </Container>
                        </Card.Content>
                      </Card>
                      <Card>
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
                            additional site locations and their air conditioners, plumbing, office related repairs...
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Container textAlign='center'>
                            <Button color='blue'
                                    size='small'
                                    as={NavLink}
                                    activeClassName=""
                                    exact to="/Experience/FacilitiesManager">
                              <Icon name='wrench'
                                    size='large'/>
                              Learn More
                            </Button>
                          </Container>
                        </Card.Content>
                      </Card>
                      <Card>
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
                            lighting, potable water, non-potable water and sewage...
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Container textAlign='center'>
                            <Button color='blue'
                                    size='small'
                                    as={NavLink}
                                    activeClassName=""
                                    exact to="/Experience/MaintenanceLead">
                              <Icon name='wrench'
                                    size='large'/>
                              Learn More
                            </Button>
                          </Container>
                        </Card.Content>
                      </Card>
                      <Card>
                        <Card.Content>
                          <Image floated='right' size='mini' src='/images/logo.svg'/>
                          <Card.Header>
                            Maintenance Associate
                            <h4><br/>Monsanto Kunia Hawaii</h4>
                          </Card.Header>
                          <Card.Meta>Nov 2008 to Jan 2010</Card.Meta>
                          <Card.Description>
                            Responsibilities: Maintaining the pump stations, dryers and heavy equipment. Establishing a
                            Preventive Maintenance Program. Creating a tracking system for all equipment. Monitoring
                            service intervals for all equipment, per manufactures recommendations for implementation of
                            the Preventive Maintenance Program. Coordinate repairs and servicing equipment with the
                            crew.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Container textAlign='center'>
                            <Icon name='wrench' size='large'/>
                          </Container>
                        </Card.Content>
                      </Card>
                      <Card>
                        <Card.Content>
                          <Image floated='right' size='mini' src='/images/logo.svg'/>
                          <Card.Header>
                            Journeyman Electrician
                            <h4><br/>Pacific Electro-Mechanical Inc</h4>
                          </Card.Header>
                          <Card.Meta>1994-2008</Card.Meta>
                          <Card.Description>
                            I began as a field technician and was promoted to North Shore Manager of Operations. My
                            responsibilities were to complete electrical installations, custom motor controls, emergency
                            power systems, residential and commercial wiring, corn huskers, dryers and shellers, as well
                            as retrofit fabrication and welding...
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Container textAlign='center'>
                            <Button color='blue'
                                    size='small'
                                    as={NavLink}
                                    activeClassName=""
                                    exact to="/Experience/JourneyMan">
                              <Icon name='wrench'
                                    size='large'/>
                              Learn More
                            </Button>
                          </Container>
                        </Card.Content>
                      </Card>
                      <Card>
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
                            house, installation of the wet well, V.F.D.-Pumps, 480V 3 phase feeder line...
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Container textAlign='center'>
                            <Button color='blue'
                                    size='small'
                                    as={NavLink}
                                    activeClassName=""
                                    exact to="/Experience/SuperIntendent">
                              <Icon name='wrench'
                                    size='large'/>
                              Learn More
                            </Button>
                          </Container>
                        </Card.Content>
                      </Card>
                      <Card>
                        <Card.Content>
                          <Image floated='right' size='mini' src='/images/logo.svg'/>
                          <Card.Header>
                            Foreman-Labor
                            <h4><br/>Wadsworth Golf Course Constr. Co.</h4>
                          </Card.Header>
                          <Card.Meta>1992</Card.Meta>
                          <Card.Description>
                            I was a hands-on Foreman in the construction of the Waikele Golf Course in Waipahu, HI.
                            Responsibilities included installing all irrigation systems, mainlines, valves, sprinklers,
                            controllers
                            and all related wiring. I also oversaw the mason crew, assuring optimal drainage for the
                            cart
                            paths.
                            While working for Wadsworth, I was also involved with the remodeling of greens, tees,
                            fairways
                            bunkers
                            and relocating of cart paths.
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Container textAlign='center'>
                            <Icon name='wrench' size='large'/>
                          </Container>
                        </Card.Content>
                      </Card>
                      <Card>
                        <Card.Content>
                          <Image floated='right' size='mini' src='/images/logo.svg'/>
                          <Card.Header>
                            Production Supervisor
                            <h4><br/>Reynolds Industry Inc.</h4>
                          </Card.Header>
                          <Card.Meta>1981 - 1992</Card.Meta>
                          <Card.Description>
                            I worked as a Machinist running lathes that utilized Numerical Controls to automate the
                            machines. Including set ups, sharping of all my own tools and later I started programming Computerized
                            Numerical Controls machines in the Aerospace Industry. Six years later I was promoted to a manager. I
                            was responsible for 16 direct reports for the assembly department where we put together all...
                          </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Container textAlign='center'>
                            <Button color='blue'
                                    size='small'
                                    as={NavLink}
                                    activeClassName=""
                                    exact to="/Experience/Supervisor">
                              <Icon name='wrench'
                                    size='large'/>
                              Learn More
                            </Button>
                          </Container>
                        </Card.Content>
                      </Card>
                    </Card.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Grid>
        </div>
    );
  }
}

export default WorkExperience;
