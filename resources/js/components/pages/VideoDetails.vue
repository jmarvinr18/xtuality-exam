<template>
    <div class="container pb-5">
        <div class="pt-5">
            <div class="row mb-5">
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <div >
                            <h2>
                                <strong>
                                {{video.title}}
                                </strong>
                            </h2>
                        </div>
                        <div class="align-self-start mb-3">
                            <a href="javascript:void(0)" class="mr-3" @click="editVideo()">
                                <i class="fas fa-edit"></i>
                                <span style="color: black;">Edit details</span>
                            </a>
                            <a href="javascript:void(0)" @click="deleteVideo()">
                                <i class="fas fa-edit" style="color: red;"></i>
                                <span style="color: black;">Delete Video</span>
                            </a>
                        </div>
                    </div>
                    <div >
                        <img :src="`/images/uploaded-images/${video.thumbnail}`" class="video-image img-fluid" alt="...">
                    </div>
                </div>
                <div class="col-6 p-5"> 
                    <h4>
                        {{video.subtitle}}
                    </h4>
                    <h6 class="stream-schedule" v-if="streams.length > 0">Upcoming stream on {{formatDate(upcomingStreamDate)}}</h6>
                    <h6 class="stream-schedule" v-else>No scheduled streaming</h6>

                <div class="mt-5">
                    <label for="">About this video</label>
                    <p>
                        {{video.description}}
                    </p>
                </div>
                    <button type="button" class="btn btn-primary mt-4" @click="goToRoute('create')">Stream this video</button>
                </div>

            </div>
            <div class="row">
                <ul class="nav nav-tabs" id="myTab" role="tablist" style="width:100%;">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Stream Informations</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent" style="width: 100%;">
                        <div class="tab-pane fade show active pa-5" id="home" role="tabpanel" aria-labelledby="home-tab" >
                            <div class="tab-pane-content" >
                                <table class="table table-hover" v-if="streams.length > 0">
                                <thead>
                                    <tr>
                                    <th scope="col">Thumbnail</th>
                                    <th scope="col">Caption</th>
                                    <th scope="col">Schedule</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(stream, key) in streams" :key="key">
                                        <td>
                                            <div class="d-flex flex-row" style="max-width:100px;">
                                                <img :src="`/images/uploaded-images/${stream.thumbnail}`" class="img-thumbnail img-fluid" alt="..." style="width:100%;">

                                            </div>
                                        </td>
                                        <td>{{stream.caption}}</td>
                                        <td>{{formatDate(stream.stream_date)}}</td>
                                    </tr>
                                </tbody>
                                </table>
                                <div v-else>
                                  <span class="pl-2" style="font-style: italic;">No stream yet for this video.</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import video from '../../api/video'
import stream from '../../api/stream'
import moment from 'moment'
import Swal from 'sweetalert2'
import EditVideo from './NewVideo'
export default {
    data () {
        return {
            video: '',
            video_id: this.$route.params.id,
            streams: [],
            upcomingStreamDate: ''
        }
    },
    computed: {
      user_id: {
        get () {
          return this.$store.state.user.userData.id
        }
      },
    },
   mounted() {
       this.getVideoDetails()
       this.getStream()
    },
    methods: {
      editVideo(){
        this.$store.commit('video/setVideoObj', this.video)
        this.$store.commit('video/setAction', 'edit')
        this.$router.push('/update-video')
      },
        async goToRoute(route) {
            this.$router.push(`${route}/${this.video_id}`)
        },
        async getVideoDetails() {
          var id = this.$route.params.id,
              response = await video.getVideoById(id)
          this.video = response.data
        },
        async getStream() {
            var response = await stream.getAllStreamsByVideoID(this.user_id, this.video_id)
            this.streams = response.data.stream
            this.upcomingStreamDate = this.streams[0]
        },
        formatDate(date) {
          return moment(date).format('dddd, DD MMMM YYYY hh:mm A')
        },
         deleteVideo() {
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(async (result)  => {
              if (result.isConfirmed) {
                await video.deleteVideo(this.video_id)
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
                this.$router.push('/videos')
              }
            })
        }
    }
}
</script>
<style>
    .video-image{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    .tab-pane-content{
        padding-top: 30px;
    }
    .stream-schedule{
      font-weight: 300;
      font-style: italic;
    }
</style>

