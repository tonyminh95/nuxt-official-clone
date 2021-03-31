<template>
  <div>
    <h1 class="capitalize text-3xl">setup</h1>

    <ul class="mt-5 text-lg text-green-500 underline list-disc list-inside">
      <li class="py-2 cursor-pointer" @click="scrollTo('installation')">
        Installation
      </li>

      <li class="py-2 cursor-pointer" @click="scrollTo('typescript')">
        Using with TypeScript
      </li>
    </ul>

    <div class="boder border-b mt-5"></div>

    <h2 id="installation" class="capitalize text-xl mt-5">Installation</h2>

    <TheNotice class="mt-4" color="blue" />
    <TheNotice class="mt-4" color="green" />
    <TheNotice class="mt-4" color="red" />

    <div class="boder border-b mt-5"></div>

    <h2 id="typescript" class="capitalize text-xl mt-5">
      Using with TypeScript
    </h2>
  </div>
</template>

<script>
export default {
  layout: 'auth',

  methods: {
    scrollTo(position) {
      this.$el.querySelector(`#${position}`).scrollIntoView()
    },
  },
}
</script>
