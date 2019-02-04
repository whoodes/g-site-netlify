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
      marginTop: '64px',
      marginBottom: '16vh',
    }
    const content = (
        <div>
          <Header as='h2' inverted>
            Greg Hunter
          </Header>
          <Header as='h4' inverted>
            Love life, it will love you back!
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
                <Grid.Column verticalAlign='middle'>
                  <Card color='yellow' fluid>
                    <Card.Content>
                      <Image floated='right' size='mini' src='/images/logo.svg'/>
                      <Card.Header>
                        Bio
                      </Card.Header>
                      <Card.Description>
                        Greg Hunter was born and raised in Southern California . Although he was
                        introduced to golf at an early age by his father, Hunter chose to surf and race
                        bicycles. Fixing and maintaining his equipment was his first taste of mechanics.
                        When Hunter was 10 years old, he surfed in Makaha, Hawaii for the first time. As
                        time passed he got into racing motorcycles and skate boarding as well. Later as a
                        teenager he began working full-time and started surfing competitively.
                        <br/>
                        <br/>
                        In 1990 Hunter along with his new wife came to O’ahu for their honeymoon. Later
                        on, while looking for a better way of life away from the giant cities and pollution,
                        they decided to settle down and start a family right here in Hawaii. This was a new,
                        exciting beginning and he was determined to succeed.
                        <br/>
                        <br/>
                        In 1994 Hunter and his wife had their amazing daughter who is now happily
                        married to a fantastic husband. They have 2 wonderful children. Together.
                        <br/>
                        <br/>
                        Hunter is currently working full-time for Bayer and at his own company. He has
                        been extremely successful in his career all the while balancing family, work and
                        surfing.
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
