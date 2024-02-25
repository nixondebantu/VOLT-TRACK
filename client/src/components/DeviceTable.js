import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import React from 'react';

function DeviceTable(props) {
    const devices = props.devices;

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHead>
                    <TableHeadCell>Device</TableHeadCell>
                    <TableHeadCell>Power(kW-h)</TableHeadCell>
                    <TableHeadCell>Amount</TableHeadCell>
                    <TableHeadCell>Average Daily Usage (hour)</TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                    {devices.map((device, index) => (
                        <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {device.device}
                            </TableCell>
                            <TableCell>{device.power}</TableCell>
                            <TableCell>{device.quantity}</TableCell>
                            <TableCell>{device.dailyUsage}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default DeviceTable;
