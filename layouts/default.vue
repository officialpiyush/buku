<template>
  <div bg-zinc-900>
    <div font-mono min-h-screen pb-4 text-white flex="~ col">
      <nav flex-shrink-0>
        <Navbar />
      </nav>
      <main flex-1 py-4 max-w-7xl mx-auto flex items-center justify-center>
        <slot />
      </main>
      <footer flex-shrink-0>
        <Footer />
      </footer>
    </div>
  </div>
</template>
