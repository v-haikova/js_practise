# QA Pro REST API Performance Tests

## 🔧 Інструкція
1. Запустіть Docker контейнер або завантажте Node.js додаток:
    `docker run -p 3001:3001 oleksandrgolubishko/qa_pro_rest_app`

   (або)

   1.1 `git clone https://github.com/oleksandrgo/qa_pro_rest_app.git`
   1.2. `node .\server.js`

2. Запустіть тест:
   *Windows*`.\jmeter.bat -n -t Valeriia_Haikova.jmx -l results.jtl -e -o report/`
   *Linux\MacOS*`./jmeter.sh -n -t Valeriia_Haikova.jmx -l results.jtl -e -o report/`

3. **(Optional)** завантажте та запустіть ServerAgent для інтеграції з PerfMon (при успішному налаштуванні увімкніть)

## 🔗 Target: `http://localhost:3001/characters`

---

## 1.  

### 🔧 Test Settings
- **Thread Group**: 10 users
- **Ramp-Up Period**: 10 seconds
- **Loops**: Infinite
- **Duration**: 30 sec.
- 
### 📊 Основні Метрики

| Метрика             | Значення              |
|---------------------|-----------------------|
| Average Response Time | 2.33 ms             |
| Median (50%) Time     | 3.0 ms              |
| 95th Percentile       | 5.0 ms              |
| 99th Percentile       | 8.0 ms              |
| Throughput            | 3539.08 requests/sec|
| Error %               | 0.0%                |

### 💾 Звіт: 
`csv/result1.csv`
`report/result1.html`

---

## 2.  

### 🔧 Test Settings
- **Thread Group**: 100 users
- **Ramp-Up Period**: 20 seconds
- **Loops**: Infinite
- **Duration**: 60 sec.
- 
### 📊 Основні Метрики

| Метрика             | Значення              |
|---------------------|-----------------------|
| Average Response Time | 22.33 ms            |
| Median (50%) Time     | 26.0 ms             |
| 95th Percentile       | 30.0 ms             |
| 99th Percentile       | 33.0 ms             |
| Throughput            | 3731.92 requests/sec|
| Error %               | 0.0%                |

### 💾 Звіт: 
`csv/result2.csv`
`report/result2.html`

---

## 3.  

### 🔧 Test Settings
- **Thread Group**: 1000 users
- **Ramp-Up Period**: 30 seconds
- **Loops**: Infinite
- **Duration**: 90 sec.

### 📊 Основні Метрики

| Метрика             | Значення             |
|---------------------|----------------------|
| Average Response Time | 282.45 ms           |
| Median (50%) Time     | 365.00 ms           |
| 95th Percentile       | 477.00 ms           |
| 99th Percentile       | 507.00 ms           |
| Throughput            | 2949.12 requests/sec|
| Error %               | 0.0%                |

### 💾 Звіт: 
`csv/result3.csv`
`report/result3.html`

## 🛠 Оптимізація:
- Додати Grafana/Prometeus для забору метрик
- Рекомендовано додати Redis-кеш для GET-запитів
- Використати пул з'єднань до БД
- Оптимізувати запити з найбільшим часом відповіді
- Можливість додавання load balancing на рівні API