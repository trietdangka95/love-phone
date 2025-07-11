# 🛒 Love Phone - Web Bán Hàng

Dự án web bán hàng được xây dựng với React.js, Redux Toolkit và Tailwind CSS.

## 🚀 Tính năng

### ✅ Đã hoàn thành
- [x] **Authentication**: Đăng nhập/Đăng ký với JWT
- [x] **Redux Store**: Quản lý state với Redux Toolkit + Redux Persist
- [x] **Product Management**: Hiển thị danh sách sản phẩm
- [x] **Shopping Cart**: Thêm/xóa/cập nhật giỏ hàng
- [x] **Responsive Design**: Giao diện đẹp với Tailwind CSS
- [x] **Routing**: Điều hướng với React Router DOM

### 🔄 Đang phát triển
- [ ] Trang đăng ký
- [ ] Trang chi tiết sản phẩm
- [ ] Trang thanh toán
- [ ] Trang đơn hàng
- [ ] Tìm kiếm và lọc sản phẩm

## 🛠️ Công nghệ sử dụng

| Thành phần | Công nghệ |
|------------|-----------|
| Frontend | React.js + TypeScript |
| State Management | Redux Toolkit + Redux Persist |
| Routing | React Router DOM |
| UI Framework | Tailwind CSS |
| Icons | Heroicons |
| Form Validation | React Hook Form + Yup |

## 📦 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js >= 16
- npm >= 7

### Bước 1: Clone dự án
```bash
git clone <repository-url>
cd love-phone
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy dự án
```bash
npm start
```

Dự án sẽ chạy tại: http://localhost:3000

## 📁 Cấu trúc thư mục

```
src/
├── components/          # Components tái sử dụng
│   ├── ui/             # UI components (Button, Input, etc.)
│   ├── layout/         # Layout components (Header, Footer)
│   ├── product/        # Product-related components
│   ├── cart/           # Cart components
│   └── auth/           # Authentication components
├── pages/              # Page components
├── store/              # Redux store
│   └── slices/         # Redux slices
├── types/              # TypeScript type definitions
├── services/           # API services
├── utils/              # Utility functions
└── hooks/              # Custom React hooks
```

## 🔧 Redux Store Structure

### Auth Slice
- Quản lý đăng nhập/đăng ký
- Lưu trữ token và thông tin user
- Persist authentication state

### Cart Slice
- Quản lý giỏ hàng
- Thêm/xóa/cập nhật sản phẩm
- Tính tổng tiền
- Persist cart state

### Product Slice
- Quản lý danh sách sản phẩm
- Chi tiết sản phẩm
- Loading states

### Order Slice
- Quản lý đơn hàng
- Lịch sử đơn hàng
- Trạng thái đơn hàng

## 🎨 UI Components

### Button Component
```tsx
<Button 
  variant="primary" 
  size="md" 
  loading={false}
  onClick={handleClick}
>
  Click me
</Button>
```

### Input Component
```tsx
<Input
  label="Email"
  type="email"
  value={email}
  onChange={setEmail}
  error={emailError}
  required
/>
```

## 🔐 Authentication

Dự án sử dụng JWT token để xác thực:
- Token được lưu trong localStorage
- Redux Persist lưu trữ authentication state
- Protected routes (sẽ được thêm sau)

## 🛍️ Shopping Cart

Tính năng giỏ hàng bao gồm:
- Thêm sản phẩm vào giỏ
- Cập nhật số lượng
- Xóa sản phẩm
- Tính tổng tiền
- Persist cart data

## 📱 Responsive Design

Dự án được thiết kế responsive với Tailwind CSS:
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Flexible grid system

## 🚀 Deployment

### Build cho production
```bash
npm run build
```

### Deploy lên Vercel/Netlify
1. Push code lên GitHub
2. Connect với Vercel/Netlify
3. Deploy tự động

## 🔮 Roadmap

### Phase 1 (Hiện tại)
- [x] Setup project structure
- [x] Authentication system
- [x] Basic UI components
- [x] Shopping cart functionality

### Phase 2 (Tiếp theo)
- [ ] Product detail page
- [ ] Checkout process
- [ ] Order management
- [ ] Search and filtering

### Phase 3 (Tương lai)
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] User reviews
- [ ] PWA features

## 🤝 Contributing

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phát hành dưới MIT License.

## 👥 Team

- **Developer**: [Your Name]
- **Design**: Tailwind CSS
- **Icons**: Heroicons

---

⭐ Nếu dự án này hữu ích, hãy cho chúng tôi một star! 