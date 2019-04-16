import React from 'react';
import { TooltipButton } from './Libraries/ReactToolboxLibrary';

function Tooltips(props) {
  return (
    <div className="tooltips">
      {props.auth.isAuthenticated() && <TooltipButton icon="clear" onClick={props.auth.logout} mini floating primary tooltip="logout"/>}
      <TooltipButton className="queerButton" icon='feedback' mini floating primary href={props.addDefinitionUrl} target="_blank" tooltip='define'/>
      <TooltipButton className="queerButton" icon='live_help' mini floating primary tooltip='request' href={props.requestDefinitionUrl} target="_blank" />
      <TooltipButton className="queerButton" icon='info' onClick={props.aboutOnClick} mini floating primary tooltip="info"/>

    </div>
  );
}

export { Tooltips };
