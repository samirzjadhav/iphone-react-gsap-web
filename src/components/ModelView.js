import React from "react";
import { View, PerspectiveCamera } from "@react-three/drei";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-600 w-full h-full ${
        index === 2
      } ? 'right-[-100%] : ''`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera />
    </View>
  );
};

export default ModelView;
