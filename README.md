
### 记录

* 模拟器SDK版本需要和build.gradle中的targetSdkVersion一致
* build.gradle中的compileSdkVersion最好与targetSdkVersion一致(可以不同)
* build.gradle中的buildToolsVersion也最好与compileSdkVersion版本一致(有时不同)
* react-native使用adb connect链接本地模拟器时，端口号比模拟器后缀多1，adb connect 127.0.0.1:5555
* 运行npx react-native doctor检查环境
* 安装ios失败的话，可以进iOS文件夹运行pod install,不过运行之前先检查ruby的source
* 运行gem sources -l查看，运行gem sources --remove [url],添加国内的ruby源，gem sources -a [url], gem sources -u更新源
* 0.72版本字体自适应，宽度，高度等数值是无单位的
* 安装新依赖后，iOS 需要在iOS目录pod install
* 安装新依赖后，android如果运行报错，进Android目录运行./gradlew clean清除缓存重构项目
* react-native-gesture-handler处理手势的库有bug，还没匹配到合适版本
