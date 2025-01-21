# 滑雪培训企业网站

基于 Next.js 开发的滑雪培训企业官网，提供课程展示、在线预约等功能。

## 技术栈

- Next.js 13.5.x
- React 18
- TypeScript
- Tailwind CSS

## 项目结构

```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/              # 认证相关路由组
│   │   ├── login/           # 登录页面
│   │   └── register/        # 注册页面
│   ├── admin/               # 管理后台
│   │   ├── bookings/        # 预约管理
│   │   └── courses/         # 课程管理
│   ├── api/                 # API 路由
│   │   ├── auth/           # 认证相关 API
│   │   └── bookings/       # 预约相关 API
│   ├── courses/            # 课程页面
│   ├── booking/            # 预约页面
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 首页
├── components/             # 组件目录
│   ├── layout/            # 布局组件
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Sidebar/
│   ├── ui/                # 基础UI组件
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Card/
│   ├── sections/          # 页面区块组件
│   │   ├── Hero/
│   │   ├── Courses/
│   │   └── Contact/
│   └── forms/             # 表单组件
│       └── BookingForm/
├── lib/                   # 工具函数和类型
│   ├── types/            # TypeScript 类型定义
│   ├── utils/            # 工具函数
│   └── db/               # 数据库相关
├── styles/               # 样式文件
│   └── globals.css       # 全局样式
└── public/               # 静态资源
    └── images/           # 图片资源
```

## 功能模块

- 首页
  - 品牌展示
  - 核心课程
  - 教练团队
  - 联系方式
- 课程页面
  - 课程列表
  - 课程详情
- 预约系统
  - 预约表单
  - 表单验证
- 管理后台
  - 预约管理
  - 数据导出

## 开发环境设置

1. 安装依赖

```bash
npm install
# or
yarn install
```

2. 配置环境变量

复制 `.env.example` 到 `.env.local` 并填写相关配置

3. 启动开发服务器

```bash
npm run dev
# or
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看结果

## 部署

本项目推荐使用 Vercel 部署:

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 自动部署

## 开发规范

- 使用 TypeScript 进行开发
- 遵循 ESLint 规则
- 使用 Prettier 格式化代码
- 组件使用 Function Component
- 样式采用 Tailwind CSS

## 注意事项

- 确保移动端适配
- 性能优化
  - 图片优化
  - 组件懒加载
  - API 优化
- 表单验证和错误处理
- 后台访问控制

## 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://react.dev)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [TypeScript 文档](https://www.typescriptlang.org/docs)

## License

MIT
