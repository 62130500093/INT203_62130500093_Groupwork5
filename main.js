const app = Vue.createApp({
    data() {
        return {
            gallerys: [{ image: "./images/view1.jpg", title: "Dark Sea, Kuala Lumpur", done: false, show: true }
                , { image: "./images/view2.jpg", title: "Greenwood Mountain, Russia", done: false, show: true }
                , { image: "./images/view3.jpg", title: "Brown pine wood, Monte Carlo", done: false, show: true }],
            heart: "./images/heart.png",
            showBar: false,
            showSearch: true,
            showCanvas: false,
            showItems: {},
            index: 0,
        }
    },
    methods: {
        next() {
            this.toggleHeart(this.index + 1);
        },
        previous() {
            this.toggleHeart(this.index - 1);
        },
        toggleHeart(index) {
            if (this.gallerys[index].show == false) {}
            else {
                this.gallerys[index].done = !this.gallerys[index].done;
                this.index = index;
                for (let i = 0; i < this.gallerys.length; i++) {
                    if (index == i) continue;
                    this.gallerys[i].done = false;
                }
                if (this.gallerys[index].done == true) {
                    this.toggleCanvas(this.gallerys[index]);
                }
                if (this.gallerys[index].done == false) {
                    this.showCanvas = false;
                    this.showSearch = true;
                }
            }
        },
        hideCanvas() {
            this.showSearch = true;
            this.showItems = {};
            this.toggleHeart(this.index);
        }
        ,
        toggleCanvas(input) {
            this.showCanvas = true;
            this.showBar = false;
            this.showSearch = false;
            this.showItems = input;
        },
        toggleBar() {
            this.showBar = !this.showBar;
            this.showSearch = !this.showSearch;
            this.togglePictureShow();
        },
        searchPicture(inputTask) {
            if (inputTask) {
                for (let i = 0; i < this.gallerys.length; i++) {
                    if (this.gallerys[i].title.toLowerCase().includes(inputTask.toLowerCase())) {
                        this.gallerys[i].show = true;
                    }
                    else {
                        this.gallerys[i].show = false;
                    }
                }
            }
        },
        togglePictureShow() {
            for (let i = 0; i < this.gallerys.length; i++) {
                this.gallerys[i].show = true;
            }
        },
    },
    computed: {
        calculated() {
            let tempCount = 0;
            for (let i = 0; i < this.gallerys.length; i++) {
                if (this.gallerys[i].show == true) tempCount++;
            }
            return tempCount;
        },
        checkItems() {
            let count = 0
            for (let i = 0; i < this.gallerys.length; i++) {
                if (this.gallerys[i].show == true) count++;
            }
            if (count == 0) return "No photo.";
        }


    }

})
