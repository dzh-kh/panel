import React, { useEffect, useState } from "react";
import * as Konva from "konva";
import { Row, Col } from "antd";
import CanvasOptions from "./CanvasOptions";
import "antd/dist/antd.css";

const Planner = () => {
  const [selectedShape, setSelectedShape] = useState();
  useEffect(() => {
    const width = 990;
    const height = 480;

    var stage = new Konva.Stage({
      container: "container",
      width,
      height,
    });

    stage.getContainer().style.backgroundColor = "#242424";

    var layer = new Konva.Layer();

    var gridLayer = new Konva.Layer();

    function drawGrid(startX, startY, endX, endY, gridCellSize) {
      for (let y = startY; y <= endY; y += gridCellSize) {
        for (let x = startX; x <= endX; x += gridCellSize) {
          gridLayer.add(
            new Konva.Line({
              points: [startX, y, endX, y],
              stroke: "#e7e7e7",
              strokeWidth: 0.01,
            })
          );
        }

        for (let x = startX; x <= endX; x += gridCellSize) {
          gridLayer.add(
            new Konva.Line({
              points: [x, startY, x, endY],
              stroke: "#e7e7e7",
              strokeWidth: 0.01,
            })
          );
        }
      }
    }

    drawGrid(0, 0, width, height, 30);

    stage.add(gridLayer);
    stage.add(layer);

    let tr = new Konva.Transformer({
      centeredScaling: true,
      enabledAnchors: ["bottom-right"],
    });
    layer.add(tr);

    tr.on("dragend", () => {
      setSelectedShape("");
      setSelectedShape(currentItem);
    });

    const deleteItem = () => {
      currentItem.destroy();
      tr.nodes([]);
    };

    const deleteAllItems = () => {
      layer.destroyChildren();
      tr = new Konva.Transformer({
        centeredScaling: true,
        enabledAnchors: ["bottom-right"],
      });
      layer.add(tr);
    };

    const saveLayerItems = () => {
      const json = layer.toJSON();
      const a = document.createElement("a");
      const file = new Blob([json], { type: "text/plain" });
      a.href = URL.createObjectURL(file);
      a.download = "planner.json";
      a.click();
      a.remove();
    };

    const loadJson = (e) => {
      deleteAllItems();
      const files = e.target.files;
      const fr = new FileReader();
      fr.readAsText(files[0]);
      fr.onload = function () {
        const items = JSON.parse(fr.result);
        items.children.map((el) => {
          if (el.className === "Image") {
            addImage(el.attrs);
          }
        });
      };
    };

    document
      .getElementById("json-uploader")
      .addEventListener("change", loadJson);

    document
      .getElementById("save-items")
      .addEventListener("click", saveLayerItems);
    document
      .getElementById("delete-element")
      .addEventListener("click", deleteItem);

    document
      .getElementById("delete-all")
      .addEventListener("click", deleteAllItems);

    let itemWidth, itemHeight, itemSrc, shiftX, shiftY;
    document
      .getElementById("drag-items")
      .addEventListener("dragstart", function (e) {
        itemHeight = e.target.height;
        itemWidth = e.target.width;
        itemSrc = e.target.src;

        const coords = e.target.getBoundingClientRect();
        shiftX = e.pageX - coords.left;
        shiftY = e.pageY - coords.top;
      });

    var con = stage.container();
    con.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    let currentItem;

    stage.on("click", function (e) {
      currentItem = e.target;
      if (currentItem === stage) {
        tr.nodes([]);
        setSelectedShape("");
      } else {
        tr.nodes([currentItem]);
        setSelectedShape(currentItem);
      }
      layer.draw();
    });

    const addImage = (config) => {
      const { x, y, width, height, src, name, ...rest } = config;
      var imageObj = new Image();
      imageObj.src = src;
      imageObj.onload = function () {
        var image = new Konva.Image({
          x,
          y,
          image: imageObj,
          width,
          height,
          draggable: true,
          src: src,
          rotation: 0,
          name: name ? name : `${x * Math.random()}`,
          ...rest,
        });

        layer.add(image);
        image.on("dragmove", (e) => {
          const x = e.target.attrs.x;
          const y = e.target.attrs.y;
          const maxBottom = stage.attrs.height - e.target.attrs.height;
          const maxRight = stage.attrs.width - e.target.attrs.width;

          if (maxBottom - y < 0) e.target.attrs.y = maxBottom;
          if (maxRight - x < 0) e.target.attrs.x = maxRight;
          if (x < 0) e.target.attrs.x = 0;
          if (y < 0) e.target.attrs.y = 0;
        });

        image.on("transformend", function () {
          setSelectedShape("");
          currentItem.width(
            Math.max(5, currentItem.width() * currentItem.scaleX())
          );
          currentItem.height(
            Math.max(5, currentItem.height() * currentItem.scaleY())
          );
          currentItem.scaleX(1);
          currentItem.scaleY(1);
          setSelectedShape(currentItem);
        });
      };
    };

    con.addEventListener("drop", function (e) {
      e.preventDefault();
      stage.setPointersPositions(e);
      const { x, y } = stage.getPointerPosition();
      const xValue = x - shiftX;
      const yValue = y - shiftY;
      addImage({
        x: xValue,
        y: yValue,
        width: itemWidth,
        height: itemHeight,
        src: itemSrc,
      });
    });
  }, []);

  return (
    <Row gutter={30}>
      <Col md={{ span: 24 }} lg={{ span: 12 }}>
        <CanvasOptions selectedShape={selectedShape} />
      </Col>
      <Col md={{ span: 24 }} lg={{ span: 12 }}>
        <div id="container"></div>
      </Col>
    </Row>
  );
};
export default Planner;
