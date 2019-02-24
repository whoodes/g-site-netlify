import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

class PemTestimonial extends React.Component {
  render() {
    const Gridstyle = {
      marginTop: '32px',
      marginBottom: '26vh',
    }
    return (
        <Grid style={Gridstyle} container>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Image fluid src='images/wai-testimony.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

export default PemTestimonial
