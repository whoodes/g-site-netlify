import React from 'react';
import { Menu, Dropdown, Responsive, Image } from 'semantic-ui-react';

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

          <Responsive maxWidth={768}>
            <Menu style={mobileMenuStyle} attached="top" borderless inverted>
              <Menu.Item>
                <Dropdown trigger={getTrigger()} icon={null}>
                  <Dropdown.Menu>
                    <Dropdown.Item>Consulting</Dropdown.Item>
                    <Dropdown.Item>Preventive Maintenance</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            </Menu>
          </Responsive>

          <Responsive minWidth={768}>
            <Menu style={menuStyle} attached="top" borderless inverted fitted>
              <Menu.Item href='google.com'>
                <strong>Consulting Services</strong>
              </Menu.Item>
              <Menu.Item href='google.com'>
                <strong>Preventative Maintenance</strong>
              </Menu.Item>
              <Menu.Item href='google.com'>
                <strong>About</strong>
              </Menu.Item>
              <Menu.Item position='right'>
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
