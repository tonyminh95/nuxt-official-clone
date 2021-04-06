<template>
  <div class="bg-white p-6 rounded-2xl w-1/4">
    <h1 class="text-xl mb-10">Sign Up</h1>

    <div class="mt-10">Full Name</div>
    <input
      v-model="user.fullName"
      type="text"
      class="w-full mt-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
    />

    <div class="mt-5">Email</div>
    <input
      v-model="user.email"
      type="email"
      class="w-full mt-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
    />

    <div class="mt-5">Username</div>
    <input
      v-model="user.username"
      type="text"
      class="w-full mt-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
    />

    <div class="mt-5">Password</div>
    <input
      v-model="user.password"
      type="password"
      class="w-full mt-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
    />

    <div class="mt-5">Confirm Password</div>
    <input
      v-model="user.confirmPassowrd"
      type="password"
      class="w-full mt-3 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-400"
    />

    <div class="flex justify-between items-center mt-10">
      <button
        type="button"
        class="w-2/5 py-2 border border-blue-600 text-blue-600 rounded-full focus:outline-none hover:bg-blue-500 hover:text-white"
      >
        Sign Up
      </button>

      <NuxtLink to="/authentication/login" class="cursor-pointer mr-5">
        Sign In <span class="text-xl">→</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'authentication',

  data() {
    return {
      user: {
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      },
    }
  },
}
</script>
