import React from 'react';
import { TooltipButton } from './Libraries/ReactToolboxLibrary';

function Tooltips(props) {
  return (
    <div className="tooltips">
      {props.auth.isAuthenticated() && <TooltipButton icon="clear" className="queerButton" onClick={props.auth.logout} mini floating primary tooltip="logout"/>}
      <TooltipButton className="queerButton" icon='feedback' mini floating primary onClick={props.addDefinitionOnClick}  tooltip='define'/>
      <TooltipButton className="queerButton" icon='live_help' mini floating primary tooltip='request' onClick={props.requestDefinitionOnClick}/>
      <TooltipButton className="queerButton" icon='info' onClick={props.aboutOnClick} mini floating primary tooltip="info"/>

    </div>
  );
}

export { Tooltips };
