import React from 'react';
import { Menu, Responsive, Image, Modal } from 'semantic-ui-react';
import MobileNavBar from './mobile/MobileNavBar'
import { NavLink } from 'react-router-dom';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open1: false,
      open2: false,
    }
  }

  show1 = dimmer => () => this.setState({ dimmer, open1: true })
  show2 = dimmer => () => this.setState({ dimmer, open2: true })
  close1 = () => this.setState({ open1: false })
  close2 = () => this.setState({ open2: false })

  render() {
    const menuStyle = {
      paddingBottom: '8px',
      paddingTop: '16px',
      paddingLeft: '32px',
      paddingRight: '4px'
    };

    const ModalStyle = {
      marginTop: 'auto !important',
      display: 'inline-block !important',
      top: '20%',
    }

    const { open1, open2, dimmer } = this.state
    return (
        <div>

          <MobileNavBar/>

          {/* Desktop navbar */}
          <Responsive minWidth={768}>
            <Menu style={menuStyle} attached="top" borderless inverted fitted>
              <Menu.Item as={NavLink} activeClassName="" exact to="/WorkExperience">
                <strong>Work Experience</strong>
              </Menu.Item>
              <Menu.Item onClick={this.show1('blurring')}>
                <strong>Preventative Maintenance</strong>
              </Menu.Item>
              <Menu.Item onClick={this.show2('blurring')}>
                <strong>Consulting</strong>
              </Menu.Item>
              <Menu.Item as={NavLink} activeClassName="" exact to="/Testimonials">
                <strong>Testimonials</strong>
              </Menu.Item>
              <Menu.Item as={NavLink} activeClassName="" exact to="/BioLanding">
                <strong>About</strong>
              </Menu.Item>
              <Menu.Item as={NavLink} activeClassName="" exact to="/" position='right'>
                <Image inverted size='tiny' src='images/logo-white.svg'/>
              </Menu.Item>
            </Menu>

            <Modal style={ModalStyle} dimmer={dimmer} open={open1} onClose={this.close1} closeIcon>
              <Modal.Header>Preventive Maintenance</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <p>We implement preventive maintenance, leading to a predictive and productive maintenance plan by
                    leveraging data. Then bringing it to the next level, we apply tools which allow for quick evaluation
                    to operators while keeping equipment reliable, clean and painted.
                  </p>
                </Modal.Description>
              </Modal.Content>
            </Modal>

            <Modal style={ModalStyle} dimmer={dimmer} open={open2} onClose={this.close2} closeIcon>
              <Modal.Header>Consulting</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <p>We introduce and co-ordinate third party solutions. Providing outside specialty services with team driven results.
                  </p>
                </Modal.Description>
              </Modal.Content>
            </Modal>

          </Responsive>

        </div>
    );
  }
}

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default NavBar;
