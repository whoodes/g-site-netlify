import React from 'react'
import { Icon, Image, Responsive, Menu, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class MobileNavBar extends React.Component {
  render() {
    function getTrigger() {
      return <span><Image inverted size='tiny' src='images/logo-white.svg'/></span>
    }

    const mobileMenuStyle = {
      marginTop: '-4px',
      paddingBottom: '8px',
      paddingTop: '16px',
      paddingRight: '4px'
    };
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
        </div>
    )
  }
}

export default MobileNavBar;
