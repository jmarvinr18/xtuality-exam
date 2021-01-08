<template>
    <div class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
                    <!-- Main Sidebar Container -->
                    
            <Navbar/>
            <Sidebar/>
            <div class="content-wrapper">
                <router-view></router-view>
            </div>
           
        </div>
         <!-- -->
    </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'

export default {
    name: 'App',
    components: {
        Navbar,
        Sidebar
    }
}
</script>