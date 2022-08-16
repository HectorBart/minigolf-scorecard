import styles from '../styles/components/SetupHoles.module.css';

import { Text, Row } from '@nextui-org/react';
import LargeNumberInput from '../components/LargeNumberInput';

const SetupHoles = (props) => {
    return (
        <>
            <Row className={styles.setupHint} justify="center">
                <Text h3>How many holes are there?</Text>
            </Row>
            <Row className={styles.setupInput} justify="center">
                <LargeNumberInput
                value={props.numberOfHoles}
                max={99}
                min={1}
                onChange={(e) => props.setNumberOfHoles(e)}
                />
            </Row>
        </>
    );
}

export default SetupHoles;