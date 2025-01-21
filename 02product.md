## 滑雪培训网站的MVP方案：

### 1. 首页 (Home Page)
- 品牌logo和简介
- 核心课程展示（2-3个主打课程）
- 教练团队简介（3-4位主要教练）
- 联系方式
- 预约按钮（醒目位置）

### 2. 课程页面 (Courses)
- 课程分类（仅展示主要类别）
  * 零基础入门课
  * 进阶提高课
- 课程详情
  * 课程时长
  * 价格
  * 适合人群
  * 学习内容

### 3. 预约功能 (Booking)
- 简单的预约表单
  * 姓名
  * 手机号
  * 意向课程
  * 预约时间
  * 备注信息
- 表单验证
- 提交成功提示

### 4. 简单后台
- 预约信息查看
- 导出预约数据

### 技术实现要点

1. **页面结构**
````typescript:src/app/page.tsx
// 首页
export default function Home() {
  return (
    <main>
      <HeroSection />
      <CoursesSection />
      <InstructorsSection />
      <ContactSection />
    </main>
  )
}
````

2. **预约表单**
````typescript:src/components/BookingForm.tsx
export default function BookingForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 表单处理逻辑
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="姓名" required />
      <input type="tel" name="phone" placeholder="手机号" required />
      <select name="course" required>
        <option value="">选择课程</option>
        <option value="beginner">零基础入门课</option>
        <option value="advanced">进阶提高课</option>
      </select>
      <button type="submit">提交预约</button>
    </form>
  )
}
````

### 开发步骤

1. **第一阶段**（1-2天）
   - 搭建项目框架
   - 完成首页静态页面

2. **第二阶段**（2-3天）
   - 实现课程页面
   - 添加响应式布局

3. **第三阶段**（2-3天）
   - 开发预约表单
   - 实现表单验证
   - 添加数据存储

4. **第四阶段**（1-2天）
   - 简单后台页面
   - 测试和优化

### 注意事项

1. 专注核心功能，避免功能过度开发
2. 确保手机端体验
3. 表单提交要有加载状态和结果反馈
4. 预留后续功能扩展接口


