<template>
    <div class="card">
        <div class="column g-0rem-half">
            <span class="author">{{author}}</span>
            <span class="genre">{{genre}}</span>
        </div>
        <span class="material-icons">arrow_right_alt</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        author: String,
        genre: String
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    .material-icons {
        color: white;
    }

    @media screen and (max-width: 768px) {
        .card {
            padding: 0.5rem 1rem;
        }
    }
    .card {
        color: #000;
        padding: 1rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 150px;
        width: 100%;
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    }
    .card:hover {
        cursor: pointer;
        background-color: #333333;
        color: #F2F2F2;
    }

    .author {
        font-weight: bold;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }

    .genre {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;

        color: #828282;
    }
</style>