const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    // 项目入口
    config.entry.app = "./examples/main.js";
  },
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("examples"))
      .set("@assets", resolve("example/assets"))
      .set("@src", resolve("src"))
      .set("@views", resolve("examples/views"))
      .set("@router", resolve("examples/router"))
      .set("@store", resolve("examples/store"));
  },
});
