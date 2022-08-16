import styles from '../styles/pages/Setup.module.css';

import { Helmet } from 'react-helmet';
import { Card, Text, Row, Button } from '@nextui-org/react';
import { useState } from 'react';
import { TiArrowRightOutline } from 'react-icons/ti';
import SetupHoles from '../components/SetupHoles';
import SetupPlayers from '../components/SetupPlayers';

const SetupPage = () => {

  const [numberOfHoles, setNumberOfHoles] = useState(1);
  const [players, setPlayers] = useState([
    {
      key: "1",
      name: "Hector"
    },
    {
      key: "2",
      name: "Bob"
    },
  ]);
  const [setupStep, setSetupStep] = useState(1);

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
                setPlayers={setPlayers}
              />
              </>
            }
            <Row className={styles.setupNext} justify="center">
              <Button
                size="xl"
                icon={<TiArrowRightOutline size={50}/>}
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
