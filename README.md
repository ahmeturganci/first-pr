# First PR - İlk Pull Request Deneyimi 🚀

Bu proje, geliştiricilerin ilk Pull Request deneyimlerini yaşaması ve Git merge conflict'lerini öğrenmesi için özellikle tasarlanmıştır. Herkes aynı dosyayı düzenlediği için conflict'ler kaçınılmazdır!

## 🎯 Proje Amacı

- İlk Pull Request deneyimi yaşatmak
- Git flow ve collaboration öğretmek
- Merge conflict'leri deneyimleme ve çözme
- Open source katkı sürecini öğretmek
- Real-world Git senaryoları

## 🚀 Nasıl Katılırım?

### 1. Repository'yi Fork Et
```bash
# GitHub'da fork butonuna tıkla
```

### 2. Local'e Clone Et
```bash
git clone https://github.com/[senin-username]/first-pr.git
cd first-pr
npm install
```

### 3. users.json Dosyasını Düzenle
`src/data/users.json` dosyasını düzenle ve **SONUNA** yeni bir kullanıcı ekle:

```json
{
  "name": "Senin Adın Soyadın"
}
```

⚠️ **DİKKAT**: 
- Mevcut kullanıcıları silme veya düzenleme!
- Sadece YENİ kullanıcı ekle!
- JSON formatına dikkat et!
- **ID gerekli değil** - sadece adını ekle!
- **Tarih otomatik** - ekleme tarihi otomatik olarak ayarlanır!

### 4. Commit ve Push
```bash
git add .
git commit -m "feat: add [senin-adin] to users list"
git push origin main
```

### 5. Pull Request Oluştur
- GitHub'da "Compare & pull request" butonuna tıkla
- PR başlığı: `feat: add [senin-adin] to users list`
- Ana repository'ye merge için bekle

## 🔥 Conflict Çözme Rehberi

### Conflict Oluştuğunda:

1. **Conflict'i kontrol et:**
```bash
git status
git diff
```

2. **Dosyayı manuel düzenle:**
```json
<<<<<<< HEAD
// Mevcut kod
=======
// Senin değişikliğin
>>>>>>> main
```

3. **Conflict marker'ları temizle ve birleştir:**
```json
[
  // Tüm kullanıcıları koru
  // Senin kullanıcını da ekle
]
```

4. **Çözümü commit et:**
```bash
git add .
git commit -m "resolve: merge conflict in users.json"
git push origin main
```

## 🛠️ Development

```bash
# Development server başlat
npm run dev

# Build için
npm run build

# Preview için
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── components/
│   ├── UserBubble.tsx          # Kullanıcı kartları
│   ├── GitFlowGuide.tsx        # Git rehberi
│   ├── TopControls.tsx         # Üst kontroller
│   └── ...
├── hooks/
│   ├── useUsers.ts             # Kullanıcı yönetimi
│   ├── useTheme.ts             # Tema yönetimi
│   └── useLanguage.ts          # Dil yönetimi
├── i18n/
│   ├── index.ts                # i18n konfigürasyonu
│   └── locales/                # Çeviri dosyaları
│       ├── tr.json             # Türkçe çeviriler
│       └── en.json             # İngilizce çeviriler
├── types/
│   └── User.ts                 # TypeScript tipleri
├── data/
│   └── users.json              # CONFLICT ZONE! 💥
└── App.tsx                     # Ana uygulama
```

## 🎨 Özellikler

- ✨ **Modern React + TypeScript** ile yazılmış
- 🌍 **i18next ile çoklu dil desteği** (TR/EN)
- 🎨 **Responsive tasarım** - tüm cihazlarda çalışır
- 🌈 **Her kullanıcı için dinamik renk paleti**
- 🌙 **Dark/Light tema** desteği
- 📱 **Mobile-first** responsive tasarım
- 🎭 **Smooth animasyonlar** ve hover efektleri
- 📚 **Entegre Git flow rehberi**
- ⚡ **Real-time conflict simulation**
- 🔄 **Async data loading** ile modern UX
- 🧪 **Test edilebilir** modüler kod yapısı
- 💾 **LocalStorage** ile tercih hatırlama

## 🏆 First PR Hall of Fame

Başarıyla ilk PR'ını gönderen geliştiriciler:
- [ ] İlk PR'ını gönderen sen ol!

## 🤝 Katkıda Bulunma Kuralları

1. **Sadece `src/data/users.json` dosyasını düzenle**
2. **Mevcut kullanıcıları silme**
3. **JSON formatını bozma**
4. **Sadece adını ekle** - ID ve tarih otomatik!
5. **Conventional commit mesajları kullan**
6. **Repository'yi fork et** - branch oluşturma!

## 🚨 Önemli Notlar

- Bu proje **öğrenme amaçlı** tasarlanmıştır
- Conflict'ler **kasıtlı** olarak yaratılır
- Real-world senaryoları simüle eder
- Sabırlı ol, conflict çözmek öğrenme sürecinin parçası!
- **Modern React + TypeScript** kullanılmıştır
- **i18next** ile profesyonel çoklu dil desteği
- **ID'ler otomatik** - sadece adını ekle!
- **Tarihler otomatik** - ekleme zamanı otomatik ayarlanır!

## 📞 Yardım

Takıldığın yerler için:
1. GitHub Issues'da soru aç
2. Discord/Slack kanallarında sor
3. Git documentation'ını incele

**Happy First PR! 🚀💻**