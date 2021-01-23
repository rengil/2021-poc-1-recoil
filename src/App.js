import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import TeamColor from './teams/pages/team-color.presentation';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Route path="/teams/color" component={TeamColor} />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
