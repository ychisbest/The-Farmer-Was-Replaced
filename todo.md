- 这是astro项目，网址是https://thefarmerwasreplaced.com
- 网站的常用字段保存在Setting.json中
- 项目的背景信息是info.md
- 生成代码时先读取BaseLayout.astro、Footer.astro、Header.astro，index.astro保持代码和网站风格统一
- 仅仅修改我强调的文件，不要擅自修改其他文件。
- 完成任务后不要擅自使用npm run来执行，我会自己检查，等待我回复就好。
- 使用多语言
- 以下是所有国家语言对该游戏的翻译，为我增加多语言时别写错游戏名了
```
简体中文: 编程农场
韩语: 농부는 대체되었다
日语: 農家は Replace() されました
英语: The Farmer Was Replaced
法语: The Farmer Was Replaced
意大利语: The Farmer Was Replaced
德语: The Farmer Was Replaced
西班牙语 - 西班牙: The Farmer Was Replaced
波兰语: The Farmer Was Replaced
葡萄牙语 - 巴西: The Farmer Was Replaced
俄语: The Farmer Was Replaced
```
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


现在的任务，把首页的的几个a标签链接换成有图标的矩形的菜单，目前的样式太单调，请完成修改