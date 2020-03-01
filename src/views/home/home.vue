<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="8">
          <img src="../../assets/logo.png" alt="暂无图片" />
        </el-col>
        <el-col :span="8">
          <h2>代码生成系统</h2>
        </el-col>
        <el-col :span="8" class="logout"></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu
          :router="true"
          :default-active="'/gen/gen/list'"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu
            v-for="(menu,index) in menus"
            :key="index"
            :index="menu.path?menu.path:index+''"
          >
            <template slot="title">
              <i :class="menu.icon"></i>
              <span>{{menu.menuName}}</span>
            </template>
            <el-menu-item v-for="(subMenu,i) in menu.children" :key="i" :index="subMenu.path">
              <i :class="subMenu.icon"></i>
              {{subMenu.menuName}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menus: []
    };
  },

  methods: {
    initData() {
      this.menus = [
        {
          menuId: 1,
          menuName: "代码生成",
          icon: "icon-location",
          path: "",
          children: [
            {
              menuId: 2,
              menuName: "表列表",
              icon: "icon-location",
              path: "/gen/gen/list"
            }
          ]
        }
      ];
      console.log(this.menus);
    },
  },
  created() {
      this.initData();
    }
};
</script>

<style>
.container {
  height: 100%;
}
.container .header {
  background-color: #000;
}
.container .header img {
  display: block;
  width: 200px;
  height: 64px;
}
.container .header h2 {
  color: #fff;
  text-align: center;
}
.container .header a {
  color: #fff;
  text-decoration: none;
}
.container .header .logout {
  text-align: center;
  line-height: 64px;
}
.container .aside {
  /* border-top: 1px solid white; */
  background-color: #545c64;
}
.container .main {
  /* background-color: pink; */
}
</style>
