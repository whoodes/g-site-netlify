import React from 'react';
import { Menu, Dropdown, Responsive, Image, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {

    function getTrigger() {
      return <span><Image inverted size='tiny' src='images/logo-white.svg'/></span>
    }

    const menuStyle = {
      paddingBottom: '8px',
      paddingTop: '16px',
      paddingLeft: '32px',
      paddingRight: '4px'
    };

    const mobileMenuStyle = {
      marginTop: '-4px',
      paddingBottom: '8px',
      paddingTop: '16px',
      paddingRight: '4px'
    };

    const logoStyle = {
      marginTop: '10px',
    }

    return (
        <div>

          {/* Mobile navbar */}
          <Responsive maxWidth={768}>
            <Menu style={mobileMenuStyle} attached="top" borderless inverted>
              <Menu.Item>
                <Dropdown trigger={getTrigger()} icon={null}>
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} activeClassName="" exact to="/WorkExperience">
                      Work Experience
                    </Dropdown.Item>
                    <Dropdown.Item>Preventative Maintenance</Dropdown.Item>
                    <Dropdown.Item>Consulting Services</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item as={NavLink} activeClassName="" exact to="/" position='right'>
                <Icon inverted size='large' name='home'/>
              </Menu.Item>
            </Menu>
          </Responsive>

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
