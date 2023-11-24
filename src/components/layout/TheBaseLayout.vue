<script lang="ts" setup>
import TheBaseLayoutSidebar from './TheBaseLayoutSidebar.vue';


</script>

<template>
    <div class="flex">
        <TheBaseLayoutSidebar />
        <div class="flex-1 max-h-screen overflow-y-auto">
            <main class="container mx-auto my-9">
                <slot/>
            </main>
        </div>
    </div>
</template>