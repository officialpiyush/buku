useUserStoreuseUserStore<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<template>
    <div class="flex justify-center py-4">
        <button
            class="shadow-md hover:(shadow-lg) group flex items-center gap-2 px-4 py-2 lg:(py-4) bg-green-500 rounded text-white font-bold"
            @click="userStore.signIn">
            <svg class=" group-hover:( spin ) fill-current text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                    d="M3.064 7.51A9.996 9.996 0 0 1 12 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49z" />
            </svg>
            <span class="text-xl">Login With Google</span>
        </button>
    </div>
</template>