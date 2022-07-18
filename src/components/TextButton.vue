<template>
    <button class="btn">{{label}}<span class="material-icons">{{icon}}</span></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        label: String,
        icon: String
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>


    button {
        font-weight: 500;
        font-size: 18px;
        border: none;
        background-color: transparent;
        padding: 1rem 1rem;
    }

    .material-icons {
        font-size: 20px;
    }

    .btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        background-repeat: no-repeat;
        transition: background-size 0.2s;
        background-image: linear-gradient(#F7DF94, #F7DF94);
        background-size: 0 8px;
        background-position: 50% 100%;
    }

    .btn:hover {
        background-size: 100% 8px;
    }
</style>