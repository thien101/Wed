const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playlist = $('.playlist');
const cd = $('.cd');
const headerSong = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('.progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const btnRandom = $('.btn-random');
const btnRepeat = $('.btn-repeat');



const app = {
    CurrentIndex: 0,
    isPlay: false,
    isRandom: false,
    isRepeat: false,

    songs: [
        {
            id: 1,
            name: "Nevada",
            singer: "vicetone",
            path: "./song/Nevada-NightcoreVicetoneCoziZuehlsdorff-5547218.mp3",
            image:"./img/nevada.jpg"
        },
        {
            id: 2,
            name: "CoHenVoiThanhXuan",
            singer: "CukakRemix",
            path: "./song/CoHenVoiThanhXuanCukakRemix.mp3",
            image: "./img/Cohenvoithanhxuan.jpg"
        },
        {
            id: 3,
            name: "CoKhongGiuMatDungTim",
            singer: "TrucNhan",
            path: "./song/CoKhongGiuMatDungTim.mp3",
            image:"./img/cokhonggiumatdungtim.jfif"
        },
        {
            id: 4,
            name: "LacVaoTrongMo",
            singer: "SimonCWUY",
            path:"./song/LacVaoTrongMo-SimonCWUY-7182293.mp3",
            image: "./img/lacvaotrongmo.jpg"
        },
        {
            id: 5,
            name: "NguoiEmCoDo",
            singer: "CucakRemix",
            path: "./song/NguoiEmCoDoCucakRemix-RumDaa-7068723.mp3",
            image:"./img/nguoiemcodo.jfif"
        },
        {
            id: 6,
            name: "TinhCaTinhTa",
            singer: "CukakRemix",
            path: "./song/TinhCaTinhTaCukakRemixBeat-kisCukak-7211015.mp3",
            image:"./img/tinhcatinhta.jpg"
        },
        {
            id: 7,
            name: "Yeu5",
            singer: "RhymasticsRemix",
            path:"./song/Yeu5RhymasticsRemix-Rhymastic-4820188.mp3",
            image:"./img/yeu5.jpg"
        },
        {
            id: 8,
            name: "????? T???c 2",
            singer: "Masew DoMixi PhucDuPhao",
            path: "./song/DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3",
            image:"./img/dotoc2.jpg"
        },
        {
            id: 9,
            name: "Em L?? Nh???t",
            singer: "CukakRemix",
            path: "./song/EmLaNhatCukakRemix-kisHoangKayLeeYAHYCukak-7293462.mp3",
            image:"./img/emlanhat.jfif"
        },
        {
            id: 10,
            name: "??i N???",
            singer: "Masew Khoi Vu",
            path: "./song/AiNo1-MasewKhoiVu-7078913.mp3",
            image:"./img/aino.jpg"
        },
        {
            id: 11,
            name: "Th???c Gi???c",
            singer: "DaLAB",
            path: "./song/ThucGiac-DaLAB-7048212.mp3",
            image:"./img/thucgiac.jpg"
        },  
    ],

    // Hi???n th??? giao di???n onclick = "app.GetCurrentSong = ${song.id}"
    render: function(){
        const htmls = this.songs.map((song, index) => {
            return `<div class = "song ${(index === app.CurrentIndex) ? "active" : ""}" data-index = ${index}>
                        <div class = "thumb" style = "background-image: url('${song.image}')"></div>
                        <div class = "body">
                            <h3 class = "title">${song.name}</h3>
                            <p class = "author">${song.singer}</p>    
                        </div>
                        <div class = "options">
                            <i class="fas fa-ellipsis-h"></i>    
                        </div>
                    </div>`
        })
        playlist.innerHTML = htmls.join("");
    },

    // T???o ph????ng th???c cho app
    defineProperty: function(){
        Object.defineProperty(this, "GetCurrentSong", {
            get: function(){
                return this.songs[this.CurrentIndex];
            },
            // set: function(songId){
            //     let CSong = this.songs.find((song) => song.id === songId);
            //     app.CurrentIndex = CSong.id - 1;
            //     app.loadCurrentSong();
            //     audio.play();
            //     console.log(CSong);
            // },
        })
    },

    // X??? l?? c??ch Event
    handleEvents: function(){
        // X??? l?? cu???n danh s??ch songs
        const cdWidth = cd.offsetWidth;
        // console.log(cdWidth);
        document.onscroll = function(){
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            let newCDwidth = cdWidth - scrollTop
            cd.style.width = (newCDwidth >=0) ? newCDwidth + 'px' : 0;
            cd.style.opacity = newCDwidth/cdWidth;
            // console.log(newCDwidth);
        };
        // -------------------------------------------------------------------------------

        // click btn play and pause
        playBtn.onclick = function(){
            if(!app.isPlay){
                // player.classList.add('playing');
                // app.isPlay = true;
                audio.play();
            } else {
                // player.classList.remove('playing');
                // app.isPlay = false;
                audio.pause();
            }
        };
        // -------------------------------------------------------------------------------        

        // khi song dc play
        audio.onplay = function(){
            player.classList.add('playing');
            app.isPlay = true;
            cdAnimate.play();
        }
        // -------------------------------------------------------------------------------
        
        // khi song pause
        audio.onpause = function(){
            player.classList.remove('playing');
            app.isPlay = false;
            cdAnimate.pause();
        }
        // -------------------------------------------------------------------------------
        
        // Ti???n ????? b??i h??t
        audio.ontimeupdate = function(){
            if(audio.duration){
                let songPercent =Math.floor( audio.currentTime / audio.duration *100);
                progress.value = songPercent;
            }
        }
        // -------------------------------------------------------------------------------
        
        // X??? l?? CD khi play and pause
        const  cdAnimate = cdThumb.animate({
            transform: 'rotate(360deg)',
        }, {
            duration: 10000,
            iterations: Infinity,
        });
        cdAnimate.pause();
        // -------------------------------------------------------------------------------
        
        // X??? l?? tua song
        progress.onchange = function(e){
            // console.log(e.target.value);
            const seekTime = e.target.value * audio.duration /100;
            // console.log(seekTime);
            audio.currentTime = seekTime;
        };
        // -------------------------------------------------------------------------------

        // X??? l?? next song;
        nextBtn.onclick = function(){
            // console.log(app.CurrentIndex); //----------- Kiem tra ------------
            if(app.isRandom){
                app.playRandom();
            } else {
                app.CurrentIndex++;
                if(app.CurrentIndex >= app.songs.length)app.CurrentIndex = 0;
            }
            // console.log(app.CurrentIndex); //----------- Kiem tra ------------
            app.loadCurrentSong();
            app.render();
            audio.play();
        };
        // -------------------------------------------------------------------------------
        
        // X??? l?? prev song
        prevBtn.onclick = function(){
            if(app.isRandom){
                app.playRandom();
            } else {
                app.CurrentIndex--;
                if(app.CurrentIndex < 0)app.CurrentIndex = app.songs.length - 1;
            }
            console.log(app.CurrentIndex);
            app.loadCurrentSong();
            app.render();
            audio.play();
        }
        // -------------------------------------------------------------------------------

        btnRandom.onclick = function(){
            // if(app.isRandom){
            //     app.isRandom = false;
            //     this.classList.remove("active");
            // } else {
            //     app.isRandom = true;
            //     this.classList.add("active");
            // }
            app.isRandom = !app.isRandom;//true
            btnRandom.classList.toggle("active", app.isRandom);
            // app.playRandom();
        }

        // btn repeat
        btnRepeat.onclick = function(){
            app.isRepeat =!app.isRepeat;
            btnRepeat.classList.toggle("active", app.isRepeat);
        } 

        // x??? l?? end song
        audio.onended = function(){
            if(app.isRepeat){
                audio.play();
            } else {
                nextBtn.click();
                app.render();
            // audio.play();
            } 
        }
        // click active song
        playlist.onclick = function(e){
            // console.log(e.target.closest(".song")); //----------- Kiem tra ------------
            const valueSong = e.target.closest(".song"); 
            const activeSong = $('.active');
            if(activeSong) activeSong.classList.remove("active");
            // console.log(activeSong); //----------- Kiem tra ------------
            valueSong.classList.add("active");
            app.CurrentIndex = Number(valueSong.getAttribute('data-index'));
            // console.log(valueSong.getAttribute('data-index')); //----------- Kiem tra ------------
            app.loadCurrentSong();
            audio.play();
        }
        
    },
    // -------------------------------------------------------------------------------
    
    // l???y b??i h??t hi???n t???i
    loadCurrentSong: function(){
        headerSong.innerText = this.GetCurrentSong.name;
        cdThumb.style.backgroundImage = `url("${this.GetCurrentSong.image}")`;
        audio.src = this.GetCurrentSong.path;
        // console.log(this);
    },

    // Random b??i h??t
    playRandom: function(){
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
            // console.log(newIndex);
        } while(newIndex === this.CurrentIndex);
        this.CurrentIndex = newIndex;
        // this.loadCurrentSong();
    },

    start: function(){
        this.render();
        this.handleEvents();
        this.defineProperty();
        this.loadCurrentSong();
    }
}

app.start();

const a = {};
Object.defineProperty(a, "b", {
    get: function(){
        return 1;
    },
    set: function(value){
        console.log(value)
    }
})

