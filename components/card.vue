<template>
    <div class="card">
        <div class="card-image">
            <img :src="image" :alt="title" />
        </div>
        <div class="card-header">
            <h4>{{ title }}</h4>
            <p>{{ subtitle }}</p>
        </div>
        <a class="card-button" :style="'background: ' + btnColor" :href="link">{{ buttonText }}</a>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        },
        btnColor: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>