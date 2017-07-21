<template>
   <div id="login-bg" >
          <div class="warp">
        <div class="login" id="login">
            <div class="logo">
            <img src="../assets/photo/logo@2x.png">
            </div>
            <div class="log-email">
                <div class="log-email">
                <input type="text" placeholder="账号" :class="'log-input'" v-model="account" required>
                <input type="password" placeholder="密码" :class="'log-input'"  v-model="password" required>
                <input type="password" placeholder="再次输入密码" :class="'log-input' "  v-model="rePassword" required>
                <button class="log-btn" @click="signup">signup</button>
                </div>
                <div class="footer">
                <p><small>地下管网空间可视化管理系统</small></p>
                <p><small>-V1.0-</small></p>
                </div>
            </div>
        </div>
          </div>
    </div>
</template>
<script>
  import sha256 from 'crypto-js/sha256'

  export default {
    name: 'Signup',
    data(){
      return {
        account: '',
        password: '',
        rePassword:'',
        token: ''
      }
    },
    methods:{
      //注册逻辑
      signup(){
         this.$router.push('/')       
        // if(this.account!='' && this.password!=''&& this.password==this.rePassword){
        //   this.tosSignup();
        // }
      },
      //注册请求
      tosSignup(){
        //设置在登录状态
        // this.isLoging = true;
        // http://localhost:8080
        this.$ajax.post('http://localhost:8090/signup',{  
           name: this.account,
           password:sha256( this.password )          
        }).then((response) => {
          console.log(response.data)
          var data=response.data;
          if(response.data.type === 'success'){
              this.token = response.headers.token
               sessionStorage.setItem('user', JSON.stringify(data.user));
              sessionStorage.setItem('token', this.token)
               this.$router.push('/')       
          }
      })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-bg{
    height: 100%;
    background-image: url('../assets/photo/bg@1x.png');
    background-repeat:no-repeat;
    text-align: center;
}
.warp{
    width: 650px;
    height: 700px;
    margin:0% auto;
    text-align: center;
}
  #login{
    width: 650px;
    padding-top:200px; 
    text-align: center;
  }
  .logo{
    margin-top:20px; 
    margin-bottom:74px; 
    text-align:center
  }
  .footer{
    text-align:center;
    color:#F7F7F7;
    font-size: 14px;
    margin: 3% 0%
  }
  img{
    width: 642px;
    height: 80px
  }
  .log-email{
          width:300px; 
          margin: 0 auto;
          background-position:-117px 0;
          text-align: center; 
          margin-top: 20px;
  }
  .log-btn{
          width:300px; 
          display: block; 
          line-height: 48px;
          margin:16px auto 15px; 
          height:48px; 
          color:#F7F7F7; 
          font-size:13px; 
          background-color: #59ACFF;
          border: 0 ;

  }
  .log-btn:hover,.log-btn:focus{
    color: #fff; 
    opacity: .8;
    }
  .log-btn .text{
        left: 95px; 
        line-height: 50px; 
        text-align: left; 
        position: absolute;
  }
  .log-input{
          display: block; 
          width:267px;    
          overflow: hidden; 
          padding: 0 15px;
          font-size: 13px; 
          border: 1px solid #EBEBEB; 
          margin:0 auto 8px; 
          height: 48px;
          line-height: 48px;
          background-color: rgba(255,255,255,0.80)
 }

</style>
