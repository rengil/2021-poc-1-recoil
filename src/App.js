import React from 'react';
import { RecoilRoot } from 'recoil';

import Teams from './teams/teams.presentation';

function App() {
  return (
    <RecoilRoot>
      <Teams />
    </RecoilRoot>
  );
}

export default App;
