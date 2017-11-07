# egg-pinellia

Get start with [Egg](https://eggjs.org/), [Vue](https://cn.vuejs.org/index.html), [Mysql](https://www.mysql.com/cn/), [Webpack2](https://webpack.js.org/) 🚀

<!-- >2017/09/07
>add proxy with `http-proxy-middleware`  
>2017/10/07
>checkout branch mobx to see the version mobx instead of redux! -->

[线上地址](http://97.64.43.217/pinellia/index.html)
>在实现第一个小目标之后（登录、注册）之后，突然想到是否可以接着往下写一些小项目，于是乎产生了实现一个图书借阅平台的想法。
>目前设计两种角色：普通用户（借阅、归还等操作）和管理员（录入、删除等操作）。
>目前只支持注册：普通用户查看书本信息， 管理员（目前为自己）尚未开放注册。

<details>
<summary><strong>Table of Contents</strong></summary>

* [Feature](#feature)
* [Objective](#objective)
* [Get Start](#get-start)
  + [Installation](#installation)
  + [Running](#running)
  + [Scripts](#scripts)
* [Code Style](#code-style)
* [More](#more)

</details>

---

## Feature

- Vue
- ES6 + Babel
- Webpack2
- Egg
- ElementUi
- Eslint
- MySql

---

## Objective

- 登录注册（Done）
- 管理员登录后可录入、删除书本信息（Done）
- 普通用户登录后可借阅、归还等操作（Coding）

---

## Get Start

> We recommend node > 6.x + npm 5.x 。

<!-- ### Installation

```bash
git clone https://github.com/yuthelloworld/vortex-react.git <my-project-name>
cd <my-project-name>
yarn  # Install project dependencies (or `npm install`)
``` -->

### Running

```bash
cd FE 
npm run dev  # Start the FE server
```

```bash
cd BE 
npm run dev  # Start the BE server
```

<!-- ### Scripts

| `yarn <script>` | Description                                        |
| --------------- | -------------------------------------------------- |
| `start`         | Serves your app at <http://localhost:3000>         |
| `build`         | Builds the application to ./dist                   |
| `lint`          | Lints the project for potential errors             |
| `lint:fix`      | Lints the project and fixes all correctable errors |

--- -->

<!-- ## Project Structure

### File Tree

```bash
.
├── build                    # All build-related code
├── public                   # Static public assets (not imported anywhere in source code)
├── server                   # Express application that provides webpack middleware
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application rendering
│   ├── normalize.js         # Browser normalization and polyfills
│   ├── components           # Global Reusable Components
│   ├── layouts              # Components that dictate major page structure
│   │   └── PageLayout       # Components that dictate major page structure
│   ├── routes               # Components that dictate major page structure
│   │   ├── index.js         # Main application routes with store
│   │   ├── Home             # Fractal route
│   │   │   ├── index.js     # Route definitions and async split points
│   │   │   ├── assets       # Assets required to render components
│   │   │   ├── components   # Presentational React Components
│   │   │   └── routes **
│   │   └── Counter
│   │       ├── index.js
│   │       ├── container    # Container component
│   │       ├── modules      # redux module(reducers/constants/actions)
│   │       └── routes **
│   ├── store                # Redux store
│   │   ├── createStore.js   # Create store
│   │   └── reducers.js      # Reducers
│   └── styles               # Style sheet
└── tests                    # Unit tests
``` -->

<!-- ### Data Flow

![redux](https://user-images.githubusercontent.com/20860159/29354186-429b4446-829f-11e7-9a2f-a15c97dafaa3.png)

### Logic

![vortex-react](https://user-images.githubusercontent.com/20860159/29354203-56f1c672-829f-11e7-9465-2c2b37484823.png)

--- -->

<!-- ## Live Development

We use `webpack-dev-middleware` and `webpack-hot-middleware` for server and HMR 。

We recommend using [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).

--- -->

<!-- ## Deploy

>Use `nginx` to proxy static web to start this app。Point at `~/dist/index.html`.[See more](https://github.com/ReactTraining/react-router/blob/v3/docs/guides/Histories.md#configuring-your-server)。

This is an exmaple in ubuntu:

- Install nginx：

```bash
sudo apt-get install nginx
```

- Configure：

```bash
sudo vi /etc/nginx/sites-available/default
```

- Copy the flowing to configure：

```bash
server{
  listen 8001;
  server_name 127.0.0.1;  //server Ip
  location / {
    proxy_pass http://127.0.0.1:3000;
  }
}
```

- restart nginx，start app，browser <http://localhost:8081>。

```bash
sudo service nginx restart

// cd your root file
yarn start
```

--- -->

## Code Style

Refrence [airbnb/javascript](https://github.com/airbnb/javascript)、[Javascript Standard Style](https://github.com/standard/eslint-config-standard-react)，we set up [.eslintrc]

## More

Welcome PRs and issues!
