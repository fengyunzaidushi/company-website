# 滑雪培训企业网站设计文档

## 项目概述

本项目是一个滑雪培训企业的官方网站，主要用于展示公司信息、课程介绍等内容，并提供课程预约等功能。

## 技术栈选择

### 核心框架

- Next.js 13.5.x
- React 18
- TypeScript
- Tailwind CSS

### 技术选型理由

1. **Next.js**

   - 内置 SSR/SSG 支持，有利于 SEO
   - 图片自动优化
   - 零配置部署
   - 文件系统路由
   - 完整的企业级解决方案

2. **版本选择**
   - 选择 13.5.x 版本，避免最新版本可能存在的不稳定性
   - 保持与 React 18 的最佳兼容性

## 数据存储

使用 Supabase 作为后端数据库服务：

1. 数据库：PostgreSQL
2. 表结构：

   ```sql
   create table public.bookings (
     id uuid not null default extensions.uuid_generate_v4 (),
     name text not null,
     phone text not null,
     course text not null,
     date date not null,
     note text null,
     status text not null default 'pending'::text,
     created_at timestamp with time zone not null default timezone ('utc'::text, now()),
     constraint bookings_pkey primary key (id),
     constraint bookings_course_check check ((course = any (array['beginner'::text, 'advanced'::text]))),
     constraint bookings_status_check check ((status = any (array['pending'::text, 'confirmed'::text, 'cancelled'::text])))
   );

   -- 创建索引
   create index if not exists bookings_phone_idx on public.bookings using btree (phone);
   create index if not exists bookings_created_at_idx on public.bookings using btree (created_at desc);
   ```

3. API 接口：

   - POST /api/bookings - 创建预约
   - GET /api/bookings?phone={phone} - 查询预约

4. 安全策略：
   - 使用 service_role key 进行 API 调用
   - 数据验证使用 zod schema
   - API 路由进行错误处理
