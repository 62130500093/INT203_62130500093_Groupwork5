app.component('photo-search', {
    props: {
        showbar: Boolean,showsearch:Boolean
    },
    template: `
    <div v-show="showbar">
        <input type="text" v-model="inputTask" placeholder="Please enter text for searching photos "
          class="p-2 bg-white rounded flex-1 w-96" @keyup.enter="searchPicture">
        <button @click="toggleBar" class="bg-blue-500 text-white  py-2 px-3 rounded ml-2">Cancel</button>
    </div>
    <button @click="toggleBar" v-show="showsearch"><span class="material-icons">
        search
    </span></button>`
    ,
    methods:{
        searchPicture(){
            this.$emit('search-picture',this.inputTask);
        },
        toggleBar(){
            this.$emit('toggle-bar');
        }
    },
    data(){
        return{
            inputTask : ''
        }
    }
})