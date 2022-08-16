import styles from '../styles/components/SetupPlayers.module.css';

import { Text, Row, Table, Button } from '@nextui-org/react';
import { TiTrash, TiEdit } from 'react-icons/ti';

const SetupPlayers = (props) => {

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
                        size="xs"
                        vertical
                        bordered
                        color="gradient"
                    >
                        <Button
                            auto
                            size="sm"
                            icon={<TiEdit size={20}/>}
                        />
                        <Button
                            auto
                            size="sm"
                            icon={<TiTrash size={20}/>}
                        />
                    </Button.Group>
                );
            default:
                return (
                    <></>
                );
        }
    }

    return (
        <>
            <Row className={styles.setupHint} justify="center">
                <Text h3>Who's playing?</Text>
            </Row>
            <Row className={styles.setupInput} justify="center">
                <Table>
                    <Table.Header columns={columns}>
                        {(c) => (
                        <Table.Column key={c.key}>{c.label}</Table.Column>
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
        </>
    );
}

export default SetupPlayers;