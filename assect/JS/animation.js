const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PLAYER_STORAGE_KEY = 'XT_PLAYER'

const heading = $('.playmusic-info-name');
const cdthumb = $('.container-playmusic-img');
const audio = $('#audio')
const singer = $('.playmusic-info-singer')
const playBtn = $('.control-btn-icon.play')
const controlBtn = $('.control-btn')
const propress = $('.progress')
const totalTime = $('#total-time')
const current_time = $('#current-time')
const sliderTime = $('.slider-time')
const loader = $('.loader')
const nextBtn = $('.control-btn-icon-next')
const prevBtn = $('.control-btn-icon-re')
const repeatBtn = $('.sub-control-reload')
const randomBtn = $('.sub-control-random')
const playListConmingNext = $('.playlist-trending-list.conming-next');
const playListForYou = $('.playlist-trending-list.for-you');
const playListTrending = $('.playlist-trending-list.trending');
const menuMusics = $$('.playlist-trending-list')
const app = {
  currentIndex: 0,
  isPlaying: false,
  isRepeat:false,
  isRandom: false,
  isClickMusicOtherList: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  setConfig: function(key, value){
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
  },
  song_for_you: [
    {
      name: "Phoenix",
      singer: "(ft. Cailin Russo and Chrissy Costanza) _ Worlds 2019 - League of Legends",
      path: "./assect/music/Phoenix (ft. Cailin Russo and Chrissy Costanza) _ Worlds 2019 - League of Legends.mp3",
      image:
      "https://avatar-ex-swe.nixcdn.com/song/2019/10/11/8/c/a/1/1570758710138_500.jpg"
    },
    {
      name: "Doha",
      singer: "Marin Hoxha Vs Vinsmoker",
      path: "./assect/music/Marin Hoxha Vs Vinsmoker - Doha (Magic Free Release).mp3",
      image: "https://cdnb.artstation.com/p/assets/images/images/042/663/185/large/wlop-60se.jpg?1635135889"
    },
    {
      name: "Take You Down",
      singer: "ILLENIUM",
      path:
        "./assect/music/ILLENIUM - Take You Down (Nurko Remix).mp3",
      image: "https://cdnb.artstation.com/p/assets/images/images/041/712/529/large/wlop-39se.jpg?1632465777"
    },
    {
      name: "Legends Never Die",
      singer: "(ft. Against The Current) _ Worlds 2017 - League of Legends",
      path: "./assect/music/Legends Never Die (ft. Against The Current) [OFFICIAL AUDIO] _ Worlds 2017 - League of Legends.mp3",
      image:
        "https://i1.sndcdn.com/artworks-000267707057-4iq5ww-t500x500.jpg"
    },
    {
      name: " Nobody Compares To You",
      singer: "Gryffin",
      path: "./assect/music/Gryffin - Nobody Compares To You (Lyrics _ Lyric Video) ft. Katie Pearlman.mp3",
      image:
        "https://cdna.artstation.com/p/assets/images/images/041/030/566/large/wlop-31se.jpg?1630556717"
    },
    {
      name: " What's Done is Done",
      singer: "Seven Lions & HALIENE",
      path:
        "./assect/music/Seven Lions & HALIENE - What's Done is Done [OFFICIAL LYRIC VIDEO].mp3",
      image:
        "https://cdna.artstation.com/p/assets/images/images/027/723/930/large/wl-op-24se.jpg?1592362157"
    },
    {
      name: "Empty Crown",
      singer: "Yas",
      path: "./assect/music/Yas - Empty Crown.mp3",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/015/256/651/large/mona-finden-lovestory.jpg?1547672274"
    }
  ],
  song_trending: [
    {
      name: "Phoenix",
      singer: "(ft. Cailin Russo and Chrissy Costanza) _ Worlds 2019 - League of Legends",
      path: "./assect/music/Phoenix (ft. Cailin Russo and Chrissy Costanza) _ Worlds 2019 - League of Legends.mp3",
      image:
      "https://avatar-ex-swe.nixcdn.com/song/2019/10/11/8/c/a/1/1570758710138_500.jpg"
    },
    {
      name: "Summertime",
      singer: "K-391",
      path: "./assect/music/Summertime-K-391.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2018/11/02/e/6/b/b/1541139353539_500.jpg"
    },
    {
      name: "Freesol",
      singer: "Seven Lions",
      path:
        "./assect/music/Freesol-Seven-Lions.mp3",
      image: "https://img.discogs.com/KydwX5Jd8lGAYF6BAAgQu4eq4JM=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14203948-1569799623-5020.jpeg.jpg"
    },
    {
      name: "Umbrella",
      singer: "Ember Island-The White Panda",
      path: "./assect/music/Umbrella-The-White-Panda-Remix-Ember-Island-The-White-Panda.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/a/0/a06a09e6c212bfe16c542026ce7ac252_1507993884.jpg"
    },
    {
      name: "Let You Go",
      singer: "Illenium-Ember-Island",
      path: "./assect/music/Let-You-Go-Illenium-Ember-Island.mp3",
      image:
        "https://i1.sndcdn.com/artworks-000243706962-ssgx0q-t500x500.jpg"
    },
    {
      name: "Fractures",
      singer: "Trivecta-Remix-Illenium-Nevve",
      path:
        "./assect/music/Fractures-Trivecta-Remix-Illenium-Nevve.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2018/05/08/c/9/4/4/1525749139787_500.jpg"
    },
    {
      name: "Crawl Outta Love",
      singer: "Illenium x Annika-Wells",
      path: "./assect/music/Crawl-Outta-Love-Illenium-Annika-Wells.mp3",
      image:
        "https://i1.sndcdn.com/artworks-000407412459-b6ymxf-t500x500.jpg"
    }
  ],
  songs: [
    {
      name: "Squid Game",
      singer: "French Fuse Mashup _ Remix (오징어 게임 OST)",
      path: "./assect/music/Squid Game - French Fuse Mashup _ Remix (오징어 게임 OST).mp3",
      image: "https://cdnb.artstation.com/p/assets/images/images/041/802/385/large/mizuri-squidgamemoneyheist.jpg?1632746797"
    },
    {
      name: "Summertime",
      singer: "K-391",
      path: "./assect/music/Summertime-K-391.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2018/11/02/e/6/b/b/1541139353539_500.jpg"
    },
    {
      name: "Freesol",
      singer: "Seven Lions",
      path:
        "./assect/music/Freesol-Seven-Lions.mp3",
      image: "https://img.discogs.com/KydwX5Jd8lGAYF6BAAgQu4eq4JM=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-14203948-1569799623-5020.jpeg.jpg"
    },
    {
      name: "Umbrella",
      singer: "Ember Island-The White Panda",
      path: "./assect/music/Umbrella-The-White-Panda-Remix-Ember-Island-The-White-Panda.mp3",
      image:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/covers/a/0/a06a09e6c212bfe16c542026ce7ac252_1507993884.jpg"
    },
    {
      name: "Let You Go",
      singer: "Illenium-Ember-Island",
      path: "./assect/music/Let-You-Go-Illenium-Ember-Island.mp3",
      image:
        "https://i1.sndcdn.com/artworks-000243706962-ssgx0q-t500x500.jpg"
    },
    {
      name: "Fractures",
      singer: "Trivecta-Remix-Illenium-Nevve",
      path:
        "./assect/music/Fractures-Trivecta-Remix-Illenium-Nevve.mp3",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2018/05/08/c/9/4/4/1525749139787_500.jpg"
    },
    {
      name: "Crawl Outta Love",
      singer: "Illenium x Annika-Wells",
      path: "./assect/music/Crawl-Outta-Love-Illenium-Annika-Wells.mp3",
      image:
        "https://i1.sndcdn.com/artworks-000407412459-b6ymxf-t500x500.jpg"
    }
  ],
  render: function(){
    const htmls = this.songs.map((song, index) => {
      return`
      <li class="playlist-trending-item conming-next ${index == this.currentIndex && this.isClickMusicOtherList == false ? 'active' : ''}" data-index = "${index}"> 
          <div class="playlist-trending-item-image" style="background-image: url('${song.image}')"></div>
          <div class="playlist-item-info">
              <h4 class="playlist-item-info-name">
                  ${song.name}
              </h4>
              <span class="playlist-item-info-singer">
                  ${song.singer}
              </span>
          </div>
       </li>
      `
    })
    $('.playlist-trending-list.conming-next').innerHTML = htmls.join('');
  },

  renderForYou: function(){
    const htmls = this.song_for_you.map((song, index) => {
      return`
      <li class="playlist-trending-item for-you ${index == this.currentIndex && this.isClickMusicOtherList == true ? 'active' : ''}" data-index = "${index}"> 
          <div class="playlist-trending-item-image" style="background-image: url('${song.image}')"></div>
          <div class="playlist-item-info">
              <h4 class="playlist-item-info-name">
                  ${song.name}
              </h4>
              <span class="playlist-item-info-singer">
                  ${song.singer}
              </span>
          </div>
       </li>
      `
    })
    $('.playlist-trending-list.for-you').innerHTML = htmls.join('');
  },

  renderTrending: function(){
    const htmls = this.song_trending.map((song, index) => {
      return`
      <li class="playlist-trending-item trending ${index == this.currentIndex && this.isClickMusicOtherList == true ? 'active' : ''}"data-index = "${index}"> 
          <div class="playlist-trending-item-image" style="background-image: url('${song.image}')"></div>
          <div class="playlist-item-info">
              <h4 class="playlist-item-info-name">
                  ${song.name}
              </h4>
              <span class="playlist-item-info-singer">
                  ${song.singer}
              </span>
          </div>
       </li>
      `
    })
    $('.playlist-trending-list.trending').innerHTML = htmls.join('');
  },

  defineProperties: function(){
    Object.defineProperty(this, 'currentSong', {
      get: function(){
        return this.songs[this.currentIndex];
      }, 
    })

    Object.defineProperty(this, 'currentSongForYou', {
      get: function(){
        return this.song_for_you[this.currentIndex];
      }, 
    })

    Object.defineProperty(this, 'currentSongTrending', {
      get: function(){
        return this.song_trending[this.currentIndex];
      }, 
    })
  },

  checkclickOther : function(){
    const _this = this;
    const kindMusic = menuMusics.forEach(function(menuMusic, index){
      menuMusic.onclick = function(e){
        const itemMusicActive = $('.playlist-trending-item.active')
        const itemForYou = $$('.playlist-trending-item.for-you')
        const conming_next_unActive = e.target.closest('.playlist-trending-item.conming-next:not(.active)');
        const for_you_unActive = e.target.closest('.playlist-trending-item.for-you:not(.active)');
        const trending_unActive = e.target.closest('.playlist-trending-item.trending:not(.active)');
        if(e.target.closest('.playlist-trending-item.trending:not(.active)') || e.target.closest('.playlist-trending-item.for-you:not(.active)')){
          _this.isClickMusicOtherList = true;
          if(e.target.closest('.playlist-trending-item.trending:not(.active)')){
            trending_unActive.classList.add('active');
            itemMusicActive.classList.remove('active');
            cdthumb.classList.add('playing')
            _this.currentIndex = Number(trending_unActive.dataset.index);
            _this.loadCurrentSongTrending();
            audio.play();
            _this.scrollToActiveSong();
            nextBtn.onclick = function(){
              if(_this.isRandom){
                _this.playRandomSongTrending();
              }
              else{
                _this.nextSongTreding(_this.song_trending); 
              }
              console.log(_this.currentSongTrending)
              setTimeout(function(){ 
                _this.renderTrending()
                audio.play()
              },500)
              cdthumb.classList.add('playing');
              _this.scrollToActiveSong();
        
            }

            prevBtn.onclick = function(){
              if(_this.isRandom){
                _this.playRandomSongTrending();
              }
              else{
                _this.prevSongTrending(_this.song_trending)
              }
              setTimeout(function(){
                _this.renderTrending();
                audio.play()
              },500)
              cdthumb.classList.add('playing');
              _this.scrollToActiveSong();
            }

          }
          if(e.target.closest('.playlist-trending-item.for-you:not(.active)')){
            
            _this.currentIndex = Number(e.target.closest('.playlist-trending-item.for-you:not(.active)').dataset.index);
            _this.loadCurrentSongForYou();
            _this.renderForYou();
            _this.scrollToActiveSong();
            audio.play();
            cdthumb.classList.add('playing');
            itemMusicActive.classList.remove('active');

            nextBtn.onclick = function(){
              if(_this.isRandom && _this.isClickMusicOtherList == false){
                _this.playRandomSongForYou();
              }
              else{
                _this.nextSongForYou(_this.song_for_you); 
              }
              console.log(_this.currentIndex)
              setTimeout(function(){ 
                _this.renderForYou()
                audio.play()
              },500)
              cdthumb.classList.add('playing');
              _this.scrollToActiveSong();
        
            }

            prevBtn.onclick = function(){
              if(_this.isRandom){
                _this.playRandomSongForYou();
              }
              else{
                _this.prevSongForYou(_this.song_for_you)
              }
              setTimeout(function(){
                _this.renderForYou();
                audio.play()
              },500)
              cdthumb.classList.add('playing');
              _this.scrollToActiveSong();
            }
            
          }
        }
        else if ( e.target.closest('.playlist-trending-item.conming-next:not(.active)')) {
          itemMusicActive.classList.remove('active');
          _this.isClickMusicOtherList = false;
          console.log(_this.isClickMusicOtherList);
          _this.currentIndex = Number(e.target.closest('.playlist-trending-item.conming-next:not(.active)').dataset.index);
          console.log(_this.currentIndex);
          _this.loadCurrentSong(_this.currentSong);
          _this.render();
          audio.play();
          cdthumb.classList.add('playing');
          _this.scrollToActiveSong();
          nextBtn.onclick = function(){
            if(_this.isRandom && _this.isClickMusicOtherList == false){
              _this.playRandomSong();
            }
            else{
              _this.nextSong(_this.songs);
            }
            setTimeout(function(){
              _this.render()
              audio.play()
            },500)
            cdthumb.classList.add('playing');
            _this.scrollToActiveSong();
      
          }

          prevBtn.onclick = function(){
            if(_this.isRandom && _this.isClickMusicOtherList == false){
              _this.playRandomSong();
            }
            else{
              _this.prevSong(_this.songs)
            }
            setTimeout(function(){
              _this.render();
              audio.play()
            },500)
            cdthumb.classList.add('playing');
            _this.scrollToActiveSong();
          }

        }
      }
    })


    // Bật tắt Random Song 
    randomBtn.onclick = function(){
      _this.isRandom = !_this.isRandom
      _this.setConfig('isRandom', _this.isRandom);
      randomBtn.classList.toggle('active', _this.isRandom)
    }
  },

  scrollToActiveSong : function(){
    setTimeout(function(){
      $('.playlist-trending-item.active').parentElement.scrollLeft = $('.playlist-trending-item.active').offsetLeft - 314;
    },500)
  },

  loadCurrentSong : function(kindSong){
    heading.textContent = kindSong.name;
    cdthumb.style.backgroundImage = `url('${kindSong.image}')`;
    audio.src = kindSong.path;
    singer.textContent = kindSong.singer;
  },

  loadCurrentSongForYou : function(){
    heading.textContent = this.currentSongForYou.name;
    cdthumb.style.backgroundImage = `url('${this.currentSongForYou.image}')`;
    audio.src = this.currentSongForYou.path;
    singer.textContent = this.currentSongForYou.singer;
  },

  loadCurrentSongTrending : function(){
    heading.textContent = this.currentSongTrending.name;
    cdthumb.style.backgroundImage = `url('${this.currentSongTrending.image}')`;
    audio.src = this.currentSongTrending.path;
    singer.textContent = this.currentSongTrending.singer;
  },


  handleEvent: function() {
    const _this = this;
    playBtn.onclick = function(){
      cdthumb.classList.add('playing')
      if(_this.isPlaying){
        audio.pause();          
      }
      else{
        audio.play();
      }
    }
    audio.onloadeddata = function(){
      totalTime.textContent = formatTime(audio.duration)
      const timeAnimate = (25 * audio.duration) * 10;
    }

    //KHi song được play
    const cdThumbAnimate = cdthumb.animate([
      {transform: 'rotate(360deg)'}
    ], {
      duration: 15000,
      iterations: Infinity
    })

    cdThumbAnimate.pause();

    audio.onplay = function(){
      _this.isPlaying = true;
      controlBtn.classList.add('playing');
      loader.classList.add('playing')
      cdThumbAnimate.play();
      cdthumb.classList.add('playingOpacity')
      
    }

    audio.onpause = function(){
      _this.isPlaying = false;
      controlBtn.classList.remove('playing');
      cdThumbAnimate.pause();
      loader.classList.remove('playing')
      cdthumb.classList.remove('playingOpacity')
    }

    // Khi chạy nhạc
    audio.ontimeupdate = function(){
      if(audio.duration){
        const progressPercent = audio.currentTime / audio.duration * 100;
        propress.style.width = "calc("+ progressPercent + "%)";
      }
      current_time.textContent = formatTime(audio.currentTime);
    }
    function formatTime(seconds) {
      minutes = Math.floor(seconds / 60);
      minutes = (minutes >= 10) ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = (seconds >= 10) ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
    }

    sliderTime.onclick = function(e){
      const percentSeekTime = ((e.offsetX / sliderTime.offsetWidth) *100 )
      const seekTime = Math.floor(audio.duration / 100 * percentSeekTime);
      audio.currentTime = seekTime;
    }
    nextBtn.onclick = function(){
      if(_this.isRandom){
        _this.playRandomSong();
      }
      else{
        _this.nextSong(_this.songs);
      }
      setTimeout(function(){
        _this.render()
        audio.play()
      },500)
      cdthumb.classList.add('playing');
      _this.scrollToActiveSong();

    }

    prevBtn.onclick = function(){
      if(_this.isRandom){
        _this.playRandomSong();
      }
      else{
        _this.prevSong(_this.songs)
      }
      setTimeout(function(){
        _this.render();
        audio.play()
      },500)
      cdthumb.classList.add('playing');
      _this.scrollToActiveSong();
    }

    repeatBtn.onclick = function(){
      _this.isRepeat = !_this.isRepeat;
      repeatBtn.classList.toggle('active', _this.isRepeat)
      
    }
    audio.onended = function(){
      if(_this.isRepeat){
        audio.play();
      }else{
        nextBtn.click();
      }
      
    }

    // Bật tắt Random Song 
    randomBtn.onclick = function(){
      _this.isRandom = !_this.isRandom
      _this.setConfig('isRandom', _this.isRandom);
      randomBtn.classList.toggle('active', _this.isRandom)
    }

  },
  //Khi bấm next
  nextSong: function(song) {
    this.currentIndex ++;
    if(this.currentIndex >= song.length){
      this.currentIndex = 0;
    }
    this.loadCurrentSong(this.currentSong);
  },

  nextSongForYou: function(song) {
    this.currentIndex ++;
    if(this.currentIndex >= song.length){
      this.currentIndex = 0;
    }
    this.loadCurrentSong(this.currentSongForYou);
  },

  nextSongTreding: function(song) {
    this.currentIndex ++;
    if(this.currentIndex >= song.length){
      this.currentIndex = 0;
    }
    this.loadCurrentSong(this.currentSongTrending);
  },
  //Khi bâm Prev
  prevSong: function(song){
    this.currentIndex--;
    if(this.currentIndex < 0){
      this.currentIndex = song.length - 1; 
    }
    this.loadCurrentSong(this.currentSong);
  },

  prevSongForYou: function(song){
    this.currentIndex--;
    if(this.currentIndex < 0){
      this.currentIndex = song.length - 1; 
    }
    this.loadCurrentSong(this.currentSongForYou);
  },

  prevSongTrending: function(song){
    this.currentIndex--;
    if(this.currentIndex < 0){
      this.currentIndex = song.length - 1; 
    }
    this.loadCurrentSong(this.currentSongTrending);
  },

  result : ["0"],
  playRandomSong: function(song) {
    let newIndex;
    newIndex = Math.floor(Math.random() * this.songs.length).toFixed();
    if(!this.result.includes(newIndex)){
      this.result.push(newIndex);
      this.currentIndex = newIndex;
    }
    else{
      if(this.result.length < this.songs.length){
        return this.playRandomSong();
      }
      else{
        this.result = [this.currentIndex];
        return this.playRandomSong();
      }
    }
    this.loadCurrentSong(this.currentSong);
  },
  resultForYou : ["0"],
  playRandomSongForYou: function(song) {
    let newIndex;
    newIndex = Math.floor(Math.random() * this.song_for_you.length).toFixed();
    if(!this.resultForYou.includes(newIndex)){
      this.resultForYou.push(newIndex);
      this.currentIndex = newIndex;
    }
    else{
      if(this.resultForYou.length < this.song_for_you.length){
        return this.playRandomSongForYou();
      }
      else{
        this.resultForYou = [this.currentIndex];
        return this.playRandomSongForYou();
      }
    }
    this.loadCurrentSongForYou(this.currentSongForYou);
  },
  resultTreding : ["0"],
  playRandomSongTrending: function(song) {
    let newIndex;
    newIndex = Math.floor(Math.random() * this.song_trending.length).toFixed();
    if(!this. resultTreding.includes(newIndex)){
      this. resultTreding.push(newIndex);
      this.currentIndex = newIndex;
    }
    else{
      if(this. resultTreding.length < this.song_trending.length){
        return this.playRandomSong();
      }
      else{
        this. resultTreding = [this.currentIndex];
        return this.playRandomSongTrending();
      }
    }
    this.loadCurrentSong(this.currentSongTrending);
  },

  start: function() {
    this.defineProperties();
    //Tải thông tin bai hát lên UI
    this.loadCurrentSong(this.currentSong);

    // Sự kiện
    this.handleEvent();

    //render list phát nhạc
    this.render();

    this.renderForYou();

    this.renderTrending();

    this.checkclickOther();
  }
    
}
app.start();