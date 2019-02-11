import React from 'react'
import { Grid, Card, Container, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class Testimonials extends React.Component {
  render() {
    const GridStyle = {
      marginTop: '64px',
      marginBottom: '64vh',
    }
    return (
        <div>
          <style>{'body { background-color: lightgrey }'}</style>
          <Grid style={GridStyle} container>
            <Container>
              <Grid.Row>
                <Grid.Column>
                  <Card centered
                        as={NavLink}
                        activeClassName=""
                        exact to="/PemTestimonial"
                        color='yellow'
                        fluid>
                    <Card.Content textAlign='center'>
                      <Card.Header>Pacific Electro-Mechanical, Inc.</Card.Header>
                    </Card.Content>
                    <Card.Content textAlign='center'>
                      <Card.Meta>Letter</Card.Meta>
                      <Card.Description>Attesting to Greg Hunter's expertise in the electrical trades</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Container textAlign='center'>
                        <Icon name='newspaper outline'/>
                      </Container>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Container>
          </Grid>
        </div>
    )
  }
}

export default Testimonials
