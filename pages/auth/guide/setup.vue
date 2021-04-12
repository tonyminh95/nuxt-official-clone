<template>
  <div>
    <h1>Setup</h1>

    <h2>Installation</h2>

    <notification-inline type="information">
      Check the Nuxt.js documentation for more information about installing and
      using modules in Nuxt.js.
    </notification-inline>

    <p>
      Add
      <box-highlight>@nuxtjs/auth-next @nuxtjs/axios</box-highlight>
      dependencies to your project:
    </p>

    <box-tab></box-tab>

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
      <template slot="content"> </template>
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
  },
}
</script>
