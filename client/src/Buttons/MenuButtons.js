//not in use needs work

import React from 'react';

import Button from 'react-toolbox/lib/button/Button';
import Tooltip from 'react-toolbox/lib/tooltip';

import { add_definition_url, request_definition_url } from "./urls";

const TooltipButton = Tooltip(Button);

function MenuButtons(props) {

	return(
		<div style={{position: 'fixed', bottom: '15px', right: '15px'}}>
        {props.auth.isAuthenticated() && <TooltipButton icon="clear" onClick={props.auth.logout} mini floating primary style={{margin: '5px'}} tooltip="logout"/>}
        <TooltipButton icon='feedback' mini floating primary href={{add_definition_url}} target="_blank" style={{margin: '5px'}} tooltip='define'/>
        <TooltipButton icon='live_help' mini floating primary style={{margin: '5px'}} tooltip='request' href={{request_definition_url}} target="_blank" />
        <TooltipButton icon='info' onClick={this.aboutOnClick} mini floating primary style={{margin: '5px'}} tooltip="about"/>


      </div>
	);

}
export default MenuButtons;
