# 🌍 AFAD Deprem Sorgulama Scripti

Bu proje, [AFAD Deprem API](https://deprem.afad.gov.tr) üzerinden **son depremleri** sorgulamak için yazılmış basit bir Node.js scriptidir.

Script, çalıştırıldığı anda geçerli tarih ve saati baz alarak **bir ay sonraya kadar** olan aralıkta meydana gelen depremleri çeker.
Varsayılan olarak sadece **en büyük depremi** getirir.

---

## 🔧 Özellikler

* **AFAD API** üzerinden deprem verisi çekme
* Tarih/saat bazlı filtreleme
* En büyük depremi bulma (`orderby=magnitude&limit=1`)
* Hata yakalama ve konsola loglama

---

## 📦 Kurulum

1. Bu projeyi klonla veya dosyaları indir:

   ```bash
   git clone https://github.com/Egecher/deprem-sorgu.git
   cd deprem-sorgu
   ```

2. Gerekli paketleri yükle:

   ```bash
   npm install axios
   ```

3. Scripti çalıştır:

   ```bash
   node index.js
   ```

---

## 📜 Kullanım

Çalıştırıldığında, AFAD API’sine şu şekilde bir istek atar:

```
https://deprem.afad.gov.tr/apiv2/event/filter?start=YYYY-MM-DD HH:MM:SS&end=YYYY-MM-DD HH:MM:SS&orderby=magnitude&limit=1
```

### Örnek Çıktı:

```
https://deprem.afad.gov.tr/apiv2/event/filter?start=2025-8-11 14:13:20&end=2025-9-11 14:13:20&orderby=magnitude&limit=1
```

```json
[
  {
    "rms": "0.35",
    "eventID": "669410",
    "location": "Sındırgı (Balıkesir)",
    "latitude": "39.22861",
    "longitude": "28.1275",
    "depth": "7",
    "type": "ML",
    "magnitude": "2.1",
    "country": "Türkiye",
    "province": "Balıkesir",
    "district": "Sındırgı",
    "neighborhood": "İbiller",
    "date": "2025-08-11T14:14:26",
    "isEventUpdate": false,
    "lastUpdateDate": null
  }
]
```

---

## ⚠️ Notlar

* `limit` parametresini değiştirerek daha fazla sonuç çekebilirsin.
* `orderby` parametresini `time` yaparsan **en son depremi** çekebilirsin.
* AFAD API zaman parametrelerini `YYYY-MM-DD HH:MM:SS` formatında bekler.

---

## 🚀 Geliştirme Fikirleri

* CLI üzerinden parametre girerek (başlangıç tarihi, limit vb.) esnek sorgu yapılabilir.
* Gelen JSON verisi filtrelenip daha okunabilir bir tablo formatında gösterilebilir.
* Telegram/Discord bot entegrasyonu ile deprem bildirim sistemi kurulabilir.

---

## 🔗 Api Kullanımı Daha Fazla Bilgi İçin
https://deprem.afad.gov.tr/event-service