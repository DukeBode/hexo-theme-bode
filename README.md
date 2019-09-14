# hexo-theme-bode

[中文](#) | [English](#)

- [x] 百度统计
- [x] 友盟统计
- [x] 全屏显示

## Installation

### Install

``` bash
$ git clone --depth 1 https://github.com/hexojs/hexo-theme-bode themes/bode
```

**Bode requires Hexo 2.4 and above.** If you would like to enable the RSS, the [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) plugin is also required.

### Enable

Modify `theme` setting in `_config.yml` to `bode`.

``` diff
_config.yml
- theme: some-theme
+ theme: bode
```

### Update

``` bash
cd themes/bode
git pull
```

## Configuration

``` yml
# Header
menu:
  Home: /
  Archives: /archives
rss: /atom.xml
banner: images/banner.jpg

# Content
excerpt_link: Read More
fancybox: true
recent_posts_limits: 5

# Sidebar
sidebar: right
widgets:
- category
- tag
- tagcloud
- archives
- recent_posts

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
```

- **menu** - Navigation menu
- **rss** - RSS link
- **banner** - Path of title banner image of page top
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **fancybox** - Enable [Fancybox]
- **recent_posts_limits** - How many posts display in Home page.
- **sidebar** - Sidebar style. You can choose `left`, `right`, `bottom` or `false`.
- **widgets** - Widgets displaying in sidebar
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiiter ID

## Features

### Fancybox

Bode uses [Fancybox] to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

```
![img caption](img url)

{% fancybox img_url [img_thumbnail] [img_caption] %}
```

### Sidebar

You can put your sidebar in left side, right side or bottom of your site by editing `sidebar` setting.

Bode provides 5 built-in widgets:

- category
- tag
- tagcloud
- archives
- recent_posts

All of them are enabled by default. You can edit them in `widget` setting.

[Fancybox]: https://github.com/fancyapps/fancyBox
