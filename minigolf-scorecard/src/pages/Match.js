import styles from '../styles/pages/Setup.module.css';

import { Helmet } from 'react-helmet';
import { Card, Text, Row, Button } from '@nextui-org/react';
import { useState } from 'react';
import { TiArrowRightOutline, TiArrowLeftOutline } from 'react-icons/ti';
import Hole from '../components/Hole';

const MatchPage = (props) => {

  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [currentHole, setCurrentHole] = useState(1);
  const [numberOfHits, setNumberOfHits] = useState(1);

  const NextButtonHandler = () => {
    if (currentPlayer < (props.players.length - 1)) 
    {
      setCurrentPlayer(currentPlayer + 1);
      setNumberOfHits(1);
    } 
    else 
    {
      if (currentHole < props.numberOfHoles) 
      {
        setCurrentHole(currentHole + 1);
        setCurrentPlayer(0);
        setNumberOfHits(1);
      }
      else
      {
        console.log("Match Finished");
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>Match</title>
      </Helmet>

      <div className={styles.container}>        
        <Card className={styles.card}>          
          <Card.Header>
            <Row justify="center">
              <Text className={styles.cardTitle} h1>Hole {currentHole}</Text>
            </Row>
          </Card.Header>
          <Card.Body>
              <Hole
                player={props.players[currentPlayer]}
                numberOfHits={numberOfHits}
                setNumberOfHits={(hits) => setNumberOfHits(hits)}
              />
            <Row
              className={styles.setupStepButtons}
            >
              <Button
                className={styles.setupPrevious}
                size="sm"
                icon={<TiArrowLeftOutline size={50}/>}
                onPress={() => setCurrentPlayer(currentPlayer - 1)}
                disabled={currentPlayer === 0}
              />
              <Button
                className={styles.setupNext}
                size="sm"
                icon={<TiArrowRightOutline size={50}/>}
                onPress={() => NextButtonHandler()}
              />
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default MatchPage;
