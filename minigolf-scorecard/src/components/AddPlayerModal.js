import styles from '../styles/components/AddPlayerModal.module.css';

import { Text, Modal, Button, Row, Input } from '@nextui-org/react';
import { useState } from 'react';

const AddPlayerModal = (props) => {

    const [playerName, setPlayerName] = useState(props.player?.name);

    return (
        <Modal
            blur
            closeButton
            aria-labelledby="modal-title"
            open={props.visible}
            onClose={props.closeHandler}
            className={styles.addPlayerModal}
        >
            <Modal.Header>
                <Text h3>
                    Add Player
                </Text>
            </Modal.Header>
            <Modal.Body>
                <Row className={styles.addPlayerModalInputs}>
                    <Input
                        initialValue={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        fullWidth
                        placeholder="Name"
                        className={styles.addPlayerModalInput}
                    />
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    auto
                    color="error"
                    onPress={props.closeHandler}
                >
                    Cancel
                </Button>
                <Button 
                    auto
                    onPress={() => props.submitHandler(playerName)}
                >
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddPlayerModal;