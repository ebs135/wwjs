<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Wwjs" />

  &#xa0;

  <!-- <a href="https://wwjs.netlify.app">Demo</a> -->
</div>

<h1 align="center">wwjs</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/ebs135/wwjs?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/ebs135/wwjs?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ebs135/wwjs?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/ebs135/wwjs?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/ebs135/wwjs?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/ebs135/wwjs?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/ebs135/wwjs?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Wwjs 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/ebs135" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

This is a simple node.js WA gateway project example that implements whatsapp-web.js (<a href="https://github.com/pedroslopez/whatsapp-web.js">whatsapp-web.js on Github</a>). Use it freely, as is, on your own risk.

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com), [Node](https://nodejs.org/en/) and [Postman](https://www.postman.com/downloads/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/ebs135/wwjs

# Access
$ cd wwjs

# Install dependencies
$ npm install

# Run the project
$ node index.js

# The server will initialize in the <http://localhost:3000>
```

Import wwjs-api.json file into Postman from folder postman-collections.

After the service has started, it will show a QR Code in two ways:
1. In console terminal; and
2. Using API request from Postman API Collections' GET api qrcode in image base64 format.

... so you can scan from your WA apps on your phone.

Use Postman API Collections' POST api send-message to test send message.

You can stop the service in two ways:
1. By pressing Ctrl+C buttons and disconnect your WA account from your WA's phone app; or
2. Just disconnect directly from your WA's phone app.

Note:
If you're planning run this project as service, you can use your favorite node.js daemonize module (nodemon or pm2).

This project example is far from perfect, and just intended for your starting point learning how to make a Whatsapp gateway.

You're encouraged to read full documentation from official whatsapp-web.js github <a href="https://github.com/pedroslopez/whatsapp-web.js">repository</a> or visit to whatsaap-web.js official <a href="https://wwebjs.dev">website</a>.

## :memo: Disclaimer ##

This project is not affiliated, associated, authorized, endorsed by, or in any way officially connected with WhatsApp or any of its subsidiaries or its affiliates. The official WhatsApp website can be found at <a href="https://whatsapp.com"></a>https://whatsapp.com</a>. "WhatsApp" as well as related names, marks, emblems and images are registered trademarks of their respective owners.

## :memo: License ##

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at <a href="http://www.apache.org/licenses/LICENSE-2.0"></a>http://www.apache.org/licenses/LICENSE-2.0</a>.


Made with :heart: by <a href="https://github.com/ebs135" target="_blank">E B S</a>

&#xa0;

<a href="#top">Back to top</a>
