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
            ></Button>
            <Text h1>{props.value || 0}</Text>
            <Button
                auto
                size="xl"
                icon={<TiPlusOutline size={50}/>}
                onPress={() => props.onChange(props.value + 1)}
            ></Button>
        </Row>
    );
}

export default LargeNumberInput;