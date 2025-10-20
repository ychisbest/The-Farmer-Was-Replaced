- 这是astro项目，网址是https://thefarmerwasreplaced.com
- 网站的常用字段保存在Setting.json中
- 项目的背景信息是info.md
- 生成代码时先读取BaseLayout.astro、Footer.astro、Header.astro，index.astro保持代码和网站风格统一
- 仅仅修改我强调的文件，不要擅自修改其他文件。
- 完成任务后不要擅自使用npm run来执行，我会自己检查，等待我回复就好。
- 使用多语言
- 多语言按如下方式书写，多语言内容直接写在标签中，不会在其他地方定义
```
<p>
{
    t({
        en:"content",
        zh:"contnet",
    })
}
</p>
```
- 我的网站仅仅是关于游戏的教程和代码分享网站，做到尽量简约，字体要小，留白要多，风格清晰，不要扰乱用户的关注点
- [lang]文件夹中的页面请参照index.astro写好getstaticpath方法，不然会导致报错


当前任务：目前的tutorial页面过于简单和抽象，全部重写，用比喻的方式针对每一个细节进行教学，把用户当作十二岁小孩，进行详细的编程指导，code部分使用codeblock组件，和codes页面一样，代码的注释都要使用多语言。
示例代码不要和农场有关，因为你不懂详细的游戏规则，会误导用户，使用农场无关的代码案例