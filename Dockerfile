# 启用的环境
FROM node:8.11.1
# 将当前目录下的所有文件都拷贝进/app目录里
COPY . /app
# 设为工作目录
WORKDIR /app
# 在/app目录下，运行yarn命令安装依赖和编译到dist目录下。注意，安装后所有的依赖，都将打包进入 image 文件。
RUN yarn
RUN yarn run build
# 将8080端口暴露出来
EXPOSE 8080
# 运行命令
CMD [ "yarn", "start" ]