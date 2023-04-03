# PostgreSQL Ödevler

## Ödev 1

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **film** tablosunda bulunan **title** ve **description** sütunlarındaki verileri sıralayınız.
2. **film** tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük **VE** 75 ten küçük olma koşullarıyla sıralayınız.
3. **film** tablosunda bulunan tüm sütunlardaki verileri rental\_rate 0.99 **VE** replacement\_cost 12.99 **VEYA** 28.99 olma koşullarıyla sıralayınız.
4. **customer** tablosunda bulunan first\_name sütunundaki değeri 'Mary' olan müşterinin last\_name sütunundaki değeri nedir?
5. **film** tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental\_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.

## Cevap 1

1. `SELECT title, description FROM film;`
2. `SELECT * FROM film WHERE length > 60 AND length < 75;`
3. `SELECT * FROM film WHERE rental_rate > 0.99 AND (replacement_cost = 12.99 OR replacement_cost = 28.99);`
4. `SELECT last_name FROM customer WHERE first_name = 'Mary';`
5. `SELECT * FROM film WHERE NOT length > 50 AND NOT (rental_rate = 2.99 OR rental_rate = 4.99);`
