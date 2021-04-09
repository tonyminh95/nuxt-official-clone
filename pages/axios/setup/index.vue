<template>
  <div>
    <h1>Setup</h1>

    <h2 class="border-b pb-3">Install</h2>

    <p>
      Add <box-highlight>@nuxtjs/axios</box-highlight> dependency to your
      project:
    </p>

    <box-code>
      <div>
        <span class="text-purple-400">yarn add</span>
        <span class="text-gray-300">@nuxtjs/axios</span>
      </div>
    </box-code>

    <p>
      Then add it to the
      <box-highlight>modules</box-highlight> section in your
      <box-highlight>nuxt.config.js</box-highlight>:
    </p>

    <box-code>
      <template slot="header">
        <div>nuxt.config.js</div>
      </template>
      <div>
        <span class="italic text-purple-400">export default</span>
        <span class="text-blue-400">{</span>
      </div>
      <div>
        <span class="ml-4 text-gray-300">modules:</span>
        <span class="text-blue-400">[</span>
        <span class="text-green-400">'@nuxtjs/axios'</span>
        <span class="text-blue-400">]</span>
      </div>
      <div><span class="text-blue-400">}</span></div>
    </box-code>

    <notification-inline type="success">
      <div>
        <span class="text-green-700">
          That's it! You can now use
          <nuxt-link to="usage" class="underline text-green-900">
            $axios
          </nuxt-link>
          in your Nuxt app
        </span>
        ✨
      </div>
    </notification-inline>

    <h2 class="mt-12">Configure</h2>

    <p>
      Add an <box-highlight>axios</box-highlight> object to your
      <box-highlight>nuxt.config.js</box-highlight> to configure global options
      which will be applied to all requests:
    </p>

    <box-code>
      <template slot="header">
        <div>nuxt.config.js</div>
      </template>
      <div>
        <span class="italic text-purple-400">export default</span>
        <span class="text-blue-400">{</span>
      </div>
      <div class="ml-4">
        <span class="text-gray-300">modules:</span>
        <span class="text-blue-400">[</span>
        <div class="ml-4 text-green-400">'@nuxtjs/axios'</div>
        <span class="text-blue-400">],</span>
      </div>
      <div class="ml-4 mt-4">
        <span class="text-gray-300">axios:</span>
        <span class="text-blue-400">{</span>
        <div class="ml-4 text-gray-500">// proxy: true</div>
        <span class="text-blue-400">}</span>
      </div>
      <div><span class="text-blue-400">}</span></div>
    </box-code>

    <p>
      Learn more about
      <nuxt-link to="options" class="text-purple-500 underline">
        axios's options
      </nuxt-link>
      .
    </p>

    <h2 class="mt-12">TypeScript</h2>

    <p>
      Add the types to your "types" array in
      <box-highlight>tsconfig.json</box-highlight> after the
      <box-highlight>@nuxt/types</box-highlight> (Nuxt 2.9.0+) or
      <box-highlight>@nuxt/vue-app</box-highlight> entry
    </p>

    <box-code>
      <template slot="header">
        <div>tsconfig.json</div>
      </template>
      <div><span class="text-blue-400">{</span></div>
      <div class="ml-4">
        <div class="text-gray-300">
          "compilerOptions": <span class="text-blue-400">{</span>
        </div>
        <div class="text-gray-300 ml-4">
          "types":
          <span class="text-blue-400">[</span>
          <div class="ml-4 text-green-400">
            <div>"@nuxt/types",</div>
            <div>"@nuxtjs/axios"</div>
          </div>
          <span class="text-blue-400">]</span>
        </div>
        <span class="text-blue-400">}</span>
      </div>
      <div><span class="text-blue-400">}</span></div>
    </box-code>

    <div class="px-4 py-2 border-gray-300 border-l-4">
      <div class="font-semibold">Why?</div>
      <div class="mt-4 text-gray-500">
        Because of the way Nuxt works the
        <box-highlight>$axios</box-highlight> property on the context has to be
        merged into the Nuxt <box-highlight>Context</box-highlight> interface
        via
        <a
          href="https://www.typescriptlang.org/docs/handbook/declaration-merging.html"
          class="text-purple-500 underline outline-none"
          target="_blank"
        >
          declaration merging
        </a>
        . Adding <box-highlight>@nuxtjs/axios</box-highlight> to your types will
        import the types from the package and make typescript aware of the
        additions to the <box-highlight>Context</box-highlight> interface.
      </div>
    </div>

    <footer-link-github
      class="mt-4"
      link="https://github.com/nuxt-community/axios-module/edit/main/docs/content/en/setup.md"
    />
  </div>
</template>

<script>
export default {
  layout: 'axios',
}
</script>
