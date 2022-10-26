const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playListSongs = $('.playlist');
const SongName = $('header h2')
const CdSong = $('.cd-thumb');
const audioSong = $('#audio');
const cd = $('.cd');
const playSong = $('.btn-toggle-play');
const play = $('.player');
const proGress = $('#progress');
const btnNext = $('.btn-next');
const btnPrev = $('.btn-prev'); 
const btnRandom = $('.btn-random');

const app_music = {
    CurrIndex: 0,
    isPlaying: false,
    isRanDom: false,
    
    list_songs: [
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
            name: "Độ Tộc 2",
            singer: "Masew DoMixi PhucDuPhao",
            path: "./song/DoToc2-MasewDoMixiPhucDuPhao-7064730.mp3",
            image:"./img/dotoc2.jpg"
        },
        {
            id: 9,
            name: "Em Là Nhất",
            singer: "CukakRemix",
            path: "./song/EmLaNhatCukakRemix-kisHoangKayLeeYAHYCukak-7293462.mp3",
            image:"./img/emlanhat.jfif"
        },
        {
            id: 10,
            name: "Ái Nộ",
            singer: "Masew Khoi Vu",
            path: "./song/AiNo1-MasewKhoiVu-7078913.mp3",
            image:"./img/aino.jpg"
        },
        {
            id: 11,
            name: "Thức Giấc",
            singer: "DaLAB",
            path: "./song/ThucGiac-DaLAB-7048212.mp3",
            image:"./img/thucgiac.jpg"
        },  
    ],

    // Xử lí Events
    HandleEvents: function (){
        // Xử lý ocroll list songs
        const cdWidth = cd.offsetWidth
        const _this = this

        document.onscroll = function (){
            const ScrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCDwidth = cdWidth - ScrollTop;
            cd.style.width = (newCDwidth > 0) ? newCDwidth +'px' : 0;
            cd.style.opacity =  newCDwidth/cdWidth;
        }
        //---------------------------------------------------------------------------

        // Click play để chạy song
        playSong.onclick = function(){
            if(_this.isPlaying){
                audioSong.pause();
            } else {
                audioSong.play();
            }
        }
        //---------------------------------------------------------------------------

        // Bắt event bài dc chạy
        audioSong.onplay = function() {
            _this.isPlaying = true;
            play.classList.add('playing');
            cdAnimate.play();
        };
        //---------------------------------------------------------------------------

        // Bắt event bài bị dừng
        audioSong.onpause = function() {
            _this.isPlaying = false;
            play.classList.remove('playing');
            cdAnimate.pause();
        };
        //---------------------------------------------------------------------------

        // Xử lí tiến độ bài hát
        audioSong.ontimeupdate = function (){
            if(audioSong.duration){
                const songPercent = Math.floor(audioSong.currentTime / audioSong.duration*100);
                proGress.value = songPercent;
            }
            if(audioSong.currentTime === audioSong.duration){
                if(_this.isRanDom){
                    _this.playRanDomSong();
                    _this.LoadCurrSong();
                    audioSong.play();
                } else {
                    _this.CurrIndex++;
                    // console.log(_this.CurrIndex);
                    if(_this.CurrIndex >= _this.list_songs.length){
                        _this.CurrIndex = 0;
                        _this.LoadCurrSong();
                        audioSong.onpause();
                        proGress.value = 0;
                    } else {
                        _this.LoadCurrSong();
                        audioSong.play();
                    }
                }
                
            }
        }
        //---------------------------------------------------------------------------

        // Xử lí thay đổi tiến độ bài hát
        proGress.onchange = function (e){
            // console.log(e.target.value);
            audioSong.play();
            const seekTime = e.target.value * audioSong.duration / 100;
            audioSong.currentTime = seekTime;
        }
        //---------------------------------------------------------------------------

        // Xử lí next songs
        btnNext.onclick = function (){
            if(_this.isRanDom){
                _this.playRanDomSong();
            } else {
                _this.CurrIndex++;
                if (_this.CurrIndex >= _this.list_songs.length)_this.CurrIndex = 0;
            }
            _this.LoadCurrSong();
            audioSong.play();
        };
        //---------------------------------------------------------------------------

        // Xử lí prev songs
        btnPrev.onclick = function (){
            if(_this.isRanDom){
                _this.playRanDomSong();
            } else {
                _this.CurrIndex--;
                if (_this.CurrIndex < 0)_this.CurrIndex = _this.list_songs.length - 1;
            }
            _this.LoadCurrSong();
            audioSong.play();
        }
        //---------------------------------------------------------------------------

        // Xử li RanDom button Song
        btnRandom.onclick = function() {
            if(_this.isRanDom){
                _this.isRanDom = false;
                this.classList.remove('active');
            } else {
                _this.isRanDom = true;
                this.classList.add('active');
            }
        }


        // Xử lí CD khi play and pause
        const  cdAnimate = cd.animate({
            transform: 'rotate(360deg)',
        }, {
            duration: 10000,
            iterations: Infinity,
        });
        cdAnimate.pause();
        //---------------------------------------------------------------------------

    },

    // Xử lí randomSongs
    playRanDomSong: function (){
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * app_music.list_songs.length);
        } while (randomIndex === this.CurrIndex);
        this.CurrIndex = randomIndex;
        console.log(this.CurrIndex)
    },

    // Thiết lập Phương thức cho obj
    defProperty: function (){
        Object.defineProperty(this, "GetCurSong", {
            get: function(){
                return this.list_songs[this.CurrIndex];
            },
            set: function(songId){
                const CurrSong = this.list_songs.find((song) => songId === song.id);
                this.CurrIndex = CurrSong.id-1;
                // SongName.innerText = CurrSong.name;
                // CdSong.style.backgroundImage = `url("${CurrSong.image}")`
                // audioSong.src = CurrSong.path;
                // proGress.value = 0;
                // console.log(this.CurrIndex);
                this.LoadCurrSong();
                audioSong.play();
            }
        });
    },

    // Get Bài hát tại index
    LoadCurrSong: function (){
        SongName.innerText = this.GetCurSong.name;
        CdSong.style.backgroundImage = `url("${this.GetCurSong.image}")`
        audioSong.src = this.GetCurSong.path;
        // console.log(this.GetCurSong)
    },
    
    // Hiển thị list of songs
    render_Songs: function (){
        const htmls = this.list_songs.map((song) => {
            return `<div onclick = "app_music.GetCurSong = ${song.id}" class = "song">
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
        playListSongs.innerHTML = htmls.join('');
    },


    // hàm chạy phương thức
    start_app: function(){
        this.HandleEvents();
        this.defProperty();
        this.LoadCurrSong();
        this.render_Songs();
    }
}

app_music.start_app();