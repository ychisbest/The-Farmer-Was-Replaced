- 这是astro项目，网址是https://thefarmerwasreplaced.com
- 网站的常用字段保存在Setting.json中
- 项目的背景信息是info.md
- 生成代码时先读取BaseLayout.astro、Footer.astro、Header.astro，保持风格统一
- 仅仅修改我强调的文件，不要擅自修改其他文件。
- 完成任务后不要擅自使用npm run来执行，我会自己检查，等待我回复就好。
- 使用多语言
- 多语言按如下方式书写，多语言内容直接写在标签中，不会在其他地方定义

- 这是windows系统。使用patch file的方式写入文件
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


任务：完成index.astro中的主页