# PostgreSQL Ödevler

## Ödev 1

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **film** tablosunda bulunan **title** ve **description** sütunlarındaki verileri sıralayınız.
2. **film** tablosunda bulunan tüm sütunlardaki verileri film uzunluğu (length) 60 dan büyük **VE** 75 ten küçük olma koşullarıyla sıralayınız.
3. **film** tablosunda bulunan tüm sütunlardaki verileri rental\_rate 0.99 **VE** replacement\_cost 12.99 **VEYA** 28.99 olma koşullarıyla sıralayınız.
4. **customer** tablosunda bulunan first\_name sütunundaki değeri 'Mary' olan müşterinin last\_name sütunundaki değeri nedir?
5. **film** tablosundaki uzunluğu(length) 50 ten büyük OLMAYIP aynı zamanda rental\_rate değeri 2.99 veya 4.99 OLMAYAN verileri sıralayınız.

## Cevaplar 1

``` sql
--1
SELECT title, description FROM film;

--2
SELECT * FROM film WHERE length > 60 AND length < 75;

--3
SELECT * FROM film 
WHERE rental_rate > 0.99 
AND (replacement_cost = 12.99 OR replacement_cost = 28.99);

--4
SELECT last_name FROM customer 
WHERE first_name = 'Mary';

--5
SELECT * FROM film 
WHERE NOT length > 50 
AND NOT (rental_rate = 2.99 OR rental_rate = 4.99);
```

## Ödev 2

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **film** tablosunda bulunan tüm sütunlardaki verileri replacement cost değeri 12.99 dan büyük eşit ve 16.99 küçük olma koşuluyla sıralayınız ( BETWEEN - AND yapısını kullanınız.)
2. .**actor** tablosunda bulunan first\_name ve last\_name sütunlardaki verileri first\_name 'Penelope' veya 'Nick' veya 'Ed' değerleri olması koşuluyla sıralayınız. ( IN operatörünü kullanınız.)
3. **film** tablosunda bulunan tüm sütunlardaki verileri rental\_rate 0.99, 2.99, 4.99 **VE** replacement\_cost 12.99, 15.99, 28.99 olma koşullarıyla sıralayınız. ( IN operatörünü kullanınız.)

## Cevaplar 2

``` sql
--1
SELECT * FROM film
WHERE replacement_cost BETWEEN 12.99 AND 16.99;

--2
SELECT first_name, last_name FROM actor
WHERE first_name IN('Penelope', 'Nick', 'Ed');

--3
SELECT * FROM film
WHERE rental_rate IN(0.99, 2.99, 4.99) 
AND replacement_cost IN(12.99, 15.99, 28.99); 
```

## Ödev 3

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **country** tablosunda bulunan **country** sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.
2. **country** tablosunda bulunan **country** sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.
3. **film** tablosunda bulunan **title** sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.
4. **film** tablosunda bulunan tüm sütunlardaki verilerden **title** 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental\_rate 2.99 olan verileri sıralayınız.

## Cevaplar 3

``` sql
--1
SELECT country FROM country
WHERE country LIKE 'A%a';

--2
SELECT country FROM country
WHERE country LIKE '%_____n';

--3
SELECT * FROM film
WHERE title ILIKE '%t%t%t%t%';

--4
SELECT * FROM film 
WHERE title LIKE 'C' 
AND length > 90 AND rental_rate = 2.99;
```

## Ödev 4

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **film** tablosunda bulunan **replacement\_cost** sütununda bulunan birbirinden farklı değerleri sıralayınız.
2. **film** tablosunda bulunan **replacement\_cost** sütununda birbirinden farklı kaç tane veri vardır?
3. **film** tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
4. **country** tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
5. **city** tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?

## Cevaplar 4

``` sql
--1 
SELECT DISTINCT replacement_cost FROM film;

--2
SELECT Count(DISTINCT replacement_cost) FROM film;

--3
SELECT Count(*) FROM film
WHERE title LIKE 'T%' AND rating = 'G';

--4
SELECT COUNT(*) FROM country 
WHERE country LIKE '_____';

--5
SELECT COUNT(*) FROM city
WHERE city ILIKE '%r';
```

## Ödev 5

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **film** tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.
2. **film** tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.
3. **customer** tablosunda bulunan last\_name sütununa göre azalan yapılan sıralamada store\_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.

## Cevaplar 5

``` sql
--1
SELECT * FROM film
WHERE title LIKE '%n'
ORDER BY length DESC
LIMIT 5;

--2
SELECT * FROM film
WHERE title LIKE '%n'
ORDER BY length
OFFSET 5
LIMIT 5;

--3 
SELECT * FROM customer
WHERE store_id = 1
ORDER BY last_name DESC
LIMIT 4;
```

## Ödev 6

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **film** tablosunda bulunan **rental\_rate** sütunundaki değerlerin ortalaması nedir?
2. **film** tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?
3. **film** tablosunda bulunan filmlerden rental\_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?
4. **film** tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement\_cost değeri vardır?

## Cevaplar 6

```sql
--1
SELECT AVG(rental_rate) FROM film;

--2
SELECT COUNT(*) FROM film 
WHERE title LIKE 'C%';

--3
SELECT MAX(length) FROM film
WHERE rental_rate = 0.99;

--4 
SELECT COUNT(DISTINCT replacement_cost) FROM film
WHERE length > 150;
```

## Ödev 7

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **film** tablosunda bulunan filmleri **rating** değerlerine göre gruplayınız.
2. **film** tablosunda bulunan filmleri **replacement\_cost** sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement\_cost değerini ve karşılık gelen film sayısını sıralayınız.
3. **customer** tablosunda bulunan store\_id değerlerine karşılık gelen müşteri sayıları nelerdir?
4. **city** tablosunda bulunan şehir verilerini **country\_id** sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country\_id bilgisini ve şehir sayısını paylaşınız.

## Cevap 7

``` sql
--1
SELECT rating, COUNT(*) FROM film
GROUP BY rating;

--2 
SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(*) > 50;

--3
SELECT store_id, COUNT(*) FROM customer
GROUP BY store_id;

--4 
SELECT country_id, COUNT(*) FROM city
GROUP BY country_id
ORDER BY Count(*) DESC
LIMIT 1;
```
