<template>
  <div font-mono h-screen pb-4 bg-zinc-900 text-white>
    <nav>
      <Navbar />
    </nav>
    <main py-4 max-w-7xl mx-auto>
      <slot />
    </main>
    <footer />
  </div>
</template>
