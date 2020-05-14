<template>
  <el-container>
    <h3 class="title">{{newsItem.title}}</h3>
    <p class="body-small">{{newsItem.description}}</p>
    <el-link type="info" :href="newsItem.url">link here</el-link>
    <!-- <a :href="newsItem.url" class="link">link here</a> -->
    <el-divider></el-divider>
  </el-container>
</template>

<script>
export default {
  name: "news-item",
  props: {
    newsItem: Object
  },
  mounted() {}
};
</script>

<style scoped>
.el-container {
  flex-direction: column;
  mergin-left: 10px;
}

.body-small {
  font-size: 13px;
}
.link {
  font-size: 13px;
  color: #999;
}

.title {
  color: #434346;
  font-size: 18px;
}
h3 .title {
  margin: 0;
}
.el-divider {
  background-color: #d9ecff;
}
</style>
