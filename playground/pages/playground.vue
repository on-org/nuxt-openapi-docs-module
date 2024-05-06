<template>
  <div class="h-[calc(100vh-var(--header-height))] flex dark:bg-gray-950" style="width: 100%; height: 800px">
    <ClientOnly>
      <iframe
        class="dark:bg-gray-950"
        :src="`https://stackblitz.com/edit/github-j7idul?embed=1&file=README.md`"
        width="100%"
        height="100%"
      />
    </ClientOnly>
  </div>
</template>
