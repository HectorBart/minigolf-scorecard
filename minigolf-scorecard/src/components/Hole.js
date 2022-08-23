import styles from '../styles/components/Hole.module.css';
import { Text, Row } from '@nextui-org/react';
import LargeNumberInput from '../components/LargeNumberInput';

const Hole = (props) => {
    return (
        <>
            <Row className={styles.playerHint} justify="center">
                <Text h3>{props.player?.name}'s Turn</Text>
            </Row>
            <Row className={styles.setupInput} justify="center">
                <LargeNumberInput
                value={props.numberOfHits}
                max={99}
                min={1}
                onChange={(e) => props.setNumberOfHits(e)}
                />
            </Row>
        </>
    );
}

export default Hole;