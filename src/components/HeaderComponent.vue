<template>
    <div id="headerComponent">
        <div class="navbar">
            <div class="container d-flex justify-content-between">
                <routerLink :to="{ name: 'home' }" class="navbar-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="fillColor"
                        class="bi bi-github" viewBox="0 0 16 16">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                </routerLink>

                <div class="d-flex align-items-center navbar-brand">

                    <v-sheet width="300" class="mx-auto">

                        <v-btn @click="triggerFileInput">Upload</v-btn>
                        <v-file-input 
                            accept="image/*"
                            ref="fileInputRef"
                            prepend-icon=""
                            label="Upload"
                            v-model="file"
                            style="display: none"
                            @change="upload"
                            >
                        </v-file-input>
                         

                    </v-sheet>


                    <div v-if="!showButtons">
                        <routerLink class="btn btn-dark mR-8" :to="{ name: 'login' }">Login</routerLink>
                        <routerLink class="btn btn-outline-dark" :to="{ name: 'register' }">Register</routerLink>
                    </div>

                    <div class="d-flex" v-else>
                        <routerLink class="btn btn-dark mR-8" :to="{ name: 'profile' }">Profile</routerLink>
                        <form @submit.prevent="logout">
                            <button type="submit" class="btn btn-outline-dark">Log out</button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    </div>

</template>

<script setup>
    import { api } from '@/config/axios'
    import { onMounted, ref } from 'vue'

    const file = ref('')
    const showButtons = ref(false)
    const fileInputRef = ref(null);
    
    const triggerFileInput = () => {
        if (fileInputRef.value) {
            fileInputRef.value.click();

        }
    };

    const upload = () => {
        let image = file.value[0]

        const formData = new FormData();
        formData.append('image', image);

        api.post('gallery', formData)

        .then((response) => {

            window.location.reload(true);

            console.log(response);
        })

        .catch((error) => {
            console.log(error);
        })

    }

    

    onMounted(() => {

        if (localStorage.getItem('token')) {
            api.get('me', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                })
                .then(() => {

                    showButtons.value = true;

                })
                .catch(error => {

                    console.log(error);

                })
        } else {

            showButtons.value = false;

        }

    })

    const logout = () => {

        api.post('logout', {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then(() => {

                localStorage.removeItem('token')

                window.location.reload(true);

            })

            .catch(error => {

                console.log(error);

            })

    }
</script>

<style scoped>
    #headerComponent {
        margin-left: 52px !important;
        margin-right: 52px !important;
    }
</style>
