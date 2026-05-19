# Yüksək Potensial (HiPo) Qiymətləndirmə Sistemi

Rəhbərlər tərəfindən əməkdaşların Yüksək Potensiallı İşçi (HiPo) kimi qiymətləndirilməsi.

**Format:** Hər əməkdaş üçün BƏLİ / XEYR — tək səhifədə, ayrı forma yox.

---

## Quraşdırma (15 dəqiqə)

### 1. Supabase
- https://supabase.com → yeni proyekt
- SQL Editor → `supabase-setup.sql` işlət
- Table Editor → `employees` → Import CSV (öz Excel faylın)

### 2. API açarları
- Settings → API → Project URL + anon key kopyala
- `js/app.js` faylında yuxarıdakı 2 sətri dəyiş

### 3. Deploy
- GitHub-a push et → vercel.com-dan import et
- Və ya: `npx vercel --prod`

---

## Excel sütun mapping

| Excel | Supabase |
|---|---|
| ID Code | id_code |
| Manager ID | manager_id |
| Manager Name | manager_name |
| Manager mail | manager_mail |
| Company | company |
| Full name | full_name |
| Job title | job_title |
| Division | division |
| Department | department |
| Subdepartment | subdepartment |
| Unit | unit |
| Subunit | subunit |

## Fayl strukturu

```
├── index.html          ← Login
├── dashboard.html      ← HiPo form (tək səhifə)
├── css/style.css       ← Dark/Light mode
├── js/app.js           ← Supabase + i18n
├── supabase-setup.sql  ← Database setup
└── vercel.json
```
