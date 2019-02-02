import React from 'react';
import { Menu, Responsive, Image, } from 'semantic-ui-react';
import MobileNavBar from './mobile/MobileNavBar'
import { NavLink } from 'react-router-dom';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = {
      paddingBottom: '8px',
      paddingTop: '16px',
      paddingLeft: '32px',
      paddingRight: '4px'
    };

    const logoStyle = {
      marginTop: '10px',
    }

    return (
        <div>

          <MobileNavBar/>

          {/* Desktop navbar */}
          <Responsive minWidth={768}>
            <Menu style={menuStyle} attached="top" borderless inverted fitted>
              <Menu.Item as={NavLink} activeClassName="" exact to="/WorkExperience">
                <strong>Work Experience</strong>
              </Menu.Item>
              <Menu.Item as={NavLink} activeClassName="" exact to="/">
                <strong>Preventative Maintenance</strong>
              </Menu.Item>
              <Menu.Item as={NavLink} activeClassName="" exact to="/">
                <strong>Consulting</strong>
              </Menu.Item>
              <Menu.Item as={NavLink} activeClassName="" exact to="/">
                <strong>About</strong>
              </Menu.Item>
              <Menu.Item as={NavLink} activeClassName="" exact to="/" position='right'>
                <Image inverted size='tiny' src='images/logo-white.svg'/>
              </Menu.Item>
            </Menu>
          </Responsive>

        </div>
    );
  }
}

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default NavBar;
