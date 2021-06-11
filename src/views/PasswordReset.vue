<template>
    <div class="forgotpassword">
          <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-offset-3 col-md-6">
                    <form class="form" @submit.prevent="passReset">
                        <span class="heading">Сброс пароля</span>
                        <div class="form-group">
                        <input type="email" class="form-control" id="inputEmail" placeholder="E-mail" v-model.trim="email" required>
                        </div>

                        <div class="form-group">
                        <button type="submit" class="btn" @click="authorize">Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    </div>
</template>