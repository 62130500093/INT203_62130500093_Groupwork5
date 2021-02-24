app.component('photo-view', {
    props: {
        showitem: {
            type: Object,
            require: true
        }
    },
    template:
        /*html*/
        `<span v-show="showitem.done" class="px-8 pb-7 pt-2 bg-black text-right">
        <button class="text-white text-2xl" @click="hideCanvas">X</button>
        <img :src="showitem.image" width="400" height="400">
        <div class="flex justify-between">
          <button class="text-white text-2xl" @click="previous">
            &lt; </button>
              <button class="text-white text-2xl" @click="next">&gt;</button>
        </div>
      </span>`,
    methods: {
        hideCanvas() {
            this.$emit('hide-canvas');
        },
        previous() {
            this.$emit('previous');
        },
        next() {
            this.$emit('next');
        }
    },
    data() {
        return {
            
        }
    }
    ,computed:{
        
    }
})