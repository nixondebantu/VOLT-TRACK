import { Button, Dropdown, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { FaFan } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";
import { LuMicrowave } from "react-icons/lu";
import { MdIron } from "react-icons/md";
import { RiComputerFill, RiFridgeFill } from "react-icons/ri";
import { TbAirConditioningDisabled } from "react-icons/tb";

function DeviceForm({ onSubmit }) {
  const [selectedDevice, setSelectedDevice] = useState("Select Device");
  const [power, setPower] = useState("");
  const [quantity, setQuantity] = useState("");
  const [dailyUsage, setDailyUsage] = useState("");

  const handleDeviceSelection = (device) => {
    setSelectedDevice(device);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const deviceInfo = {
        device: selectedDevice,
        power: power,
        quantity: quantity,
        dailyUsage: dailyUsage,
    };
    onSubmit(deviceInfo);
    setSelectedDevice("Select Device");
    setPower("");
    setQuantity("");
    setDailyUsage("");
  };

  return (
    <div>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="device" value="Device" />
          </div>
          <Dropdown label={selectedDevice}>
            <Dropdown.Header>
              <span className="block text-sm">Select "Others" </span>
              <span className="block truncate text-sm font-medium">
                if your device is missing
              </span>
            </Dropdown.Header>
            <Dropdown.Item
              icon={FaLightbulb}
              onClick={() => handleDeviceSelection("Light")}
            >
              Light
            </Dropdown.Item>
            <Dropdown.Item
              icon={FaFan}
              onClick={() => handleDeviceSelection("Fan")}
            >
              Fan
            </Dropdown.Item>
            <Dropdown.Item
              icon={RiComputerFill}
              onClick={() => handleDeviceSelection("TV/Computer")}
            >
              TV/Computer
            </Dropdown.Item>
            <Dropdown.Item
              icon={TbAirConditioningDisabled}
              onClick={() => handleDeviceSelection("AC/Heater")}
            >
              AC/Heater
            </Dropdown.Item>
            <Dropdown.Item
              icon={RiFridgeFill}
              onClick={() => handleDeviceSelection("Refrigerator")}
            >
              Refrigerator
            </Dropdown.Item>
            <Dropdown.Item
              icon={LuMicrowave}
              onClick={() => handleDeviceSelection("Oven")}
            >
              Oven
            </Dropdown.Item>
            <Dropdown.Item
              icon={MdIron}
              onClick={() => handleDeviceSelection("Iron")}
            >
              Iron
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              icon={CgMenuGridR}
              onClick={() => handleDeviceSelection("Others")}
            >
              Others
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="number" value="Power" />
          </div>
          <TextInput
            id="power"
            type="number"
            placeholder="Device power in watt"
            required
            value={power}
            onChange={(e) => setPower(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="number" value="Quantity" />
          </div>
          <TextInput
            id="quantity"
            type="number"
            placeholder="Device quantity"
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="number" value="Daily Usage" />
          </div>
          <TextInput
            id="dailyUsage"
            type="number"
            placeholder="Daily usage time in hours"
            required
            value={dailyUsage}
            onChange={(e) => setDailyUsage(e.target.value)}
          />
        </div>
        <Button type="submit">Add Device</Button>
      </form>
    </div>
  );
}

export default DeviceForm;
