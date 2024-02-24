<script setup>
   
</script>
   
<template>
    <div class="container py-4">
        <div class="row py-2">
            <div class="">
                <ol>
                    <li><a href="">University Home</a></li>
                    <li><a href="">Apply For Accomodation</a></li>
                    <li>Step One</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .breadcrumbs{
        background-color: #95dafd;
        padding: .3rem 0;
    }

    ol{
        display: flex;
        padding:0;
        margin:0;

        li{
            display: flex;
            margin-right: .8rem;
            // min-width: max-content;
        }

        li:before {
            content: '>';
            color: #ccc;
        }
    }
</style>