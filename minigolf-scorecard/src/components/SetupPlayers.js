import styles from '../styles/components/SetupPlayers.module.css';

import { Text, Row, Table, Button } from '@nextui-org/react';
import { TiTrash, TiEdit, TiPlusOutline } from 'react-icons/ti';
import AddPlayerModal from './AddPlayerModal';
import { useState } from 'react';

const SetupPlayers = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    const columns = [
        {
            key: "name",
            label: "NAME",
        },
        {
            key: "actions",
            label: "ACTIONS"
        }
    ];

    const addPlayerName = (playerName) => {
        setModalVisible(false);
        props.addPlayer(playerName);
    }

    const addPlayerAction = () => {
        setModalVisible(true);
    }

    const renderCell = (player, columnKey) => {
        const cellValue = player[columnKey];
        switch (columnKey) {
            case "name":
                return (
                    <Text>{cellValue}</Text>
                );
            case "actions":
                return (
                    <Button.Group
                        className={styles.setupPlayersTableActions}
                        size="xs"
                        vertical
                        bordered
                        color="gradient"
                    >
                        <Button
                            icon={<TiEdit size={20}/>}
                        />
                        <Button
                            icon={<TiTrash size={20}/>}
                            onPress={() => props.removePlayer(player.key)}
                        />
                    </Button.Group>
                );
            default:
                return (
                    <Text>{cellValue}</Text>
                );
        }
    }

    return (
        <>
            <Row className={styles.setupHint} justify="center">
                <Text h3>Who's playing?</Text>
            </Row>
            <Row className={styles.setupPlayersTableRow} justify="center">
                <Table 
                    className={styles.setupPlayersTable}
                    containerCss={{
                        height: '45vh',
                        overflowY: 'scroll'
                    }}
                >
                    <Table.Header columns={columns}>
                        {(c) => (
                        <Table.Column 
                            key={c.key}
                            hideHeader={c.key === "actions"}
                            align={c.key === "actions" ? "end" : "start"}
                        >{c.label}
                        </Table.Column>
                        )}
                    </Table.Header>
                    <Table.Body items={props.players}>
                        {(p) => (
                        <Table.Row key={p.key}>
                            {(columnKey) => <Table.Cell>{renderCell(p, columnKey)}</Table.Cell>}
                        </Table.Row>
                        )}
                    </Table.Body>
                </Table>
            </Row>
            <Row className={styles.setupPlayersButton} justify="center">
                <Button
                    size="lg"
                    icon={<TiPlusOutline size={30} />}
                    onPress={() => addPlayerAction()}
                />
            </Row>

            <AddPlayerModal 
                visible={modalVisible}
                closeHandler={() => setModalVisible(false)}
                submitHandler={(playerName) => addPlayerName(playerName)}
            />
        </>
    );
}

export default SetupPlayers;