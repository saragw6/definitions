//not in use needs work

import React from 'react';

import Button from 'react-toolbox/lib/button/Button';
import Tooltip from 'react-toolbox/lib/tooltip';
const TooltipButton = Tooltip(Button);

function MenuButtons(props) {

	return(
		<div style={{position: 'fixed', bottom: '15px', right: '15px'}}>
        {props.auth.isAuthenticated() && <TooltipButton icon="clear" onClick={props.auth.logout} mini floating primary style={{margin: '5px'}} tooltip="logout"/>}
        <TooltipButton icon='feedback' mini floating primary href="https://docs.google.com/forms/d/e/1FAIpQLSfKF0yyleI5XdPVtl-bEuQUGy2HZPfnUU-e2sDjL31eLuygUA/viewform?usp=sf_link" target="_blank" style={{margin: '5px'}} tooltip='define'/>
        <TooltipButton icon='live_help' mini floating primary style={{margin: '5px'}} tooltip='request' href="https://goo.gl/forms/xrZyTzaVo8Addq8d2" target="_blank" />
        <TooltipButton icon='info' onClick={this.aboutOnClick} mini floating primary style={{margin: '5px'}} tooltip="about"/>


      </div>
	);

}
export default MenuButtons;