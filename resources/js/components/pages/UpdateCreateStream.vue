<template>
<div class="container">
        <div class="row">
            <form class="col-6  mt-3">
                <h2>Stream This Video</h2>
                  <div class="form-group mt-4">
                    <label for="exampleInputEmail1">Video Title</label>
                    <p>{{videoObj.title}}</p>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">About the Stream</label>
                    <textarea class="form-control" rows="3" placeholder="Enter ..." v-model="caption"></textarea>
                  </div>

                  <div class="form-group">
                    <label for="exampleInputFile">Schedule</label>
                    <datetime title="test" type="datetime" v-model="datetime" use12-hour input-id="datepicker"></datetime>
                  </div>
                   <div class="form-group">
                        <button type="button" class="btn btn-primary" @click="createNewStream()">Submit</button>
                   </div>
            </form>
            
            <div class="col-6 mt-3">
                <div class="image-container">
                    <label for="exampleInputEmail1">Thumbnail</label>
                    <img :src="`/images/uploaded-images/${videoObj.thumbnail}`" alt="Video Thumbnail">
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import stream from '../../api/stream'
import video from '../../api/video'
import { Datetime } from 'vue-datetime';
import moment from 'moment'
import 'vue-datetime/dist/vue-datetime.css'
export default {
    data () {
        return {
          videoObj: [],
          caption: '',
          datetime: '',
        }
    },
    computed: {
      user_id: {
          get () {
            return this.$store.state.user.userData.id
          }
      },
    },
    components: {
        Datetime
    },
    mounted() {
        this.insertAttribute()
        this.getStream()
    },
    methods: {
        insertAttribute(){
            document.getElementById('datepicker').setAttribute("placeholder", "MM/DD/YYYY hh:mm:ss am/pm")
        },
        async getStream() {
            var video_id = this.$route.params.id,
                response = await video.getVideoById(video_id)
            this.videoObj = response.data
        },
        async createNewStream (){
            var video_id = this.$route.params.id,
                streamObj = {
                  caption: this.caption,
                  datetime: moment(this.datetime).format('YYYY/MM/DD hh:mm:ss')
                },
                response = await stream.createStream(this.user_id, video_id, streamObj)
            if(response.status === 200){
              this.$router.push(`/video-details/${video_id}`)
            }
        },
    }
}
</script>


<style>

    .image-container{
        padding: 50px;
    }
    .image-container img{
        height: 100%;
        width: 100%;
        object-fit: contain;

    }
    #datepicker{
        padding: 10px;
        width: 100%;
        border: 1px solid #ced4da;
    }
</style>