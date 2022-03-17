<template>
    <component :is="layout">
        <router-view></router-view>
    </component>
</template>

<script>

    import { ref, computed } from 'vue';
    import { useRoute } from 'vue-router';

    

    export default {

        setup(props, context){

            // setup layout
            const route = useRoute();
            const default_layout = 'main';

            const layout = computed(()=>{                
                return `${(route.meta.layout || default_layout)}-layout`
            }); 


            // data to return
            return { layout }

        }

    }

</script>