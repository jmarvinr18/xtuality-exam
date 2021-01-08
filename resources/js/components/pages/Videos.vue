<template>
    <div class="container">
        <div class="row">
            <div class="header mt-5 mb-3">
                 <h1>Videos</h1>
                  <button type="button" class="btn btn-primary ml-2 btn-sm" @click="goToCreateVideo()" v-if="videos"><i class="far fa-plus-square"></i> New Video</button>
            </div>
           
        </div>
       <div class="row" v-if="videos">
           <div class="col-3 mt-3" v-for="(v, i) in videos" :key="i">
               <a :href="`/video-details/${v.id}`">
                    <div class="card bg-dark text-white">
                        <img :src="`/images/uploaded-images/${v.thumbnail}`" class="card-img" alt="...">
                        <div class="card-img-overlay" style="background-color: rgba(163, 87, 0, 0.5);">
                            <h5 class="card-title">{{v.title}}</h5>
                            <p class="card-text">{{v.subtitle}}</p>
                        </div>
                    </div>
                </a>
           </div>
       </div>
       <div v-else class="d-flex flex-column">
           <h1 class="align-self-center" style="color: grey;">You have not created any video yet.</h1>
           <button type="button" class="btn btn-primary mt-5 btn-lg align-self-center" @click="goToCreateVideo()"><i class="far fa-plus-square"></i> New Video</button>
       </div>
    </div>
</template>

<script>
import video from '../../api/video'
export default {
    data () {
        return {
            videos: [],
            videoCount: ''
        }
    },
    mounted (){
        this.getAllVideos(this.user_id)
    },
    computed: {
      user_id: {
        get () {
          return this.$store.state.user.userData.id
        }
      },
    },
    methods: {
        goToCreateVideo() {
            this.$store.commit('video/setAction', 'create')
            this.$store.commit('video/resetVideoObj')
            this.$router.push('/new-video')
        },
        async getAllVideos(id) {
            const response = await video.getAllVideos(this.user_id)
            this.videos = response.data.videos
            console.log(response.data)
        }
    }
}
</script>

<style>
    .card-img{
        width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
</style>