import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NhostClient, NhostReactProvider } from '@nhost/react';
import { Toaster } from 'react-hot-toast';
import { NhostApolloProvider } from '@nhost/react-apollo'
import { NextUIProvider } from '@nextui-org/react';
import { useState } from 'react';

import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Setup from './pages/Setup';
import Match from './pages/Match';

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION
});

function App() {

  const [setupStep, setSetupStep] = useState(1);
  const [numberOfHoles, setNumberOfHoles] = useState(1);
  const [players, setPlayers] = useState([]);

  const addPlayer = (playerName) => {
    setPlayers([...players, { 
      key: players.length === 0 
      ? 1 
      : players[players.length - 1].key + 1,
      name: playerName 
    }]);
  }

  const removePlayer = (playerKey) => {
    // 'players' is not up-to-date at this point for some reason?
    setPlayers([...players.splice(players.findIndex(p => p.key === playerKey), 1)]);
  }

  const updatePlayer = (player) => {
    setPlayers([...players.splice(players.findIndex(p => p.key === player.key), 1, player)]);
  }

  return (
    <NextUIProvider>
      <NhostReactProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost}>
          <BrowserRouter>
            <Routes>
              <Route path="sign-up" element={<SignUp />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route
                path=""
                element={
                  // <ProtectedRoute>
                  //   <Layout />
                  // </ProtectedRoute>
                  setupStep !== 3 ?
                    <Setup
                      numberOfHoles={numberOfHoles}
                      players={players}
                      setupStep={setupStep}
                      setSetupStep={(s) => setSetupStep(s)}
                      addPlayer={(playerName) => addPlayer(playerName)}
                      removePlayer={(playerKey) => removePlayer(playerKey)}
                      updatePlayer={(player) => updatePlayer(player)}
                      setNumberOfHoles={(no) => setNumberOfHoles(no)}
                    />
                  :
                    <Match
                      numberOfHoles={numberOfHoles}
                      players={players}
                    />
                }
              >
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="setup" element={<Setup numberOfHoles={numberOfHoles} players={players} />} />
                <Route path="match" element={<Match numberOfHoles={numberOfHoles} players={players} />} />
              </Route>
            </Routes>
          </BrowserRouter>

          <Toaster />
        </NhostApolloProvider>
      </NhostReactProvider>
    </NextUIProvider>
  );
}

export default App;
