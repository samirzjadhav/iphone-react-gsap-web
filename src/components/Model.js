import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import ModelView from "./ModelView";
import { useState } from "react";
import { yellowImg } from "../utils";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8f8a81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // Camera Control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // Model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setlargeRotation] = useState(0);

  useGSAP(() => {
    gsap.to(
      "#heading",
      {
        y: 0,
        opacity: 1,
      },
      []
    );
  });

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
