<template>
  <div bg-zinc-900>
    <div font-mono min-h-screen pb-4 text-white flex="~ col">
      <nav flex-shrink-0>
        <Navbar />
      </nav>
      <main w-full flex-1 p-4 max-w-7xl mx-auto gap-4 grid="~ cols-1 lg:cols-12">
        <div lg:col-span-2>
          <UserCard />
        </div>
        <div lg:col-span-8>
          <slot />
        </div>
        <div lg:col-span-2 flex flex-col justify="end" items-center>
          <Footer :break="true" />
        </div>
      </main>
    </div>
  </div>
</template>
