const app = Vue.createApp({
    data() {
        return {
            gallerys: [{ image: "./images/view1.jpg", title: "Dark Sea, Kuala Lumpur", done: false, show: true, canvas: false }
                , { image: "./images/view2.jpg", title: "Greenwood Mountain, Russia", done: false, show: true, canvas: false }
                , { image: "./images/view3.jpg", title: "Brown pine wood, Monte Carlo", done: false, show: true, canvas: false }],
            heart: "./images/heart.png",
            showBar: false,
            showSearch: true,
            showCanvas: false,
            showItems: {},
            index: 0,
            click: undefined,
        }
    },
    methods: {
        clickedItem(index, item) {
            return new Promise((resolve, reject) => {
                if (this.click) {
                    clearTimeout(this.click);
                    resolve(this.toggleCanvas(index, item));
                }
                this.click = setTimeout(() => {
                    this.click = undefined;
                    resolve(this.toggleHeart(index, item));
                }, 200);

            })
        },
        next() {
            if (this.index + 1 > this.gallerys.length - 1) {
                this.index = -1;
            }
            if (this.gallerys[this.index + 1].show == false) { }
            else {
                this.toggleCanvas(this.index + 1, this.gallerys[this.index + 1]);
            }
        }
        ,
        previous() {
            if (this.index - 1 < 0) {
                this.index = this.gallerys.length;
            }
            if (this.gallerys[this.index - 1].show == false) { }
            else {
                this.toggleCanvas(this.index - 1, this.gallerys[this.index - 1]);
            }
        },
        toggleHeart(index) {
            if (this.gallerys[index].show == false) { }
            else {
                this.gallerys[index].done = !this.gallerys[index].done;
            }
        },
        hideCanvas() {
            this.showSearch = true;
            this.showCanvas = false;
            this.index = undefined;
            this.showItems = {};
            for(let i = 0 ; i < this.gallerys.length ; i++){
                this.gallerys[i].canvas = false;
            }
        }
        ,
        toggleCanvas(index, input) {
            this.index = index;
            if (this.gallerys[index].canvas == false) {
                for (let i = 0; i < this.gallerys.length; i++) {
                    if (index == i) continue;
                    this.gallerys[i].canvas = false;
                }
                this.gallerys[index].canvas = true;
                this.showCanvas = true;
                this.showBar = false;
                this.showSearch = false;
                this.showItems = input;
            }

        },
        toggleSearch() {
            this.showBar = !this.showBar;
            this.showSearch = !this.showSearch;
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
