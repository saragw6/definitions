import React from 'react';

import { add_definition_url } from "../urls";

const DefineForm = () => {
    return(
      <div className="define-form">
      <iframe src={{add_definition_url}} width="80%" height="1364px" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
      </div>
    );
}

export default DefineForm;
