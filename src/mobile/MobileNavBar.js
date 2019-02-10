import React from 'react'
import { Icon, Image, Responsive, Menu, Dropdown, Modal } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class MobileNavBar extends React.Component {
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
    function getTrigger() {
      return <span><Image inverted size='tiny' src='images/logo-white.svg'/></span>
    }

    const mobileMenuStyle = {
      marginTop: '-4px',
      paddingBottom: '8px',
      paddingTop: '16px',
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
          {/* Mobile navbar */}
          <Responsive maxWidth={768}>
            <Menu style={mobileMenuStyle} attached="top" borderless inverted>
              <Menu.Item>
                <Dropdown trigger={getTrigger()} icon={null}>
                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} activeClassName="" exact to="/WorkExperience">
                      Work Experience
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.show1('blurring')}>Preventative Maintenance</Dropdown.Item>
                    <Dropdown.Item onClick={this.show2('blurring')}>Consulting Services</Dropdown.Item>
                    <Dropdown.Item as={NavLink} activeClassName="" exact to="/Testimonials">Testimonials</Dropdown.Item>
                    <Dropdown.Item as={NavLink} activeClassName="" exact to="/BioLanding">About</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
              <Menu.Item as={NavLink} activeClassName="" exact to="/" position='right'>
                <Icon inverted size='large' name='home'/>
              </Menu.Item>
            </Menu>

            {/* The modal for the preventive data */}
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
              <Modal.Content image>
                <Image size='small' src='images/logo.svg' />
              </Modal.Content>
            </Modal>

            {/*  The modal for the consulting data */}
            <Modal style={ModalStyle} dimmer={dimmer} open={open2} onClose={this.close2} centered={false} closeIcon>
              <Modal.Header>Consulting</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <p>We introduce and co-ordinate third party solutions. Providing outside specialty services with team driven results.
                  </p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Content image>
                <Image size='small' src='images/logo.svg' />
              </Modal.Content>
            </Modal>

          </Responsive>
        </div>
    )
  }
}

export default MobileNavBar;
