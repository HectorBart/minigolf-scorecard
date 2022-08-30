import styles from '../styles/components/SetupPlayers.module.css';

import { Text, Row, Table, Button } from '@nextui-org/react';
import { TiTrash, TiEdit, TiPlusOutline } from 'react-icons/ti';
import AddPlayerModal from './AddPlayerModal';
import { useState } from 'react';

const ScoreboardTable = (props) => {

    const columns = [
        {
            key: "name",
            label: "NAME",
        }
    ];

    for (let i = 0; i < props.players[0].scores.length; i++) {
        columns.push({
            key: i,
            label: `HOLE ${i + 1}`
        });
    }

    columns.push({
        key: "total",
        label: "TOTAL"
    });

    const renderCell = (player, columnKey) => {
        switch (columnKey) {
            case "name":
                return (
                    <Text>{player[columnKey]}</Text>
                );
            case "total":
                return (
                    <Text>{player.scores.reduce((a, b) => a + b, 0)}</Text>
                );
            default:
                return (
                    <Text>{player.scores[columnKey]}</Text>
                );
        }
    }

    return (
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
    );
}

export default ScoreboardTable;