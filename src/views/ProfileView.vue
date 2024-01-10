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
                    <input type="text" name="name" class="form-control mB-16">

                    <label for="email" class="mB-4">Email</label>
                    <input type="text" name="email" class="form-control mB-16">

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
                    <div v-text="currentPassword ? currentPassword : ''" class="text-danger"></div>

                    <label for="newPassword" class="mB-4 mT-16">New Password</label>
                    <input type="text" name="newPassword" class="form-control mB-4">
                    <div v-text="newPassword ? newPassword : ''" class="text-danger"></div>

                    <label for="confirmPassword" class="mB-4 mT-16">Confirm Password</label>
                    <input type="text" name="confirmPassword" class="form-control mB-4">
                    <div v-text="confirmPassword ? confirmPassword : ''" class="text-danger"></div>

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

                    <button type="submit" class="btn btn-danger mT-16">Delete account</button>
                </form>

            </div>

        </div>

    </div>

</template>

<script setup>
    import HeaderComponent from '@/components/HeaderComponent.vue'
    import SearchComponent from '@/components/SearchComponent.vue'

    let currentPassword = 'CurrentPassword';
    let newPassword = 'NewPassword';
    let confirmPassword = 'ConfirmPassword';
</script>

<script>
    export default {

        components: {
            HeaderComponent,
            SearchComponent,
        },


    }
</script>

<style>
    #profile {
        padding-top: 32px;
        padding-bottom: 32px;
    }

    .item {
        padding-left: 54px !important;
        padding-right: 54px !important;
    }
</style>
