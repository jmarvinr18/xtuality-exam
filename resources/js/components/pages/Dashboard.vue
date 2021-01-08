<template>
    <div class="container">

        <div class="row">
            <div class="col-4 mt-3">
                <div class="info-box">
                    <span class="info-box-icon bg-blue"><i class="fas fa-video"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Uploaded Videos</span>
                        <span class="info-box-number">{{videoCount}}</span>
                    </div>

                </div>
            </div>
            <div class="col-4 mt-3">
                <div class="info-box">
                    <span class="info-box-icon bg-red"><i class="fas fa-stream"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Upcoming Stream</span>
                        <span class="info-box-number">{{streamCount}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
              <div class="card-header">
                <h3 class="card-title">Upcoming Stream</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
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
                    <span class="pl-2" style="font-style: italic;">You have no streaming schedule yet.</span>
                  </div>
              </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
              </div>
            </div>
            <!-- /.card -->
    </div>
</template>

<script>
import user from '../../api/user'
import video from '../../api/video'
import stream from '../../api/stream'
import moment from 'moment'
export default {
  data() {
    return {
        streams: [],
        streamCount: '',
        videoCount: ''
    }
  },
    async mounted () {
      this.getStream()
      this.countVideos()
    },
    computed: {
      user_id: {
        get () {
          return this.$store.state.user.userData.id
        }
      },
    },
    methods: {
        async getStream() {
            var response = await stream.getAllStreams(this.user_id)
            this.streams = response.data.stream
            this.streamCount = response.data.count
        },
      formatDate(date) {
          return moment(date).format('dddd, DD MMMM YYYY hh:mm A')
      },
      async countVideos() {
          const response = await video.getAllVideos(this.user_id)
          this.videoCount = response.data.count
      }
    }
}
</script>
