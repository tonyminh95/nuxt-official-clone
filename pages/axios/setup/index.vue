<template>
  <div>
    <h1>Setup</h1>

    <h2 class="border-b pb-3">Install</h2>

    <p>
      Add <boxes-highlight-box>@nuxtjs/axios</boxes-highlight-box> dependency to
      your project:
    </p>

    <boxes-code-box>
      <template slot="body">
        <div>
          <span class="text-purple-400">yarn add</span>
          <span class="text-gray-300">@nuxtjs/axios</span>
        </div>
      </template>
    </boxes-code-box>

    <h2 class="border-b pb-3">Configure</h2>

    <h2 class="border-b pb-3">TypeScript</h2>
  </div>
</template>

<script>
export default {
  layout: 'axios',
}
</script>
