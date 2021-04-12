<template>
  <div>
    <h1>Facebook</h1>

    <a
      class="text-green-600 underline"
      href="https://github.com/nuxt-community/auth-module/blob/dev/src/providers/facebook/index.ts"
      target="_blank"
    >
      Source Code
    </a>

    <h2 class="mt-8">Usage</h2>

    <box-code>
      auth: { strategies: { facebook: { endpoints: { userInfo:
      'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}' },
      clientId: '...', scope: ['public_profile', 'email'] }, } }
    </box-code>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>
