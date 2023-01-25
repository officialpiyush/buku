<script setup lang="ts">
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'

const loading = ref(true)
const req = ref<number | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const rendererRef = ref<THREE.WebGLRenderer | null>(null)

function easeOutCirc(x: number) {
  return Math.sqrt(1 - (x - 1) ** 4)
}

const onResize = () => {
  const container = containerRef.value
  const renderer = rendererRef.value

  if (!container || !renderer)
    return

  const { clientWidth, clientHeight } = container

  renderer.setSize(clientWidth, clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
}

const displayDog = () => {
  const container = containerRef.value

  if (container) {
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(containerWidth, containerHeight)
    renderer.outputEncoding = THREE.sRGBEncoding
    containerRef.value?.appendChild(renderer.domElement)
    rendererRef.value = renderer

    const scene = new THREE.Scene()
    const target = new THREE.Vector3(-0.5, 1.2, 0)
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI),
    )

    const scale = containerHeight * 0.00000001 + 4.8
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000,
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    const ambientLight = new THREE.AmbientLight(0xCCCCCC, 1)
    scene.add(ambientLight)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target = target

    let frame = 0
    const animate = () => {
      req.value = requestAnimationFrame(animate)
      frame = frame <= 140 ? frame + 1 : frame

      if (frame <= 140) {
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame / 140) * Math.PI * 20

        camera.position.y = 10
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      }

      renderer.render(scene, camera)
    }

    loadModel(scene, '/dog.glb', {
      recieveShadow: false,
      castShadow: false,
    }).then(() => {
      animate()
      loading.value = false
    })
  }

  window.addEventListener('resize', onResize)
}

watch(containerRef, (newRef, oldRef) => {
  if (import.meta.env.SSR)
    return
  if (!newRef || newRef === oldRef)
    return

  displayDog()
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  cancelAnimationFrame(req.value!)
  rendererRef.value?.domElement.remove()
  rendererRef.value?.dispose()
})
</script>

<template>
  <div h-xs w-xs lg:h-xl lg:w-xl relative>
    <ClientOnly>
      <div h-full w-full>
        <div v-if="loading" text-gray-400 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center>
          <div h-12 w-12 lg="h-18 w-18" animate-spin animate-duration-200 i-ri-loader-line />
        </div>
        <div ref="containerRef" h-full w-full />
      </div>

      <template #fallback>
        <div absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center>
          <img h-12 w-12 lg="h-18 w-18" animate-spin animate-duration-200 i-ri-loader-line>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<style scoped>

</style>
