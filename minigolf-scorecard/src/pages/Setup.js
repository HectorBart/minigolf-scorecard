import styles from '../styles/pages/Setup.module.css';

import { Helmet } from 'react-helmet';
import { Card, Text, Row, Button } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { TiArrowRightOutline, TiArrowLeftOutline } from 'react-icons/ti';
import { TbGolf } from 'react-icons/tb';
import SetupHoles from '../components/SetupHoles';
import SetupPlayers from '../components/SetupPlayers';

const SetupPage = () => {

  const [numberOfHoles, setNumberOfHoles] = useState(1);
  const [players, setPlayers] = useState([]);
  const [setupStep, setSetupStep] = useState(1);

  useEffect(() => { // this hook will get called everytime when myArr has changed
    // perform some action which will get fired everytime when myArr gets updated
       console.log('Updated State', players)
  }, [players])

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
    <>
      <Helmet>
        <title>Scorecard Setup</title>
      </Helmet>

      <div className={styles.container}>        
        <Card className={styles.card}>          
          <Card.Header>
            <Row justify="center">
              <Text className={styles.cardTitle} h1>Scorecard Setup</Text>
            </Row>
          </Card.Header>
          <Card.Body>
            { setupStep === 1 ?
              <SetupHoles
                numberOfHoles={numberOfHoles}
                setNumberOfHoles={setNumberOfHoles}
              />
              :
              <>
              <SetupPlayers
                players={players}
                addPlayer={(playerName) => addPlayer(playerName)}
                removePlayer={(playerKey) => removePlayer(playerKey)}
                updatePlayer={(player) => updatePlayer(player)}
              />
              </>
            }
            <Row
              className={styles.setupStepButtons}
            >
              <Button
                className={styles.setupPrevious}
                size="sm"
                icon={<TiArrowLeftOutline size={50}/>}
                onPress={() => setSetupStep(setupStep - 1)}
                disabled={setupStep === 1}
              />
              <Button
                className={styles.setupNext}
                size="sm"
                icon={setupStep === 1
                ? <TiArrowRightOutline size={50}/>
                : <TbGolf size={50}/>}
                onPress={() => setSetupStep(setupStep + 1)}
              />
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SetupPage;
