import React from 'react';
import CrossFadeImage from './CrossFade';
import { Container, Grid, Image, Responsive, Segment, List } from 'semantic-ui-react';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        '/images/IMG_111.jpg',
        '/images/IMG_0787.jpeg',
        '/images/IMG_1052.jpeg',
        '/images/IMG_1495.jpeg',
        '/images/IMG_1536.jpeg',
        '/images/IMG_1539.jpeg',
        '/images/IMG_1745.jpeg',
        '/images/IMG_1754.jpeg',
        '/images/IMG_1756.jpeg',
        '/images/IMG_1822.jpeg',
        '/images/IMG_1860.jpeg',
        '/images/IMG_1914.jpeg',
        '/images/IMG_1922.jpeg',
        '/images/IMG_1989.jpeg',
        '/images/IMG_1991.jpeg',
        '/images/IMG_3891.jpeg',
        '/images/IMG_7694.jpeg',
        '/images/IMG_7695.jpeg',
        '/images/IMG_7740.jpeg',
        '/images/IMG_7743.jpeg',
        '/images/IMG_7747.jpeg',
        '/images/IMG_7751.jpeg',
        '/images/IMG_7760.jpeg',
        '/images/IMG_7831.jpeg',
        '/images/IMG_7833.jpeg',
        '/images/IMG_7835.jpeg',
        '/images/IMG_7849.jpeg',
        '/images/IMG_7906.jpeg',
        '/images/IMG_7908.jpeg',
        '/images/IMG_7927.jpeg',
        '/images/IMG_7986.jpeg',
        '/images/IMG_8438.jpeg',
        '/images/IMG_3417.jpeg',
        '/images/IMG_3499.jpeg',
        '/images/IMG_3593.jpeg',
        '/images/IMG_3594.jpeg',
        '/images/IMG_3598.jpeg',
        '/images/IMG_3611.jpeg',
        '/images/IMG_3612.jpeg',
        '/images/IMG_5793.jpeg',
        '/images/IMG_4464.jpeg',
        '/images/IMG_1916.jpeg',
      ],
      index1: Math.floor(Math.random() * 30) + 10,
      index2: Math.floor(Math.random() * 10),
    };
  }

  setRandomIndex() {
    this.setState({
      index1: Math.floor(Math.random() * 30) + 10,
      index2: Math.floor(Math.random() * 10),
    })
  }

  imageChange() {
    if (this.state.index1 === this.state.images.length - 1 ||
        this.state.index2 === this.state.images.length - 1) {
      this.setRandomIndex()
    } else {
      this.setState(prevState => ({
        index1: prevState.index1 + 1,
        index2: prevState.index2 + 1,
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.imageChange(), 2500);
  }

  /* Unfortunately, safari doesn't like certain node modules
     namely the cross-fade image causes bugs for both desktop
     and ios. */
  checkBrowserForSlideShow(index) {
    const userAgent = navigator.userAgent;
    let isIphone = (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i));

    let isSafari = /constructor/i.test(window.HTMLElement) ||
        (function (p) {
          return p.toString() === "[object SafariRemoteNotification]";})(!window['safari'] ||
            /* eslint-disable-next-line */
            (typeof safari !== 'undefined' && safari.pushNotification));

    /* we have the inner conditionals for mobile slide-shows */
    /* this is kind of ugly, but it is what it is */
    if (!(isSafari || isIphone)) {
      if (index === 1) {
        return <CrossFadeImage src={this.state.images[this.state.index1]}/>
      } else {
        return <CrossFadeImage src={this.state.images[this.state.index2]}/>
      }
    } else {
      if (index === 1) {
        return <Image src={this.state.images[this.state.index1]}/>
      } else {
        return <Image src={this.state.images[this.state.index2]}/>
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    /* desktop styles */
    const logoStyle = {
      marginTop: '64px',
      marginBottom: '600px',
      paddingBottom: '16px',
      backgroundColor: 'white',
      opacity: '0.6',
    }

    const gridStyle = { paddingTop: '40px', }
    const imageContainer = { width: '100%', }
    const image_bg_bar = { background: '#1B1C1D', }
    const bg_bar = {
      background: '#1B1C1D',
      height: '340px',
      marginTop: '64px',
      marginBottom: '0',
    }

    /* mobile styles */
    const mobileGridStyle = { paddingBottom: '40px', }
    const mobile_bg_bar = {
      background: '#1B1C1D',
      height: '400px',
      paddingTop: '64px',
      marginTop: '0',
      marginBottom: '0',
    }

    const mobileLogo = {
      height: '324px',
      backgroundColor: 'white',
      opacity: '0.6',
      marginTop: '64px',
      marginBottom: '400px',
      paddingBottom: '16px',
    }

    return (
        <div>

          {/* mobile bg */}
          <Responsive maxWidth={768}>
            <style>{'body { background-color: rgba(244, 244, 244, 1) }'}</style>
            <style>{'body { background: url(/images/rome-cover.JPG) no-repeat top center fixed; }'}</style>
            <style>{'body { background-size: fill; }'}</style>
            <div style={mobileLogo}>
              <Grid verticalAlign='middle' container centered>
                <Image size='medium' src="/images/logo.svg"/>
              </Grid>
            </div>
          </Responsive>

          {/* desktop bg */}
          <Responsive minWidth={768}>
            <style>{'body { background-color: rgba(244, 244, 244, 1) }'}</style>
            <style>{'body { background: url(/images/rome-cover.JPG) no-repeat center center fixed; }'}</style>
            <style>{'body { background-size: fill; }'}</style>
            <div>
              <Grid style={logoStyle} container centered columns={3}>
                <Grid.Column>
                  <Image fluid src="/images/logo.svg"/>
                </Grid.Column>
              </Grid>
            </div>
          </Responsive>

          {/* desktop information bar */}
          <Responsive minWidth={768}>
            <div style={bg_bar}>
              <Grid style={gridStyle} container divided='vertically'>
                <Grid.Row columns={2}>
                  <Grid.Column verticalAlign='middle'>
                    <Segment inverted>
                      <List animated divided inverted relaxed>
                        <List.Item><strong>In Business since 2008</strong></List.Item>
                        <List.Item><strong>Journeyman Electrician License EJ-8704</strong></List.Item>
                        <List.Item><strong>Distributions Water Operator D1-023</strong></List.Item>
                        <List.Item><strong>Insured Commercial General Liability $1,000,000.00</strong></List.Item>
                        <List.Item><strong>Preventive Maintenance Strategy Development</strong></List.Item>
                        <List.Item>
                          <strong>Equipment Criticality Analysis and Operational Risk Assessments</strong>
                        </List.Item>
                        <List.Item><strong>DNLR coordination with groundwater usage reporting</strong></List.Item>
                      </List>
                    </Segment>
                  </Grid.Column>
                  <Grid.Column verticalAlign='middle'>
                    <Segment inverted>
                      <List animated divided inverted relaxed>
                        <List.Item><strong>Water systems management, reporting</strong></List.Item>
                        <List.Item><strong>Department of Health and Safe Drinking Water Branch</strong></List.Item>
                        <List.Item>
                          <strong>Coordinating water samples and routine coliform bacteria monitoring</strong>
                        </List.Item>
                        <List.Item>
                          <strong>
                            New installations, electrical motor controls and flow management including meters and valves
                          </strong>
                        </List.Item>
                        <List.Item><strong>Specialize in Maintenance Inspections and
                          Troubleshooting</strong></List.Item>
                        <List.Item><strong>Root cause failure analysis</strong></List.Item>
                      </List>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid/>
              </Grid>
            </div>
          </Responsive>

          {/* mobile information bar */}
          <Responsive maxWidth={768}>
            <div style={mobile_bg_bar}>
              <Grid style={mobileGridStyle} container divided='vertically'>
                <Grid.Row columns={1}>
                  <Grid.Column verticalAlign='middle'>
                    <Segment inverted>
                      <List divided inverted relaxed>
                        <List.Item><strong>In Business since 2008</strong></List.Item>
                        <List.Item><strong>Journeyman Electrician License EJ-8704</strong></List.Item>
                        <List.Item><strong>Distributions Water Operator D1-023</strong></List.Item>
                        <List.Item><strong>Insured Commercial General Liability $1,000,000.00</strong></List.Item>
                        <List.Item><strong>Preventive Maintenance Strategy Development</strong></List.Item>
                        <List.Item>
                          <strong>Equipment Criticality Analysis and Operational Risk Assessments</strong>
                        </List.Item>
                        <List.Item><strong>DNLR coordination with groundwater usage reporting</strong></List.Item>
                      </List>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid/>
              </Grid>
            </div>

            {/* First slide-show */}
            <div style={image_bg_bar}>
              <Container fluid style={imageContainer}>
                {/* loads the next image in the list to avoid lag */}
                <Image hidden src={this.state.images[this.state.index1 + 1]}/>
                <Image fluid>
                  {this.checkBrowserForSlideShow(1)}
                </Image>
              </Container>
            </div>

            {/* Second bg bar */}
            <div style={mobile_bg_bar}>
              <Grid style={mobileGridStyle} container divided='vertically'>
                <Grid.Row columns={1}>
                  <Grid.Column verticalAlign='middle'>
                    <Segment inverted>
                      <List divided inverted relaxed>
                        <List.Item><strong>Water systems management, reporting</strong></List.Item>
                        <List.Item><strong>Department of Health and Safe Drinking Water Branch</strong></List.Item>
                        <List.Item>
                          <strong>Coordinating water samples and routine coliform bacteria monitoring</strong>
                        </List.Item>
                        <List.Item>
                          <strong>
                            New installations, electrical motor controls and flow management including meters and valves
                          </strong>
                        </List.Item>
                        <List.Item><strong>Specialize in Maintenance Inspections and
                          Troubleshooting</strong></List.Item>
                        <List.Item><strong>Root cause failure analysis</strong></List.Item>
                      </List>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid/>
              </Grid>
            </div>
          </Responsive>

          {/* Standard slide-show */}
          <div style={image_bg_bar}>
            <Container fluid style={imageContainer}>
              {/* loads the next image in the list to avoid lag */}
              <Image hidden src={this.state.images[this.state.index2 + 1]}/>
              <Image fluid>
                {this.checkBrowserForSlideShow(2)}
              </Image>
            </Container>
          </div>

        </div>
    );
  }
}

export default Landing;
