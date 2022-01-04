<template>
  <div id="app" >
    <!--<img src="./assets/2022.jpeg">-->
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <div>

      账户：
      <el-input v-model="username" aria-placeholder="请输入账户" style="width : 200px; padding-bottom: 10px;"
      prop="username"
      :rules="[
          { required: true, message: '请输入账户', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]"></el-input>
    </div>
    <div>
      密码：
      <el-input v-model="password" aria-placeholder="请输入密码" style="width : 200px; padding-bottom: 10px;"
      prop="password"
      :rules="[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]"></el-input>
    </div>
    <div>
      <div>
        验证码：
        <el-input v-model="code" aria-placeholder="验证码" style="width : 120px; padding-bottom: 10px;"></el-input>
        <el-button style="width : 60px;padding-left: 0px;padding-right: 0px;" @click="register_update_code">{{is_code}}</el-button>
      </div>
    </div>
    <div>
      <el-button type="primary" @click="register_code">注册</el-button>
      <el-button type="primary" @click="update_password">修改密码</el-button>
      <el-button type="primary" @click="login">登陆</el-button>

    </div>
    <div>
      <!--注册弹窗-->
      <el-dialog
        title="注册账号"
        :visible.sync="dialogVisible"
        width="20%"
        :before-close="handleClose"
        >
        <el-form ref="form" :label-position="labelPosition" :model="form" label-width="80px">
          <el-form-item
          label="账户名称"
          prop="username"
          :rules="[
          { required: true, message: '请输入账户', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="账户密码" prop="password"
          :rules="[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="phone"
          :rules="[
          { required: true, message: '请输入手机', trigger: 'blur' },
          { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
          ]">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="昵称" prop="nickname"
          :rules="[
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ]">
            <el-input v-model="form.nickname"></el-input>
          </el-form-item>
          <el-form-item
          label="邮箱"
          prop="email"
          :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code" >
            <el-input v-model="form.code" style="width : 64%; padding-bottom: 10px;padding-right: 0px;"></el-input>
            <el-button  @click="register_update_code('register')">{{is_register_code}}</el-button>
          </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
          <el-button @click="resetForm('form')">取 消</el-button>
          <el-button type="primary" @click="onSubmit('form')">确 定</el-button>
        </span>
      </el-dialog>
      <!--修改弹窗-->
      <el-dialog
        title="修改信息"
        :visible.sync="dialogVisible_update"
        width="20%"
        :before-close="handleClose">
        <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item
          label="账户"
          prop="username"
          :rules="[
          { required: true, message: '请输入账户', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]">
            <el-input v-model="ruleForm.username" ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="password"
          :rules="[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]">
            <el-input v-model="ruleForm.password" ></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="phone"
          :rules="[
          { required: true, message: '请输入手机', trigger: 'blur' },
          { min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur' }
          ]">
            <el-input v-model="ruleForm.phone" ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email"
          :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code" >
            <el-input v-model="ruleForm.code" style="width : 60%; padding-bottom: 10px;padding-right: 0px;"></el-input>
            <el-button  @click="register_update_code('update')">{{is_update_code}}</el-button>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="close_form('ruleForm')">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </span>
      </el-dialog>
    </div>

  </div>

</template>

<script>
//import router from './router/router';

export default {
  name: 'App',
  data () {
    return {
      labelPosition: 'right',
      password: '',
      username: '',
      msg: '欢迎访问,请登录',
      dialogVisible: false,
      dialogVisible_update: false,
      is_code: '',
      code: '',
      is_register_code: '',
      is_update_code: '',
      form: {
        username: '',
        password: '',
        phone: '',
        nickname:'',
        email:'',
        code:''
      },
      ruleForm: {
        username: '',
        password: '',
        phone: '',
        email:'',
        code:''
      }
    }
  },
  methods:{
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
          this.form=[]
          this.ruleForm=[]
        })
        .catch(_ => {});
    },
    login(){
      if(this.is_code==this.code){
        var user={username:this.username,password:this.password}
        if(user.username!=null||user.password!=null){
          var url= 'http://localhost:8082/api/login';
          this.$axios.post(url,user).then((res)=>{
            console.log(res)
          });
        }else{
          alert('账户或密码不对')
        }
      }else{
        alert('验证码不对')
      }
    },
    getCode(){
      var url= 'http://localhost:8082/api/code';
      var that=this;
      this.$axios.get(url).then(function (res){
        that.is_code=res.data
      })
    },
    register_code(){
      var that=this;
      var url= 'http://localhost:8082/api/code';
      var that=this;
      this.$axios.get(url).then(function (res){
        that.is_register_code=res.data
      })
      this.dialogVisible = true
    },
    update_password() {
      var url= 'http://localhost:8082/api/code';
      var that=this;
      this.$axios.get(url).then(function (res){
        that.is_update_code=res.data
      })
      this.dialogVisible_update = true
    },
    register_update_code(type){
      var url= 'http://localhost:8082/api/code';
      var that=this;
      this.$axios.get(url).then(function (res){
        if(type=='update'){
          that.is_update_code=res.data
        }else if(type=='register'){
          that.is_register_code=res.data
        }else{
          that.is_code=res.data
        }
      })
    },
    onSubmit(formName){
      var that=this;
      console.log(formName.code)
      this.$refs[formName].validate((valid) => {
          if (valid) {
            if(that.form.code==that.is_register_code){
              console.log(that.form.code)
              var url= 'http://localhost:8082/api/login/add';
              var user=this.form
              this.$axios.post(url,user).then((res)=>{
                console.log(res)
              });
              this.form=[]
              this.dialogVisible = false
            }else{
              alert('验证码错误')
            }
          } else {
            return false;
          }
        });
    },
    submitForm(formName) {
      var that=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(that.ruleForm.code==that.is_update_code){
              console.log("ok")
              var url= 'http://localhost:8082/api/login';
              var user=this.ruleForm
              this.$axios.put(url,user).then((res)=>{
                console.log(res)
              });
              this.ruleForm=[]
              this.dialogVisible_update = false
            }else{
              alert("验证码错误")
            }
          } else {
            //this.dialogVisible_update = false
            return false;
          }
        });
      },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false
    },
    OnJump(){
      window.location.href='./views/login/login'
    },
    close_form(formName){
      this.$refs[formName].resetFields();
      this.dialogVisible_update = false
    }
  },

  created :function(){
    this.getCode();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
