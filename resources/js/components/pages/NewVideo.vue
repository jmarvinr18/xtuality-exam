<template>
    <div class="container">
        <div class="row">
            <form class="col-6  mt-3">
                <h4 v-if="this.action === 'create'">Upload New Video</h4>
                <h4 v-else-if="this.action === 'edit'">Edit Video</h4>
                  <div class="form-group mt-4">
                    <label for="exampleInputEmail1">Video Title</label>
                    <input type="text" class="form-control" placeholder="Enter ..." v-model="videoObj.title">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Video Subtitle</label>
                    <input type="text" class="form-control" placeholder="Enter ..." v-model="videoObj.subtitle">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                     <textarea class="form-control" rows="3" placeholder="Enter ..." v-model="videoObj.description"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputFile">Video Thumbnail</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="exampleInputFile" ref="file" @change="handleFileUpload">
                        <label class="custom-file-label" for="exampleInputFile">{{inputLabel}}</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputFile">Video</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="exampleInputFile" ref="file" @change="handleFileUpload" disabled>
                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                      </div>
                    </div>
                  </div>
                   <div class="form-group">
                        <button v-if="this.action === 'create'" type="button" class="btn btn-primary" @click="createNewVideo()">Submit</button>
                        <button v-else-if="this.action === 'edit'" type="button" class="btn btn-primary" @click="editVideo()">Submit</button>
                   </div>
            </form>
            <div class="col-6 mt-3">
                <div class="image-container">
                    <label for="exampleInputEmail1">Preview</label>
                    <img  :src="image" alt="Video Thumbnail">
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import video from '../../api/video'
import Swal from 'sweetalert2'
// import { EventBus } from '../../utils/bus.js'
export default {
    data () {
        return {
            videoObj: {
                title: '',
                subtitle: '',
                description: '',
                file: ''
           },
           image: 'images/video.png',
           inputLabel: 'Choose File'
        }
    },
    computed: {
      user_id: {
        get () {
          return this.$store.state.user.userData.id
        }
      },
      action: {
        get () {
          return this.$store.state.video.action
        }
      },
      video_id: {
        get () {
          return this.$store.state.video.videoData.id
        }
      },
      title: {
        get () {
          return this.$store.state.video.videoData.title
        }
      },
      subtitle: {
        get () {
          return this.$store.state.video.videoData.subtitle
        }
      },
      description: {
        get () {
          return this.$store.state.video.videoData.description
        }
      },
      thumbnail: {
        get () {
          return this.$store.state.video.videoData.thumbnail
        }
      },
    },
    mounted() {
        this.populateForEditing()
        switch (this.action) {
            case 'create':
                this.image = '/images/video.png'
                break;
            case 'edit':
                 this.image = `/images/uploaded-images/${this.thumbnail}`
                break; 
            default:
                break;
        }
    },
    methods: {
        populateForEditing() {
            this.videoObj = {
                title:  this.title,
                subtitle:  this.subtitle,
                description: this.description
            }
            this.image = this.thumbnail
            this.inputLabel = this.thumbnail
            console.log(this.image)
        },
        async editVideo() {
            var formData = new FormData();
            formData.append('title', this.videoObj.title)
            formData.append('subtitle', this.videoObj.subtitle)
            formData.append('description', this.videoObj.description)
            formData.append('thumbnail', this.videoObj.file, this.videoObj.file.name)

            const response = await video.updateVideo(this.video_id, formData)
        },
        async createNewVideo (){
            var formData = new FormData();
            formData.append('title', this.videoObj.title)
            formData.append('subtitle', this.videoObj.subtitle)
            formData.append('description', this.videoObj.description)
            formData.append('thumbnail', this.videoObj.file, this.videoObj.file.name)

            const response = await video.createNewVideo(this.user_id, formData)
            if (response.status === 200){
                Swal.fire(
                'Video has been uploaded!',
                'success'
                )            
                this.$router.push('/videos')
            }

        },
        handleFileUpload(event){
            var file = event.target.files[0],
                reader = new FileReader();
                reader.onload = e => {
                    this.image = e.target.result
                }
                reader.readAsDataURL(file)
            this.videoObj.file = file
            this.inputLabel = file.name
        }
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
</style>