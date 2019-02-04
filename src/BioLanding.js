import React from 'react'
import { Grid, Image, Container, Button, Header, Dimmer, Card, Icon, Responsive } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import MobileBio from './mobile/MobileBio'

class BioLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }

  }

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const ContainerStyle = {
      marginTop: '32px',
      marginBottom: '8vh',
    }
    const content = (
        <div>
          <Header as='h2' inverted>
            Greg Hunter
          </Header>
        </div>
    )

    return (
        <div>

          <MobileBio/>
          <Responsive minWidth={768}>
            <Grid style={ContainerStyle} container>
              <Grid.Row columns={2}>
                <Grid.Column verticalAlign='middle'>
                  <Container>
                    <Dimmer.Dimmable
                        as={Image}
                        rounded={true}
                        dimmed={active}
                        dimmer={{ active, content }}
                        onMouseEnter={this.handleShow}
                        onMouseLeave={this.handleHide}
                        size='large'
                        src='images/bio-image.jpg'
                    />
                  </Container>
                </Grid.Column>
                <Grid.Column>
                  <Card color='yellow' fluid>
                    <Card.Content>
                      <Image floated='right' size='mini' src='/images/logo.svg'/>
                      <Card.Header>
                        Bio
                      </Card.Header>
                      <Card.Description>
                        Greg Hunter was born and raised in the Southern California in the Los Angeles and San Diego
                        area. He was introduced to golf by his father at an early age although Hunter chose to race
                        bicycles. Hunter’s mother began taking him to surf when he was 8 years old. The first time he surfed in
                        Hawaii was at Makaha 2 years later. As time passed he got into racing motorcycles as well. Later
                        as a teenager he began working fulltime and started surfing competitively. Eventually, Hunter became
                        a department lead responsible for the assembly of all the parts he made used to produce the final
                        product. These parts and assemblies were manufactured for US Defense Department and Aerospace
                        Industry.
                        <br/>
                        <br/>
                        In 1990 Hunter along with his new wife came to O’ahu for their honeymoon. While looking for a
                        better way of life away getting from the giant cities and pollution, they decided to settle down
                        and start a family right here in Hawaii. This was a new, exciting beginning and Hunter and he
                        was determined to succeed.
                        <br/>
                        <br/>
                        Hunter started working as a laborer in the Labors Union then being quickly promoted to foreman
                        building golf courses. It is there that he was introduced to the Pacific Electro-Mechanical.
                        Hunter started his electro-mechanical journey and furthering his education.
                        <br/>
                        <br/>
                        He holds great appreciation to Pacific Electro-Mechanical for teaching him the trade. After a
                        total of 8 years learning the trade Hunter became a licensed Journeyman Electrician. While
                        working at Pacific Electro-Mechanical for additional 6 years he and his wife had their amazing daughter.
                        She now has grown up and is happy married with an fantastic husband. They have 2 wonderful
                        children. Greg had left Pacific Electro-Mechanical seeking better benefits for his family, Hunter acquired
                        a maintenance management position at Monsanto, now bought and owned by Bayer.
                        <br/>
                        <br/>
                        Hunter started his own side company “Dynamic Water and Power Solutions LLC”. He is currently
                        working full-time for Bayer and part-time at his company. He has been and is extremely successful in his
                        career all the while balancing family surfing.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Container textAlign='center'>
                        <Icon name='book' size='large'/>
                      </Container>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Responsive>
        </div>
    );
  }
}

export default BioLanding;
