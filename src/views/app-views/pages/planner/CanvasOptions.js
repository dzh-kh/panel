import { useState, useEffect } from "react";
import items from "../../../../assets/images/canvas-items";
import { Row, Button, Card, Input } from "antd";

const ItemList = ({ items }) => {
  const itemList = items.map((item, index) => {
    return <img key={index} src={item} draggable="true" />;
  });
  return <Row id="drag-items">{itemList}</Row>;
};

const CanvasOptions = ({ selectedShape }) => {
  const [activeTab, setActiveTab] = useState("tables");
  const [isActive, setIsActive] = useState(false);
  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const contentList = {};
  tabList.forEach(
    (tab) => (contentList[tab.key] = <ItemList items={items[tab.key]} />)
  );

  return (
    <>
      <Card
        style={{ width: "100%", marginBottom: "20px" }}
        tabList={tabList}
        activeTabKey={activeTab}
        onTabChange={handleTabChange}
      >
        {contentList[activeTab]}
      </Card>
      <ParamsCard
        selectedShape={selectedShape}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <ControllersCard isActive={isActive} />
    </>
  );
};

export default CanvasOptions;

const ParamsCard = ({ selectedShape, isActive, setIsActive }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rotation, setRotation] = useState(0);
  const paramStates = { x, y, width, height, rotation };
  const paramSetStates = {
    x: setX,
    y: setY,
    width: setWidth,
    height: setHeight,
    rotation: setRotation,
  };
  useEffect(() => {
    if (selectedShape) {
      setIsActive(true);
      const { x, y, width, height, rotation } = selectedShape.attrs;
      setX(x);
      setY(y);
      setWidth(width);
      setHeight(height);
      setRotation(rotation);
    } else {
      setIsActive(false);
      setX(0);
      setY(0);
      setWidth(0);
      setHeight(0);
      setRotation(0);
    }
  }, [selectedShape]);

  const setAttrs = (param, value) => {
    selectedShape.setAttrs({ ...selectedShape.attrs, [param]: value });
    const setState = paramSetStates[param];
    setState(value);
  };

  const inputs = inputList.map((input) => {
    const { value, min, key } = input;
    const handler = (e) => {
      setAttrs(value, +e.target.value);
    };
    return (
      <label key={key}>
        {value}
        <Input
          onChange={handler}
          disabled={!isActive}
          type="number"
          placeholder="0"
          min={min}
          value={paramStates[value]}
        />
      </label>
    );
  });

  return (
    <Card title="Current Element Params" bordered={false}>
      <div className="item-params item-params__wrapper">{inputs}</div>
    </Card>
  );
};

const ControllersCard = ({ isActive }) => {
  return (
    <div className="controller-group">
      <Button id="save-items" type="primary">
        Load
      </Button>
      <Button disabled={!isActive} id="delete-element" type="primary" ghost>
        Delete element
      </Button>
      <Button id="delete-all" danger>
        Clear canvas
      </Button>
      <div className="file-input">
        <input
          type="file"
          name="json-uploader"
          id="json-uploader"
          className="file-input__input"
        />
        <label className="file-input__label" htmlFor="json-uploader">
          <span>Upload file</span>
        </label>
      </div>
    </div>
  );
};

export const inputList = [
  {
    key: "1",
    value: "x",
    min: 0,
  },
  {
    key: "2",
    value: "y",
    min: 0,
  },
  {
    key: "3",
    value: "width",
    min: 0,
  },
  {
    key: "4",
    value: "height",
    min: 0,
  },
  {
    key: "5",
    value: "rotation",
  },
];

export const tabList = [
  {
    key: "tables",
    tab: `tables`,
  },
  {
    key: "sofas",
    tab: `sofas`,
  },
  {
    key: "dividers",
    tab: `dividers`,
  },
];
