import React from 'react'
import { Button, Card, Image, Container, Grid, Icon, Menu, Responsive } from 'semantic-ui-react'

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: 'small'
    }
  }

  handleViewClick = (e, { name }) => this.setState({ activeView: name })

  render() {
    const { activeView } = this.state.activeView;

    const MainContainerStyle = {
      marginTop: '64px',
      marginBottom: '64vh'
    }

    let size = 3;
    switch (this.state.activeView) {
      case 'big':
        size = 1;
        break;
      case 'small':
        size = 3;
        break;
      case 'single':
        size = 1;
        break;
      case 'double':
        size = 2;
        break;
      default:
        size = 2;
        break;
    }

    return (
        <div>

          {/* This is a work in progress to get card resizing right */}
          {/*
          <Responsive minWidth={768}>
            <Menu text>
              <Menu.Item header>View</Menu.Item>
              <Menu.Item
                  name='big'
                  active={activeView === 'big'}
                  onClick={this.handleViewClick}
              />
              <Menu.Item
                  name='small'
                  active={activeView === 'small'}
                  onClick={this.handleViewClick}
              />
            </Menu>
          </Responsive>

          <Responsive maxWidth={768}>
            <Menu text>
              <Menu.Item header>View</Menu.Item>
              <Menu.Item
                  name='single'
                  active={activeView === 'single'}
                  onClick={this.handleViewClick}
              />
              <Menu.Item
                  name='double'
                  active={activeView === 'double'}
                  onClick={this.handleViewClick}
              />
            </Menu>
          </Responsive>
          */}

          <Grid container centered style={MainContainerStyle}>
            <Card.Group>
              <Card>
                <Card.Content>
                  <Image floated='right' size='mini' src='/images/logo.svg'/>
                  <Card.Header>
                    Production Supervisor
                    <h4><br/>Reynolds Industry Inc.</h4>
                  </Card.Header>
                  <Card.Meta>1981 - 1992</Card.Meta>
                  <Card.Description textAlign='center'>
                    I worked as a Machinist running lathes that utilized Numerical Controls to automate the machines.
                    Including set ups, sharping of all my own tools and later I started programming Computerized
                    Numerical
                    Controls machines in the Aerospace Industry. Six years later I was promoted to a manager. I was
                    responsible for 16 direct reports for the assembly department where we put together all the parts I
                    used to make. These parts were all assembled for the US Defense Department and Aerospace Industry.
                    During that time the Aerospace Industries was experiencing slow downs in 1992. I decided to search
                    for
                    a better quality of life moving from California to Oahu Hawaii.
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
                    Foreman-Labor
                    <h4><br/>Wadsworth Golf Course Constr. Co.</h4>
                  </Card.Header>
                  <Card.Meta>1992</Card.Meta>
                  <Card.Description>
                    <br/><br/>
                    I was a hands-on Foreman in the construction of the Waikele Golf Course in Waipahu, HI.
                    Responsibilities included installing all irrigation systems, mainlines, valves, sprinklers,
                    controllers
                    and all related wiring. I also oversaw the mason crew, assuring optimal drainage for the cart paths.
                    While working for Wadsworth, I was also involved with the remodeling of greens, tees, fairways
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
                    Superintendent
                    <h4><br/>Hazama Corporation</h4>
                  </Card.Header>
                  <Card.Meta>1993 - 1994</Card.Meta>
                  <Card.Description>
                    Oversaw and coordinated the construction of a semi-private 18 holes, 72 par Royal Kunia Golf Course
                    designed by Nelson & Wright in Waipio, HI. My responsibilities were to monitor and inspect all
                    installations and construction work. Including the construction of the pump house, installation of
                    the
                    wet well, V.F.D.-Pumps, 480V 3 phase feeder line, electrical panels, lighting, a complete Toro
                    irrigation system with the Toro Network 8000 central computer system as well as a storm drainage
                    system
                    designed to withstand a 100 year storm.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Container textAlign='center'>
                    <Icon name='wrench' size='large'/>
                  </Container>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid>
        </div>
    );
  }
}

export default WorkExperience;
