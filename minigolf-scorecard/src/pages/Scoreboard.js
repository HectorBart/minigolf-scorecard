import styles from '../styles/pages/Setup.module.css';

import { Helmet } from 'react-helmet';
import { Card, Text, Row, Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { TiArrowRepeatOutline } from 'react-icons/ti';
import ScoreboardTable from '../components/ScoreboardTable';

const ScoreboardPage = (props) => {

  const [leader, setLeader] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCurrentLeader = () => {
    let currentLeader = null;
    for (let i = 0; i < props.players.length; i++) 
    {
      console.log(currentLeader);

      const player = props.players[i];
      let score = player.scores.reduce((a, b) => a + b, 0);
      if (currentLeader?.score > score || !currentLeader) 
      {
        currentLeader = {
          name: player.name,
          score: score
        };
      } else if (currentLeader?.score === score) {
        currentLeader = {
          name: `${currentLeader.name} & ${player.name}`,
          score: score
        };
      }
    }
    setLoading(false);
    setLeader(currentLeader);
  }

  useEffect(() => getCurrentLeader(), []);

  return (
    <>
      <Helmet>
        <title>Minigolf Scorecard | Scoreboard</title>
      </Helmet>

      <div className={styles.container}>        
        <Card className={styles.card}>          
          <Card.Header>
            <Row justify="center">
              <Text className={styles.cardTitle} h1>Scoreboard</Text>
            </Row>
          </Card.Header>
          <Card.Body>
            <Row justify="center">
              <ScoreboardTable
                players={props.players}
              />
            </Row>
            <Row
              className={styles.setupStepButtons}
            >
              <Text 
                h2
                css={{
                  marginTop: "3rem",
                  textGradient: "45deg, $pink600 -20%, $yellow600 50%",
                }}
              >
                {
                  loading 
                  ? "Loading..."
                  : `Well done ${leader.name}!`
                }
              </Text>
            </Row>
            <Row
              className={styles.setupStepButtons}
            >
              <Button
                className={styles.setupPrevious}
                size="sm"
                icon={<TiArrowRepeatOutline size={50}/>}
                onPress={() => window.location.reload()}
              />
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ScoreboardPage;
