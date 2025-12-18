# SIPRAK  
## Sistem Peminjaman Ruang dan Fasilitas Kampus

SIPRAK (Sistem Peminjaman Ruang dan Fasilitas Kampus) merupakan aplikasi berbasis web yang dirancang untuk membantu pengelolaan peminjaman ruang dan fasilitas di lingkungan kampus secara terstruktur, efisien, dan terkomputerisasi.

Aplikasi ini memungkinkan pengguna untuk melakukan autentikasi, mengajukan peminjaman fasilitas, serta memantau status peminjaman yang diajukan. Sistem dibangun dengan arsitektur client–server menggunakan REST API.

---

## 📚 Dokumentasi

Untuk dokumentasi lengkap, silakan lihat:

- **[📖 Backend Documentation](./backend/README.md)** - REST API, Database, dan Server Configuration
- **[🎨 Frontend Documentation](./frontend/README.md)** - UI Components, Pages, dan Client Configuration

---

## Deskripsi Aplikasi

SIPRAK bertujuan untuk menggantikan proses peminjaman manual yang masih mengandalkan pencatatan konvensional, sehingga dapat meminimalkan kesalahan data, meningkatkan transparansi, dan mempermudah monitoring status peminjaman.

### Fitur Utama

- Autentikasi pengguna menggunakan JSON Web Token (JWT)
- Pengajuan peminjaman ruang dan fasilitas kampus
- Menampilkan status peminjaman (pending, approved, rejected)
- Penghapusan data peminjaman
- Manajemen sesi pengguna (logout)

---

## Teknologi yang Digunakan

### Backend
- Node.js
- Express.js
- Prisma ORM
- MySQL
- JSON Web Token (JWT)

### Frontend
- React (Vite)
- Tailwind CSS
- Axios

---

## Entity Relationship Diagram (ERD)

Secara konseptual, sistem SIPRAK terdiri dari dua entitas utama:

**User**
- id
- name
- email
- password

**Borrowing**
- id
- title
- facility
- borrowDate
- returnDate
- status
- userId

**Relasi:** Satu user dapat memiliki banyak data peminjaman (one-to-many).

---

## 🚀 Quick Start

### Prasyarat

- Node.js (v14 atau lebih baru)
- MySQL
- npm atau yarn

### Menjalankan Backend

1. Masuk ke folder backend
```bash
cd backend
npm install
```

2. Salin file environment
```bash
cp .env.example .env
```

3. Konfigurasikan database pada file `.env`

4. Jalankan migrasi database
```bash
npx prisma migrate dev
```

5. Jalankan server backend
```bash
npm start
# atau
nodemon server.js
```

Backend akan berjalan pada: `http://localhost:3000`

---

### Menjalankan Frontend

1. Masuk ke folder frontend
```bash
cd frontend
npm install
```

2. Jalankan aplikasi
```bash
npm run dev
```

Frontend akan berjalan pada: `http://localhost:5173`

---

## 📂 Struktur Project

```
SIPRAK/
├── backend/           # REST API & Database
│   ├── prisma/       # Database schema & migrations
│   ├── src/          # Source code backend
│   └── README.md     # Dokumentasi backend
│
├── frontend/          # React Application
│   ├── public/       # Static files
│   ├── src/          # Source code frontend
│   └── README.md     # Dokumentasi frontend
│
└── README.md         # Dokumentasi utama (file ini)
```

---

## 🔗 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/login` | Login pengguna | ❌ |

### Borrowing Management
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/borrowings` | Ambil semua peminjaman user | ✅ |
| POST | `/api/borrowings` | Tambah peminjaman baru | ✅ |
| PUT | `/api/borrowings/:id` | Update peminjaman | ✅ |
| DELETE | `/api/borrowings/:id` | Hapus peminjaman | ✅ |

---

## 🔗 Link Dokumentasi Detail

- [Backend API Documentation](./backend/Readme.md#dokumentasi-api) - Endpoint, Request/Response
- [Frontend Components](./frontend/Readme.md#struktur-direktori) - UI Components & Pages
- [Database Schema](./backend/Readme.md#database-schema) - Prisma Models

---

## 👥 Kontributor

- Galih Permana Sidik
- 230660221002
- SI-VA

---

## © Copyright

© 2025 Galih Permana Sidik.  
All Rights Reserved.