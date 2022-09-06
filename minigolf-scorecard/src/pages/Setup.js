import styles from '../styles/pages/Setup.module.css';

import { Helmet } from 'react-helmet';
import { Card, Text, Row, Button } from '@nextui-org/react';
import { TiArrowRightOutline, TiArrowLeftOutline } from 'react-icons/ti';
import { TbGolf } from 'react-icons/tb';
import SetupHoles from '../components/SetupHoles';
import SetupPlayers from '../components/SetupPlayers';

const SetupPage = (props) => {
  return (
    <>
      <Helmet>
        <title>Minigolf Scorecard | Setup</title>
      </Helmet>

      <div className={styles.container}>        
        <Card className={styles.card}>          
          <Card.Header>
            <Row justify="center">
              <Text className={styles.cardTitle} h1>Scorecard Setup</Text>
            </Row>
          </Card.Header>
          <Card.Body>
            { props.setupStep === 1 ?
              <SetupHoles
                numberOfHoles={props.numberOfHoles}
                setNumberOfHoles={props.setNumberOfHoles}
              />
              :
              <SetupPlayers
                players={props.players}
                addPlayer={(playerName) => props.addPlayer(playerName)}
                removePlayer={(playerKey) => props.removePlayer(playerKey)}
                updatePlayer={(player) => props.updatePlayer(player)}
              />
            }
            <Row
              className={styles.setupStepButtons}
            >
              <Button
                className={styles.setupPrevious}
                size="sm"
                icon={<TiArrowLeftOutline size={50}/>}
                onPress={() => props.setSetupStep(props.setupStep - 1)}
                disabled={props.setupStep === 1}
              />
              <Button
                className={styles.setupNext}
                size="sm"
                icon={props.setupStep === 2
                ? <TbGolf size={50}/>
                : <TiArrowRightOutline size={50}/>}
                onPress={() => props.setSetupStep(props.setupStep + 1)}
                disabled={props.setupStep === 2 && props.players.length < 1
                ? true : false}
              />
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SetupPage;
