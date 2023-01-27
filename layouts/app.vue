<template>
  <div bg-zinc-900>
    <div font-mono lt-lg:min-h-screen lg:h-screen pb-12 lg:overflow-y-hidden text-white flex="~ col">
      <nav flex-shrink-0>
        <Navbar />
      </nav>
      <main pb-22 flex-1 h-screen lg:max-h-full w-full p-4 max-w-7xl mx-auto gap-4 grid="~ cols-1 lg:cols-12">
        <div overflow="auto" lg:col-span-10 h-full>
          <slot />
        </div>
        <div lg:col-span-2 flex flex-col justify="between" items-center gap-4>
          <UserCard />
          <Footer :break="true" />
        </div>
      </main>
    </div>
  </div>
</template>
