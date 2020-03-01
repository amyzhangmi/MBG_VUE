<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="common-margin">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="true" :model="searchForm">
      <el-form-item label="表名称">
        <el-input v-model="searchForm.tableName" placeholder="表名称"></el-input>
      </el-form-item>
      <el-form-item label="表注释">
        <el-input v-model="searchForm.tableComment" placeholder="表注释"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="handleSearch">查询</el-button>
        <el-button type="primary" @click="handleGen">生成代码</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="pagenation.rows"
      @selection-change="handleSelectionChange"
      border
      max-height="650"
      size="mini"
      style="width: 100%"
      class="common-margin"
    >
      <el-table-column type="selection" width="45"></el-table-column>
      <el-table-column align="center" prop="tableName" label="表名称"></el-table-column>
      <el-table-column align="center" prop="tableComment" label="表注释"></el-table-column>
    </el-table>
    <el-pagination
      class="common-margin"
      background
      :hide-on-single-page="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenation.pageNow"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagenation.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagenation.total"
    ></el-pagination>
  </el-card>
</template>

<script>
import { list,downLoadZip } from "@/api/gen/gen";
export default {
  data() {
    return {
      searchForm: {
        userName: "",
        nickName: ""
      },
      pagenation: {
        total: 0,
        pageNow: 1,
        pageSize: 10,
        rows: []
      },
      multipleSelection:[],
    };
  },
  methods: {
    initData() {},
    page() {
      this.searchForm.pageNow = this.pagenation.pageNow;
      this.searchForm.pageSize = this.pagenation.pageSize;
      list(this.searchForm).then(res => {
        this.pagenation = res.data.data;
      });
    },
    handleSearch() {
      this.pagenation.pageNow = 1;
      this.pagenation.pageSize = 10;
      this.page();
    },
    handleSizeChange(pageSize) {
      this.pagenation.pageSize = pageSize;
      this.page();
    },
    handleCurrentChange(pageNow) {
      this.pagenation.pageNow = pageNow;
      this.page();
    },
    handleSelectionChange(rows){
         this.multipleSelection = rows;
    },
    getTableNames(){
        var tableNames = '';
        this.multipleSelection.forEach(s => {
            tableNames += s.tableName+",";
        });
        return tableNames;
    },
    handleGen(){
        if(this.multipleSelection.length == 0){
            this.error("请选择要生成的表");
            return;
        }
        downLoadZip("/gen/gen?tableNames=" + this.getTableNames(), "bootssm");
    }
  },
  created() {
    this.initData();
    this.page();
  }
};
</script>

<style>
</style>
