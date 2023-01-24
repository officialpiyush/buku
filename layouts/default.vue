<template>
  <div bg-zinc-900>
    <div font-mono lt-lg:min-h-screen lg:h-screen pb-4 text-white flex="~ col">
      <nav flex-shrink-0>
        <Navbar />
      </nav>
      <main flex-1 py-4 max-w-7xl mx-auto>
        <slot />
      </main>
      <footer flex-shrink-0 />
    </div>
  </div>
</template>
