import React from 'react';
import { Button, Grid, Responsive } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {
      backgroundColor: '#1B1C1D',
      height: '256px',
      paddingTop: '32px',
    };

    const mobileDivStyle = {
      backgroundColor: '#1B1C1D',
      height: '200x',
      paddingTop: '32px',
    };

    const socialStyle = {
      marginTop: '64px',
    };

    const mobileSocialStyle = {
      paddingTop: '8px',
      paddingBottom: '20px',
    };

    const email = 'hunterg@hawaiiantel.net';

    return (
        <div>
          <Responsive minWidth={768}>
            <div style={divStyle}>
              <Grid centered container style={socialStyle}>
                <Button size='huge'
                        circular color='instagram'
                        icon='instagram'
                        href='https://www.instagram.com/hunterstr8upg/'/>
                <Button size='huge'
                        circular color='linkedin'
                        icon='linkedin'
                        href='https://www.linkedin.com/in/greg-hunter-2b968150/'/>
                <Button size='huge'
                        circular color='google plus'
                        icon='mail'
                        href={`mailto:${email}`}/>
              </Grid>
            </div>
          </Responsive>
          <Responsive maxWidth={768}>
            <div style={mobileDivStyle}>
              <Grid centered container style={mobileSocialStyle}>
                <Button size='large'
                        circular color='instagram'
                        icon='instagram'
                        href='https://www.instagram.com/hunterstr8upg/'/>
                <Button size='large'
                        circular color='linkedin'
                        icon='linkedin'
                        href='https://www.linkedin.com/in/greg-hunter-2b968150/'/>
                <Button size='large'
                        circular color='google plus'
                        icon='mail'
                        href={`mailto:${email}`}/>
              </Grid>
            </div>
          </Responsive>
        </div>
    );
  }
}

export default Footer;
