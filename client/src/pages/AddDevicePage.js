import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import DeviceForm from '../components/DeviceForm';
import DeviceTable from '../components/DeviceTable';

function AddDevicePage() {
    const [deviceData, setDeviceData] = useState([]);

    const handleFormSubmit = (formData) => {
        setDeviceData(prevData => [...prevData, formData]);
    };

    return (
        <>
            <div className="flex justify-center my-5">
                <DeviceForm onSubmit={handleFormSubmit} />
            </div>
            <DeviceTable devices={deviceData} />
            <div className="flex justify-center my-5">
                <Button>Submit</Button>
            </div>

        </>
    );
}

export default AddDevicePage;
