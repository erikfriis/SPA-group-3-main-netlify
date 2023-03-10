/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 drone.gltf --transform
*/
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/drone-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Battery.geometry} material={materials['Material #17.021']} position={[0.2, 17.52, -37.47]} />
      <group position={[-50.2, 28.23, -49.98]}>
        <mesh geometry={nodes.Mesh037.geometry} material={materials['Material #17.021']} />
        <mesh geometry={nodes.Mesh037_1.geometry} material={materials['Top.004']} />
      </group>
      <group position={[-50.2, 28.23, 50.21]}>
        <mesh geometry={nodes.Mesh037.geometry} material={materials['Material #17.021']} />
        <mesh geometry={nodes.Mesh037_1.geometry} material={materials['Top.004']} />
      </group>
      <group position={[50.2, 28.23, -49.98]}>
        <mesh geometry={nodes.Mesh037.geometry} material={materials['Material #17.021']} />
        <mesh geometry={nodes.Mesh037_1.geometry} material={materials['Top.004']} />
      </group>
      <group position={[50.2, 28.23, 50.21]}>
        <mesh geometry={nodes.Mesh037.geometry} material={materials['Material #17.021']} />
        <mesh geometry={nodes.Mesh037_1.geometry} material={materials['Top.004']} />
      </group>
      <mesh geometry={nodes.GEO_Lens_02.geometry} material={materials['Material #17.023']} position={[2.77, -16.77, 18.61]} />
      <mesh geometry={nodes.GEO_Lens_01.geometry} material={materials['Material #17.023']} position={[2.77, -16.77, 18.61]} />
      <mesh geometry={nodes.GEO_Base_04.geometry} material={materials['Material #17.021']} position={[-50.2, 19.62, -49.98]} />
      <mesh geometry={nodes.GEO_Base_03.geometry} material={materials['Material #17.021']} position={[50.19, 19.62, -49.98]} />
      <mesh geometry={nodes.GEO_Base_02.geometry} material={materials['Material #17.021']} position={[-50.2, 19.62, 50.21]} />
      <mesh geometry={nodes.GEO_Base_01.geometry} material={materials['Material #17.021']} position={[50.19, 19.62, 50.21]} />
      <mesh geometry={nodes.GEO_Support_01.geometry} material={materials['Material #17.021']} position={[0, 5.77, 0]} />
      <mesh geometry={nodes.GEO_Support_02.geometry} material={materials['Material #17.021']} position={[0, -1.79, 0]} />
      <mesh geometry={nodes.GEO_Lathe_01.geometry} material={materials['Material #17.021']} position={[0, 0.79, 0]} />
      <mesh geometry={nodes.GEO_Lathe_02.geometry} material={materials['Material #17.021']} position={[0, 0.79, 0]} />
      <mesh geometry={nodes.GEO_Lathe_03.geometry} material={materials['Material #17.021']} position={[0, 0.79, 0]} />
      <mesh geometry={nodes.GEO_Lathe_04.geometry} material={materials['Material #17.021']} position={[0, 0.79, 0]} />
      <mesh geometry={nodes.GEO_Camera_Part_011.geometry} material={materials['Material #17.021']} position={[0, -6.53, 0]} />
      <mesh geometry={nodes.GEO_Camera_Part_012.geometry} material={materials['Material #17.021']} position={[0.04, -16.75, 0]} />
      <mesh geometry={nodes.GEO_Camera_Part_013.geometry} material={materials['Material #17.021']} position={[-12.19, -16.77, 10.09]} />
      <mesh geometry={nodes.GEO_Camera_Part_014.geometry} material={materials['Material #17.021']} position={[-4.56, -16.77, 10.09]} />
      <mesh geometry={nodes.GEO_Camera_Part_015.geometry} material={materials['Material #17.021']} position={[0.22, -16.77, 10.09]} />
      <mesh geometry={nodes.GEO_Camera_Part_016.geometry} material={materials['Material #17.021']} position={[2.77, -16.77, 10.09]} />
      <mesh geometry={nodes.GEO_Camera_Part_017.geometry} material={materials['Material #17.021']} position={[-0.22, 4.73, 0]} />
      <mesh geometry={nodes.GEO_Camera_Part_018.geometry} material={materials['Material #17.021']} position={[2.77, -16.77, 10.09]} />
      <mesh geometry={nodes.GEO_Camera_Part_019.geometry} material={materials['Material #17.021']} position={[0.04, 9.17, 13.05]} />
      <mesh geometry={nodes.GEO_Camera_Part_020.geometry} material={materials['Material #17.021']} position={[0, -14.8, -6.31]} />
      <mesh geometry={nodes.GEO_Computer.geometry} material={materials['Material #17.021']} position={[0, -0.29, 0]} />
      <mesh geometry={nodes.Green_Light.geometry} material={materials['Material #5.001']} position={[0.33, 17.52, -37.47]} />
      <mesh geometry={nodes.GEO_Main_Body.geometry} material={materials['Material #4.001']} position={[0, 27.29, 0]} />
      <mesh geometry={nodes.Legs.geometry} material={materials['Material #17.041']} position={[0, 27.46, -0.17]} />
      <mesh geometry={nodes.GEO_Wires_01.geometry} material={materials['Material #61.001']} position={[-4.47, 2.22, 0.37]} />
      <mesh geometry={nodes.GEO_Wires_02.geometry} material={materials['Material #61.001']} position={[-3.93, 2.22, 0.18]} />
      <mesh geometry={nodes.GEO_Wires_03.geometry} material={materials['Material #61.001']} position={[-3.48, 2.22, 0.44]} />
      <mesh geometry={nodes.GEO_Wires_04.geometry} material={materials['Material #61.001']} position={[-2.59, 2.22, 0.6]} />
      <mesh geometry={nodes.GEO_Wires_05.geometry} material={materials['Material #61.001']} position={[-1.45, 2.73, 0.05]} />
    </group>
  )
}

useGLTF.preload('/drone-transformed.glb')

export default Model