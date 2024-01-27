<template>

    <div id="profile" class="container" ref="profile">

        <HeaderComponent class="mb-4"/>
        <div class="item mb-4">
            <div class="card-vue">
                <form @submit.prevent="save" class="pA-32 w-50">
                    <h4>Profile</h4>
                    <p>Update your account's profile information and email address</p>

                    <label for="name" class="mB-4">Name</label>
                    <CustomInputText type="text" name="name" v-model="user.name"></CustomInputText>

                    <label for="email" class="mB-4">Email</label>
                    <CustomInputText type="text" name="email" v-model="user.email" class="mb-4"></CustomInputText>

                    <CustomPrimaryButton type="submit" label="Save"></CustomPrimaryButton>
                </form>

            </div>
        </div>

        <div class="item mb-4">

            <div class="card-vue">

                <form @submit.prevent="save" class="pA-32 w-50">
                    <h4>Update password</h4>
                    <p>Ensure your account is using a long, random password to stay secure.</p>

                    <label for="currentPassword" class="mB-4">Current Password</label>
                    <CustomInputText type="password" name="currentPassword"></CustomInputText>

                    <label for="newPassword" class="mB-4 mT-16">New Password</label>
                    <CustomInputText type="password" name="newPassword"></CustomInputText>

                    <label for="confirmPassword" class="mB-4 mT-16">Confirm Password</label>
                    <CustomInputText type="password" name="confirmPassword" class="mb-4"></CustomInputText>

                    <div class="w-50 text-start text-danger">{{ showMessage }}</div>
                    <CustomPrimaryButton type="submit" label="Save"></CustomPrimaryButton>
                </form>

            </div>

        </div>

        <div class="item">

            <div class="card-vue">

                <form @submit.prevent="save" class="pA-32 w-50">
                    <h4>Delete account</h4>
                    <p>Once your account is deleted, all of its resources and data will be permanently deleted. Before
                        deleting your account, please download any data or information that you wish to retain.</p>
                    
                    <v-btn color="danger" class="text-white" size="large">

                        <span>Delete account</span>
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
import { api } from '@/config/axios'
import { onMounted, ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue'
import CustomInputText from '@/components/custom/inputs/CustomInputText.vue'
import CustomPrimaryButton from '@/components/custom/buttons/CustomPrimaryButton.vue'


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

<style scoped>
    #profile {
        padding-bottom: 32px;
    }

    .card-vue{
        width: 100%;
        border: 1px solid #cecece;
        border-radius: 8px;
    }
    
    .item {
        padding-left: 54px !important;
        padding-right: 54px !important;
    }
</style>
