<template>
    <div class="header">
        <TextButton :label="'random'" :icon="'sync'" v-on:click="generateRandomQuote"></TextButton>
    </div>
    <div class="main-container">
        <!-- Single quote -->
        <div v-if="!author && quote" class="single-column">
            <div class="column">
                <Quote :text="quote.quoteText"></Quote>
            </div>
            <div class="card-container">
                <Card v-on:click="setAuthor" :author="quote.quoteAuthor" :genre="quote.quoteGenre"></Card>
            </div>
        </div>

        <!-- All Author quotes -->
        <div class="quotes-container" v-if="author">
                <span class="author-name">{{author}}</span>
            <Quote v-for="aq in authorQuotes" :text="aq.quoteText"></Quote>
        </div>

    </div>
</template>

<script lang="ts">
import { getQuotesByAuthor, getRandomQuote } from '@/services/Quotes'
import { defineComponent } from 'vue'
import Quote from './Quote.vue';
import Card from './Card.vue';
import TextButton from './TextButton.vue';
import type { QuoteModel } from '../models/quote';
import type { Pagination } from '@/models/pagination';

export default defineComponent({
    data(): {
        quote?: QuoteModel;
        author: string;
        authorQuotes: Array<QuoteModel>;
        pagination?: Pagination;
    } {
        let quote: QuoteModel | undefined;
        return {
            quote: quote,
            author: "",
            authorQuotes: [],
            pagination: undefined
        }
    },
    methods: {
        handleScroll() {
            const element = window as any;
            const onBottom = document.documentElement.clientHeight + element.scrollY === document.documentElement.scrollHeight;
            if(onBottom && this.pagination?.nextPage) {
                this.loadPage(this.pagination.nextPage);
            }
        },
        generateRandomQuote() {
            getRandomQuote().then((q => {
                this.quote = q;
                this.author = "";
                this.pagination = undefined;
            }));
        },
        setAuthor() {
            if(this.quote) {
                this.author = this.quote!.quoteAuthor;
                this.loadPage();
            }
        },
        loadPage(page?: number) {
            getQuotesByAuthor(this.author, page).then((quotesPage) => {
                if(quotesPage.pagination.currentPage === 1) {
                    this.authorQuotes = [];
                }
                this.authorQuotes = this.authorQuotes.concat(quotesPage.data);
                this.pagination = quotesPage.pagination;
            });
        }
    },
    setup () {
        return {}
    },
    components: { Quote, Card, TextButton },
    mounted() {
        this.generateRandomQuote();
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    }
});
</script>

<style scoped>

    .main-container {
        width: 75vw;
        margin: 0 auto;
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }
    .single-column {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-evenly;
    }
    .card-container {
        padding: 0 6rem;
    }
    
    .quotes-container {
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
        gap: 8rem;
    }

    @media screen and (max-width: 768px) {
        .card-container {
            padding: 0 1rem;
        }

        .quotes-container {
            gap: 4rem;
        }
    }
    .author-name {
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;

        color: #333333;
    }

    .header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 3rem;
        height: 40px;
    }
</style>