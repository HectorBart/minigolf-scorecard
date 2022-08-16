import styles from '../styles/components/LargeNumberInput.module.css';

import { Text, Row, Button } from '@nextui-org/react';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';

const LargeNumberInput = (props) => {
    return (
        <Row justify="center">
            <Button 
                auto
                size="xl"
                icon={<TiMinusOutline size={50}/>}
                onPress={() => props.onChange(props.value > props.min ? props.value - 1 : props.min)}
                disabled={props.value === props.min ? true : false}
            />
            <Text 
                h1
                className={styles.value}
            >{props.value || props.min || 0}</Text>
            <Button
                auto
                size="xl"
                icon={<TiPlusOutline size={50}/>}
                onPress={() => props.onChange(props.value < props.max ? props.value + 1 : props.max)}
                disabled={props.value === props.max ? true : false}
            />
        </Row>
    );
}

export default LargeNumberInput;