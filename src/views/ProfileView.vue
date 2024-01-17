<template>

    <div id="profile" class="container" ref="profile">

        <HeaderComponent />
        <SearchComponent class="mB-32 mT-32"></SearchComponent>

        <div class="item d-flex justify-content-between w-100 mB-32">

            <div class="w-100 card">
                <form @submit.prevent="save" class="pA-32 w-50">
                    <h4>Profile</h4>
                    <p>Update your account's profile information and email address</p>

                    <label for="name" class="mB-4">Name</label>

                    <!-- <custom-input v-model="name"></custom-input> -->
                    
                    <input type="text" name="name" class="form-control mB-16" v-model="user.name">

                    <label for="email" class="mB-4">Email</label>
                    <input type="text" name="email" class="form-control mB-16" v-model="user.email">


                    <button type="submit" class="btn btn-primary mT-16">Save</button>
                </form>

            </div>

        </div>

        <div class="item d-flex justify-content-between w-100 mB-32">

            <div class="w-100 card">

                <form @submit.prevent="save" class="pA-32 w-50">
                    <h4>Update password</h4>
                    <p>Ensure your account is using a long, random password to stay secure.</p>

                    <label for="currentPassword" class="mB-4">Current Password</label>
                    <input type="text" name="currentPassword" class="form-control mB-4">

                    <label for="newPassword" class="mB-4 mT-16">New Password</label>
                    <input type="text" name="newPassword" class="form-control mB-4">

                    <label for="confirmPassword" class="mB-4 mT-16">Confirm Password</label>
                    <input type="text" name="confirmPassword" class="form-control mB-4">

                    <div class="w-50 text-start text-danger">{{ showMessage }}</div>
                    <button type="submit" class="btn btn-primary mT-16">Save</button>
                </form>

            </div>

        </div>

        <div class="item d-flex justify-content-between w-100 ">

            <div class="w-100 card">

                <form @submit.prevent="save" class="pA-32 w-50">
                    <h4>Delete account</h4>
                    <p>Once your account is deleted, all of its resources and data will be permanently deleted. Before
                        deleting your account, please download any data or information that you wish to retain.</p>

                    <!-- <button type="submit" class="btn btn-danger mT-16">Delete account</button> -->
                    
                    <v-btn color="danger" class="text-white">

                        <span>Delete Account</span>

                        <v-dialog v-model="dialog" activator="parent" width="auto">
                            <v-card>

                                <v-card-text>Are you sure you want to delete your account?</v-card-text>
                                
                                <div class="d-flex justify-content-center">

                                    <v-card-actions>
                                        <v-btn color="danger" block @click="dialog = false">No</v-btn>
                                    </v-card-actions>

                                    <v-card-actions>

                                        <v-form @submit.prevent="deleteCount">
                                            <v-btn color="primary" block type="submit">Yes</v-btn>
                                        </v-form>

                                    </v-card-actions>
                                </div>
                            </v-card>
                        </v-dialog>

                    </v-btn>

                </form>

            </div>

        </div>

    </div>

</template>

<script setup>

    // import CustomInput     from '@/components/CustomInput.vue'
    import HeaderComponent from '@/components/HeaderComponent.vue'
    import SearchComponent from '@/components/SearchComponent.vue'
    import { api } from '@/config/axios'
    import { onMounted, ref } from 'vue';

    const dialog = ref(false)
    const user = ref([])
    let showMessage = ref('')

    const save = () => {

        api.put(`users/${user.value.id}`, {
            name: user.value.name,
            email: user.value.email,
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,  
            }
        })

        .then(() => {
            window.location.reload(true);
        })

        .catch((error) => {

            if(error.response.status == 422){

            showMessage.value = error.response.data.message

            setTimeout(() => {
                showMessage.value = ''
            }, 2000);

            }

        })

    }

    const deleteCount = () => {
        
        api.delete(`users/${user.value.id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })

        .then((response) => {

            localStorage.removeItem('token');
            
            window.location.reload(true);

            console.log(response.data.message);
        })

        .catch((error) => {
            console.log(error);
        })
        
    };

    onMounted(() =>{

        api.get('me', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then((response) => {

            user.value = response.data.me;
            // console.log(user.value);

        })
        .catch(error => {
            console.log(error);
        })

    })


</script>

<style>
    #profile {
        padding-bottom: 32px;
    }

    .item {
        padding-left: 54px !important;
        padding-right: 54px !important;
    }
</style>
