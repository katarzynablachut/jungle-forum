<template>
<h1>Admin view</h1>
</template>


<script>
import { mapState, mapActions } from 'vuex';
    export default {
        async mounted() {
            const admin = this.isAdmin();
            if (!admin) {
                this.$router.push('/forum');
            }
        },
        methods: mapActions(['isAdmin']),
    };
</script>