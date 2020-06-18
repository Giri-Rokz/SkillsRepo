<template>
    <div v-show="shouldDisplayPopup">
        <div id="modal-overlay"></div>
        <div id="modal">
            <p>{{getPopupMsg}}</p>
            <button @click="hidePopup">OK</button>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
    name: 'Popup',
    computed: {
        ...mapGetters(['shouldDisplayPopup','getPopupMsg'])
    },
    methods: {
        ...mapActions(['showPopup']),
        hidePopup() {
            this.showPopup(false);
        }
    }
}
</script>

<style lang="sass" scoped>

</style>