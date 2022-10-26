const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cd = $('.cd');
const header = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('.progress');
const songBtn = $('.song')
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');

// function getSong(songname) {
//   const song = $('.song-' + songname);
//   console.log(song);
// }

const app = {
    currentIndex: 0,
    isPlaying: false,
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
          path:
            "./song/Yeu5RhymasticsRemix-Rhymastic-4820188.mp3",
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

    render: function() {
        
        const html = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
          </div>
            `
        })
        playlist.innerHTML = html.join('');
    },
    defineProperty: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
              return this.songs[this.currentIndex];
            },
        });
    },

    handleEvents: function(){
        const _this = this;
        const cdWidth = cd.offsetWidth;
        //-------------------------------Ngay 1----------------------------------------
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCDwidth = cdWidth - scrollTop;
            // console.log(newCDwidth)
            // cd.style.width = newCDwidth + 'px';
            cd.style.width = newCDwidth >= 0 ? newCDwidth + 'px' : 0;
            cd.style.opacity = newCDwidth/cdWidth
        }
        //-----------------------------------------------------------------------------

        //-------------------------------Ngay 2----------------------------------------
        // Xử lí khi click play
        playBtn.onclick = function() {
            if(_this.isPlaying){
                audio.pause();
            } else {
                audio.play();
            }
        }

        // Khi song dc play
        audio.onplay = function() {
          _this.isPlaying = true;
          player.classList.add('playing');
          cdThumbAnimate.play(); // xử lý cd quay
        }

        // Khi song bij pause
        audio.onpause = function() {
          _this.isPlaying = false;
          player.classList.remove('playing');
          cdThumbAnimate.pause();// xử lý cd dừng
        }

        // Khi tiện độ bài hát thay đồi
        audio.ontimeupdate = function() {
          if(audio.duration){
            const songPercent = Math.floor(this.currentTime/this.duration*100);
            progress.value = songPercent; 
          }

          // if(_this.isRandom){
          //   _this.playRandomSong();
          //   this.play();
          // } else {
          //   if(this.currentTime === this.duration){
          //     _this.currentIndex++;
          //     if(_this.currentIndex >= _this.songs.length){
          //       _this.currentIndex = 0;
          //       _this.loadCurrentSong();
          //       audio.onpause();
          //       // cdThumbAnimate.onfinish;  
          //       progress.value = 0;
          //     } else {
          //       _this.loadCurrentSong();
          //       this.play();
          //     }
              
          //   }
          // }
        }

        // Xử lý khi tua
        progress.onchange = function(e) {
          // console.log(e.target.value)
          const seekTime = audio.duration * e.target.value / 100;
          audio.currentTime = seekTime;
        }

        // Xử lí CD quay or dừng
        const cdThumbAnimate = cdThumb.animate({
          transform: 'rotate(360deg)'
        }, {
          duration: 10000, //10seconds
          iterations: Infinity
        })
        cdThumbAnimate.pause();
        console.log(cdThumbAnimate);

        //-----------------------------------------------------------------------------

        //-------------------------------Ngay 3----------------------------------------
        // Xử lí next song
        nextBtn.onclick = function(e) {
          if(_this.isRandom){
            _this.playRandomSong();
            
          }
          else{
            _this.nextSong();
          }
          audio.play();          // console.log(_this.isPlaying)
        }

        // Xử lý khi prev song
        prevBtn.onclick = function() {
          // _this.prevSong();
          if(_this.isRandom){
            _this.playRandomSong();
            
          }
          else{
            _this.prevSong();
          }audio.play();
        }

        // Xử lí ramdon song
        randomBtn.onclick = function() {
          _this.isRandom = !_this.isRandom;
          randomBtn.classList.toggle('active', _this.isRandom);
          // console.log(_this.isRandom);
        }
        //-----------------------------------------------------------------------------

        //-------------------------------Ngay 4----------------------------------------
        // Xử lí phát lại lặp lại một song
        repeatBtn.onclick = function() {
          _this.isRepeat = !_this.isRepeat;
          repeatBtn.classList.toggle('active', _this.isRepeat);
        }

        // Xử lí khi end song
        audio.onended = function() {
          if(_this.isRepeat){// xử lí khi repeat dc thực hiện
            audio.play();
          } else {
            nextBtn.click();// xử lí như nextBtn onclick
          }
          
        }

        // hiện thị active current song

        // hiển thị click song
        playlist.onclick = function(e) {
          const songElement = e.target.closest('.song:not(.active)')
          if(e.target.closest('.song:not(.active)') || e.target.closest('.option')) {
            // Xu li khi click vao song
            if(e.target.closest('.song:not(.active)')){
              // console.log(songElement.getAttribute('data-index'));
              console.log(songElement.dataset.index);
              _this.currentIndex = Number(songElement.dataset.index);
              _this.loadCurrentSong();
              _this.render();
              audio.play();
            } 
            // Xu li khi click vao option
          }
        }
        //-----------------------------------------------------------------------------

    },

    loadCurrentSong: function() {
        header.innerText = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
        // console.log(header, cdThumb, audio);
        // console.log(app.currentIndex);
        // console.log(cdThumb.animate);

    },
    nextSong: function() {
      this.currentIndex++;
      if(this.currentIndex >= this.songs.length){
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
      this.render();
    },

    prevSong: function() {
      this.currentIndex--;
      if(this.currentIndex < 0){
        this.currentIndex = this.songs.length - 1;
      }
      this.loadCurrentSong();
      this.render();
      
    },

    playRandomSong: function() {
      let newIndex
      do {
        newIndex = Math.floor(Math.random() * this.songs.length);
        // console.log(newIndex);
      }while(newIndex === this.currentIndex)
      this.currentIndex = newIndex;
      this.loadCurrentSong();
      this.render();
    },

    start: function(){
        // render playlist
        this.render(); 
        // định nghĩa các thuộc tính cho obj
        this.defineProperty();

        // Lắng nghe/ xử lý cách sự kiện (DOM Event)
        this.handleEvents();

        this.loadCurrentSong();
         
    }
}



app.start();