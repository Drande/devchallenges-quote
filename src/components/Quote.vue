<template>
    <p>{{text}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        text: String
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    p {
        padding-left: 6rem;
        position: relative;
        font-size: 36px;
        font-weight: 500;
        line-height: 42px;
        color: #000;
    }
    @media screen and (max-width: 768px) {
      p {
        padding-left: 2rem;
        font-size: 24px;
        font-weight: 500;
        line-height: 28px;
      }
    }
    p::before {
        content:"";
        position: absolute;
        background-color: #F7DF94;
        width: 8px;
        height: 100%;
        top: 0;
        left: 0;
    }
</style>