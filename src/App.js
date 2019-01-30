import React from 'react';
import { Grid, Image, Container, List, Segment, Responsive } from 'semantic-ui-react';
import CrossFadeImage from './CrossFade';
import NavBar from './NavBar';
import Footer from './Footer';

/** A simple static component to render some text for the landing page. */
class App extends React.Component {
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
        '/images/IMG_3501.jpeg',
        '/images/IMG_3593.jpeg',
        '/images/IMG_3594.jpeg',
        '/images/IMG_3598.jpeg',
        '/images/IMG_3611.jpeg',
        '/images/IMG_3612.jpeg',
        '/images/IMG_5793.jpeg',
        '/images/IMG_4464.jpeg',
        '/images/IMG_1916.jpeg',
      ],
      index: Math.floor(Math.random() * 40),
    };
  }

  imageChange() {
    if (this.state.index === this.state.images.length - 1) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.imageChange(), 2500);
  }

  checkBrowserForSlideShow() {
    let isSafari = /constructor/i.test(window.HTMLElement) ||
        (function (p) {
          return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] ||
            /* eslint-disable-next-line */
            (typeof safari !== 'undefined' && safari.pushNotification));
    if (!isSafari) {
      return <CrossFadeImage src={this.state.images[this.state.index]}/>
    } else {
      return <Image src={this.state.images[this.state.index]}/>
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const logoStyle = {
      marginTop: '64px',
      marginBottom: '600px',
      paddingBottom: '16px',
      backgroundColor: 'white',
      opacity: '0.6',
    };

    const gridStyle = {
      paddingTop: '40px',
    };

    const mobileGridStyle = {
      paddingBottom: '40px',
    };

    const imageContainer = {
      width: '100%',
    };

    const mobileLogo = {
      height: '324px',
      backgroundColor: 'white',
      opacity: '0.6',
      marginTop: '64px',
      marginBottom: '400px',
      paddingBottom: '16px',
    };

    const bg_bar = {
      background: '#1B1C1D',
      height: '340px',
      marginTop: '64px',
      marginBottom: '0',
    }

    const mobile_bg_bar = {
      background: '#1B1C1D',
      height: '464px',
      marginTop: '64px',
      marginBottom: '0',
    }

    const image_bg_bar = {
      background: '#1B1C1D'
    }

    return (
        <div>

          <NavBar/>

          {/* mobile bg */}
          <Responsive maxWidth={768}>
            <style>{'body { background-color: rgba(244, 244, 244, 1) }'}</style>
            <style>{'body { background: url(/images/rome-cover.JPG) no-repeat center center fixed; }'}</style>
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
                <Grid.Row columns={2}>
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

          <div style={image_bg_bar}>
            <Container fluid style={imageContainer}>

              {/* loads the next image in the list to avoid lag */}
              <Image hidden src={this.state.images[this.state.index + 1]}/>
              <Image fluid>
                {this.checkBrowserForSlideShow()}
              </Image>
            </Container>
          </div>

          <Footer/>

        </div>
    );
  }
}

export default App;
