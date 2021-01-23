import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import TeamColor from './teams/pages/team-color.presentation';
import { CatFacts } from './cat-facts/cat-facts.presentations';
import { recoilPersist } from 'recoil-persist'
import RecoilLogger from 'recoil-logger'

const { RecoilPersist, updateState } = recoilPersist();

function App() {
  return (
   <RecoilRoot initializeState={updateState}>
      <RecoilPersist />
      <RecoilLogger />
      <BrowserRouter>
        <Route path="/teams/color" component={TeamColor} />
         <Route path="/cat-facts" component={CatFacts} />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
