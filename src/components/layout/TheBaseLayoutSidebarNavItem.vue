<script lang="ts" setup>
import { computed, useSlots } from "vue";

const props = defineProps<{
  label: string;
  active?: boolean;
}>();

const slots = useSlots();

const hasItems = computed(() => {
    return slots.items != undefined
})
</script>

<template>
    <div>
        <div class="flex justify-between items-center text-[#9AA8B8] cursor-pointer px-5 py-2 transition rounded-lg font-medium"
            :class="{
                'bg-primary text-white hover:bg-primary/10 hover:text-primary': props.active,
                'hover:bg-primary hover:text-white bg-primary/0 text-[#9AA8B8]': !props.active
            }">
            <div class="flex gap-4 items-center">
                <slot name="icon"/>
    
                <span>{{ props.label }}</span>
            </div>
            <div v-show="hasItems">
                <template v-if="props.active">
                    <svg width="14" height="2" viewBox="0 0 14 2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H13C13.2652 0 13.5196 0.105357 13.7071 0.292893C13.8946 0.48043 14 0.734784 14 1C14 1.26522 13.8946 1.51957 13.7071 1.70711C13.5196 1.89464 13.2652 2 13 2Z" fill="white"/>
                    </svg>
                </template>
                <template v-else>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14C6.71667 14 6.47933 13.904 6.288 13.712C6.096 13.5207 6 13.2833 6 13V8H1C0.716667 8 0.479 7.904 0.287 7.712C0.0956668 7.52067 0 7.28333 0 7C0 6.71667 0.0956668 6.479 0.287 6.287C0.479 6.09567 0.716667 6 1 6H6V1C6 0.716667 6.096 0.479 6.288 0.287C6.47933 0.0956668 6.71667 0 7 0C7.28333 0 7.521 0.0956668 7.713 0.287C7.90433 0.479 8 0.716667 8 1V6H13C13.2833 6 13.5207 6.09567 13.712 6.287C13.904 6.479 14 6.71667 14 7C14 7.28333 13.904 7.52067 13.712 7.712C13.5207 7.904 13.2833 8 13 8H8V13C8 13.2833 7.90433 13.5207 7.713 13.712C7.521 13.904 7.28333 14 7 14Z" fill="#3B849C"/>
                    </svg>
                </template>
            </div>
    
        </div>
        <div v-if="hasItems && active" class="relative mt-2 text-sm">
            <div class="absolute top-4 bottom-4 left-[31px] w-[1px] bg-primary">

            </div>
            <div class="grid grid-cols-1 gap-y-2 flex-1 ml-[51px]">
                <slot name="items"/>
            </div>
        </div>
    </div>
</template>
