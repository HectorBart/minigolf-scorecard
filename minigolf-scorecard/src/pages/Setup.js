import styles from '../styles/pages/Setup.module.css';

import { Helmet } from 'react-helmet';
import { Card, Text, Row, Button } from '@nextui-org/react';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';

const SetupPage = () => {
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
              <Text h3>How many players are there?</Text>
            </Row>
            <Row className={styles.setupInput} justify="center">
              <Row justify="center">
                <Button auto size="xl" icon={<TiMinusOutline size={50}/>}></Button>
                <Text h1>1</Text>
                <Button auto size="xl" icon={<TiPlusOutline size={50}/>}></Button>
              </Row>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SetupPage;
