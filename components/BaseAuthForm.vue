<template>
  <div class="bg-white p-6 rounded-2xl w-1/4">
    <h1 class="text-xl mb-10">Sign In</h1>

    <div v-if="!isSignIn">
      <div>Full Name</div>
      <input
        type="text"
        class="w-full mt-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
      />
    </div>

    <div class="mt-5">
      <div>Email</div>
      <input
        type="email"
        class="w-full mt-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
      />
    </div>

    <div v-if="!isSignIn" class="mt-5">
      <div>Username</div>
      <input
        type="text"
        class="w-full mt-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
      />
    </div>

    <div class="mt-5">Password</div>
    <input
      type="password"
      class="w-full mt-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
    />

    <div v-if="!isSignIn" class="mt-5">
      <div>Confirm Password</div>
      <input
        type="password"
        class="w-full mt-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
      />
    </div>

    <div class="flex justify-between items-center mt-10">
      <button
        type="button"
        class="w-2/5 py-2 border border-blue-600 text-blue-600 rounded-full focus:outline-none hover:bg-blue-500 hover:text-white"
      >
        {{ isSignIn ? 'Sign In' : 'Sign Up' }}
      </button>

      <NuxtLink :to="toRoute" class="cursor-pointer mr-5">
        {{ isSignIn ? 'Sign Up' : 'Sign Ip' }} <span class="text-xl">→</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSignIn: {
      type: Boolean,
      requried: true,
    },
  },

  computed: {
    toRoute() {
      return this.isSignIn ? '/authentication/register' : 'authentication/login'
    },
  },
}
</script>
