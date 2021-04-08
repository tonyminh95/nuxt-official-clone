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

    <TheNotice class="mt-6" color="blue">
      Check the Nuxt.js documentation for more information about installing and
      using modules in Nuxt.js.
    </TheNotice>














    <div class="mt-6">
      Add
      <span class="py-1 px-2 border border-gray-300 rounded bg-gray-100"
        >@nuxtjs/auth-next @nuxtjs/axios</span
      >
      dependencies to your project:
    </div>

    <BaseTabs class="mt-6" :tabs="['yarn', 'npm']">
      <template slot="yarn">
        <div class="py-2">
          <span class="text-purple-400">yarn add</span>
          <span class="text-gray-300">--exact @nuxtjs/auth-next</span>
        </div>
        <div class="py-2">
          <span class="text-purple-400">yarn add</span>
          <span class="text-gray-300">@nuxtjs/axios</span>
        </div>
      </template>

      <template slot="npm">
        <div class="py-2">
          <span class="text-purple-400">npm install </span>
          <span class="text-gray-300">--save-exact @nuxtjs/auth-next</span>
        </div>
        <div class="py-2">
          <span class="text-purple-400">npm install</span>
          <span class="text-gray-300">@nuxtjs/axios</span>
        </div>
      </template>
    </BaseTabs>

    <div class="mt-6">
      Then, add
      <span class="py-1 px-2 border border-gray-300 rounded bg-gray-100 mr-2"
        >@nuxtjs/auth-next</span
      >
      to the
      <span class="py-1 px-2 border border-gray-300 rounded bg-gray-100 mr-2"
        >modules</span
      >
      section of
      <span class="py-1 px-2 border border-gray-300 rounded bg-gray-100 mr-2"
        >nuxt.config.js</span
      >:
    </div>

    <BaseCodeView class="mt-6">
      <template slot="file-name"> nuxt.config.js </template>
      <template slot="content">
      </template>
    </BaseCodeView>

    <TheNotice class="mt-6" color="red">
      Check the Nuxt.js documentation for more information about installing and
      using modules in Nuxt.js.
    </TheNotice>




    <div class="boder border-b mt-5"></div>

    <h2 id="typescript" class="capitalize text-xl mt-5">
      Using with TypeScript
    </h2>
  </div>
</template>

<script>
export default {
  layout: 'auth',

  created() {
    console.log(this.$auth.loggedIn)
  },

  methods: {
    scrollTo(position) {
      this.$el.querySelector(`#${position}`).scrollIntoView()
    },
  }
}
</script>
