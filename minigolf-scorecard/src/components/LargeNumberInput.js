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
                onPress={() => props.onChange(props.value - 1)}
            />
            <Text 
                h1
                className={styles.value}
            >{props.value || 0}</Text>
            <Button
                auto
                size="xl"
                icon={<TiPlusOutline size={50}/>}
                onPress={() => props.onChange(props.value + 1)}
            />
        </Row>
    );
}

export default LargeNumberInput;