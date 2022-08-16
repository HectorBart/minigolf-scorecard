import styles from '../styles/pages/Setup.module.css';

import { Helmet } from 'react-helmet';
import { Card, Text, Row, Button } from '@nextui-org/react';
import LargeNumberInput from '../components/LargeNumberInput';
import { useState } from 'react';
import { TiArrowRightOutline } from 'react-icons/ti';

const SetupPage = () => {

  const [numberOfHoles, setNumberOfHoles] = useState(0);

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
            <Row className={styles.setupHint} justify="center">
              <Text h3>How many holes are there?</Text>
            </Row>
            <Row className={styles.setupInput} justify="center">
              <LargeNumberInput
                value={numberOfHoles}
                onChange={(e) => setNumberOfHoles(e)}
              />
            </Row>
            <Row className={styles.setupNext} justify="center">
              <Button
                size="xl"
                icon={<TiArrowRightOutline size={50}/>}
              />
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SetupPage;
