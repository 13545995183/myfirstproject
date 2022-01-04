<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-table :data="tableData" style="width: 70%">
      <el-table-column prop="username" label="账号" style="width: 100px"></el-table-column>
      <el-table-column prop="password" label="密码" style="width: 100px"></el-table-column>
      <el-table-column prop="email" label="邮箱" style="width: 100px"></el-table-column>
      <el-table-column prop="nickname" label="昵称" style="width: 100px"></el-table-column>
      <el-table-column prop="phone" label="手机" style="width: 100px"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return{
      tableData:[
        {username: '1111',password: '1111',邮箱: '111@111.com',nickname:'1111',phone:'1111'}
      ],
      msg: 'qiansheng is xxxx'
    }

  },
  methods: {
    
  },
  created :function(){
    
  }
}
</script>