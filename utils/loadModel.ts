import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface ModelOptions {
  recieveShadow: boolean
  castShadow: boolean
}

export default function loadModel(
  scene: THREE.Scene,
  glbPath: string,
  options: ModelOptions = { recieveShadow: true, castShadow: true },
) {
  const { recieveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = recieveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = castShadow
            child.receiveShadow = recieveShadow
          }
        })
        resolve(obj)
      },
      undefined,
      (error) => {
        reject(error)
      },
    )
  })
}
