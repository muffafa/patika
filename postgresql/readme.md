# PostgreSQL Ödevler

Bu dosya patikadaki sql kursunda yer alan örnek soruları ve onların çözümlerini içermektedir. SQL bilginizi teest etmek için kursu izlemeden de soruları çözmeyi deneyebilirsiniz. Database linki ve kurs linki aşağıda yer almaktadır.

[Patika SQL KURSU](https://app.patika.dev/courses/sql)

[dvdrental nedir?](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/)

[dvdrental veritabanı indirme linki](https://www.postgresqltutorial.com/wp-content/uploads/2019/05/dvdrental.zip)

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

## Ödev 8

1. **test** veritabanınızda **employee** isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
2. Oluşturduğumuz **employee** tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
3. Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
4. Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

## Cevap 8

``` sql
--1
CREATE TABLE employee(
 id serial PRIMARY KEY,
 name VARCHAR(50) NOT NULL,
 birthday DATE NOT NULL,
 email VARCHAR(50) NOT NULL;
);

--2
INSERT INTO employee (id, name, birthday, email) values (1, 'Isadore Franciskiewicz', '1959-05-27', 'ifranciskiewicz0@wikia.com');
INSERT INTO employee (id, name, birthday, email) values (2, 'Alric Mingasson', '1997-08-19', 'amingasson1@bloglines.com');
INSERT INTO employee (id, name, birthday, email) values (3, 'Sim Erat', '1996-03-26', 'serat2@cdc.gov');
INSERT INTO employee (id, name, birthday, email) values (4, 'Ofella Queen', '1961-04-12', 'oqueen3@google.cn');
INSERT INTO employee (id, name, birthday, email) values (5, 'Lesli Emm', '1961-07-26', 'lemm4@spotify.com');
INSERT INTO employee (id, name, birthday, email) values (6, 'Sawyere O'' Shea', '1990-11-23', 'so5@wufoo.com');
INSERT INTO employee (id, name, birthday, email) values (7, 'Maurits Gabrieli', '1975-11-03', 'mgabrieli6@webs.com');
INSERT INTO employee (id, name, birthday, email) values (8, 'Berri Reicharz', '1957-10-13', 'breicharz7@typepad.com');
INSERT INTO employee (id, name, birthday, email) values (9, 'Eleni Fellini', '1977-07-25', 'efellini8@google.de');
INSERT INTO employee (id, name, birthday, email) values (10, 'Iolanthe Readshall', '1985-06-17', 'ireadshall9@nih.gov');
INSERT INTO employee (id, name, birthday, email) values (11, 'Brandyn O''Cleary', '1996-08-30', 'boclearya@addtoany.com');
INSERT INTO employee (id, name, birthday, email) values (12, 'Emilee Magwood', '1961-06-22', 'emagwoodb@yelp.com');
INSERT INTO employee (id, name, birthday, email) values (13, 'Jessamyn Records', '1967-07-24', 'jrecordsc@youku.com');
INSERT INTO employee (id, name, birthday, email) values (14, 'Sebastian Greydon', '1993-10-17', 'sgreydond@blogger.com');
INSERT INTO employee (id, name, birthday, email) values (15, 'Cairistiona Raymont', '1982-11-16', 'craymonte@bizjournals.com');
INSERT INTO employee (id, name, birthday, email) values (16, 'Shawnee Bosence', '1973-01-28', 'sbosencef@hao123.com');
INSERT INTO employee (id, name, birthday, email) values (17, 'Reynolds Malec', '1966-01-16', 'rmalecg@reuters.com');
INSERT INTO employee (id, name, birthday, email) values (18, 'Jarvis Garment', '1984-09-04', 'jgarmenth@cnbc.com');
INSERT INTO employee (id, name, birthday, email) values (19, 'Hamel Dyble', '2002-07-31', 'hdyblei@sun.com');
INSERT INTO employee (id, name, birthday, email) values (20, 'Dulcea Abramino', '1999-11-10', 'dabraminoj@dedecms.com');
INSERT INTO employee (id, name, birthday, email) values (21, 'Ettore Overstreet', '1977-02-04', 'eoverstreetk@ehow.com');
INSERT INTO employee (id, name, birthday, email) values (22, 'Marysa Starling', '1979-03-09', 'mstarlingl@disqus.com');
INSERT INTO employee (id, name, birthday, email) values (23, 'Raimondo O''Doireidh', '1991-09-29', 'rodoireidhm@feedburner.com');
INSERT INTO employee (id, name, birthday, email) values (24, 'Cacilia Coneau', '1992-08-30', 'cconeaun@barnesandnoble.com');
INSERT INTO employee (id, name, birthday, email) values (25, 'Nan Tasseler', '1953-07-15', 'ntasselero@acquirethisname.com');
INSERT INTO employee (id, name, birthday, email) values (26, 'Karlan Cawte', '1973-09-12', 'kcawtep@hugedomains.com');
INSERT INTO employee (id, name, birthday, email) values (27, 'Mame Girardetti', '1996-03-04', 'mgirardettiq@ft.com');
INSERT INTO employee (id, name, birthday, email) values (28, 'Stavro Senechault', '1994-10-12', 'ssenechaultr@themeforest.net');
INSERT INTO employee (id, name, birthday, email) values (29, 'Amelia Ramos', '1954-07-23', 'aramoss@ifeng.com');
INSERT INTO employee (id, name, birthday, email) values (30, 'Ortensia Holworth', '1972-10-15', 'oholwortht@g.co');
INSERT INTO employee (id, name, birthday, email) values (31, 'Ferris Kermath', '1999-04-08', 'fkermathu@irs.gov');
INSERT INTO employee (id, name, birthday, email) values (32, 'Berget Nother', '1989-11-17', 'bnotherv@facebook.com');
INSERT INTO employee (id, name, birthday, email) values (33, 'Emilia Fieldsend', '2001-12-01', 'efieldsendw@china.com.cn');
INSERT INTO employee (id, name, birthday, email) values (34, 'Iorgo Joannidi', '1988-08-25', 'ijoannidix@ameblo.jp');
INSERT INTO employee (id, name, birthday, email) values (35, 'Eddy Bollam', '1981-08-09', 'ebollamy@shutterfly.com');
INSERT INTO employee (id, name, birthday, email) values (36, 'Griswold Tegeller', '1961-10-06', 'gtegellerz@merriam-webster.com');
INSERT INTO employee (id, name, birthday, email) values (37, 'Jobina McKane', '1965-12-20', 'jmckane10@instagram.com');
INSERT INTO employee (id, name, birthday, email) values (38, 'Cilka Copello', '1969-04-21', 'ccopello11@bbc.co.uk');
INSERT INTO employee (id, name, birthday, email) values (39, 'Bailie Earnshaw', '1970-07-13', 'bearnshaw12@goo.gl');
INSERT INTO employee (id, name, birthday, email) values (40, 'Audra Dinley', '1950-04-04', 'adinley13@deviantart.com');
INSERT INTO employee (id, name, birthday, email) values (41, 'Natala Bardey', '1951-03-04', 'nbardey14@devhub.com');
INSERT INTO employee (id, name, birthday, email) values (42, 'Hetty Kenson', '1967-10-13', 'hkenson15@tinyurl.com');
INSERT INTO employee (id, name, birthday, email) values (43, 'Sheba Wandrey', '2002-07-13', 'swandrey16@kickstarter.com');
INSERT INTO employee (id, name, birthday, email) values (44, 'Pepillo Blinckhorne', '1966-06-17', 'pblinckhorne17@dailymail.co.uk');
INSERT INTO employee (id, name, birthday, email) values (45, 'Louella Dealy', '1962-08-17', 'ldealy18@opera.com');
INSERT INTO employee (id, name, birthday, email) values (46, 'Karine Minister', '1970-09-22', 'kminister19@imgur.com');
INSERT INTO employee (id, name, birthday, email) values (47, 'Quint Ellson', '1993-03-16', 'qellson1a@china.com.cn');
INSERT INTO employee (id, name, birthday, email) values (48, 'Adolf Byram', '1959-01-11', 'abyram1b@facebook.com');
INSERT INTO employee (id, name, birthday, email) values (49, 'Anneliese Ringsell', '2000-07-29', 'aringsell1c@over-blog.com');
INSERT INTO employee (id, name, birthday, email) values (50, 'Hillary Geraldi', '1993-10-25', 'hgeraldi1d@irs.gov');

--3
UPDATE employee
 SET birthday = '1994-12-30'
 WHERE birthday >= '1995-01-01'
 AND id IN (
  SELECT id FROM employee
  ORDER BY birthday DESC
  LIMIT 5
 )
 RETURNING *;

--4
DELETE from employee
WHERE id < 6
RETURNING *;
```

## Ödev 9

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **city** tablosu ile **country** tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
2. **customer** tablosu ile **payment** tablosunda bulunan payment\_id ile customer tablosundaki first\_name ve last\_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
3. **customer** tablosu ile **rental** tablosunda bulunan rental\_id ile customer tablosundaki first\_name ve last\_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.

## Cevaplar 9

```sql
--1
SELECT city, country FROM city
INNER JOIN country ON country.country_id = city.country_id;

--2
SELECT payment_id, first_name, last_name from customer
INNER JOIN payment ON payment.customer_id = customer.customer_id;

--3
SELECT rental_id, first_name, last_name from rental
INNER JOIN customer ON rental.customer_id = customer.customer_id;
```

## Ödev 10

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **city** tablosu ile **country** tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
2. **customer** tablosu ile **payment** tablosunda bulunan payment\_id ile customer tablosundaki first\_name ve last\_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.
3. **customer** tablosu ile **rental** tablosunda bulunan rental\_id ile customer tablosundaki first\_name ve last\_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.

## Cevaplar 10

```sql
--1
SELECT city, country from city
LEFT JOIN country ON country.country_id = city.country_id;

--2
SELECT payment_id, first_name, last_name from customer
RIGHT OUTER JOIN payment ON customer.customer_id = payment.customer_id;

--3
SELECT rental_id, first_name, last_name FROM customer 
FULL JOIN rental ON rental.customer_id = customer.customer_id;
```

## Ödev 11

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **actor** ve **customer** tablolarında bulunan **first\_name** sütunları için tüm verileri sıralayalım.
2. **actor** ve **customer** tablolarında bulunan **first\_name** sütunları için kesişen verileri sıralayalım.
3. **actor** ve **customer** tablolarında bulunan **first\_name** sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
4. İlk 3 sorguyu tekrar eden veriler için de yapalım.

## Cevaplar 11

```sql
--1
(SELECT first_name FROM actor)
UNION 
(SELECT first_name FROM customer)

--2
(SELECT first_name FROM actor)
INTERSECT 
(SELECT first_name FROM customer)

--3
(SELECT first_name FROM actor)
EXCEPT
(SELECT first_name FROM customer)

--4
    --last_name
        --a
        (SELECT last_name FROM actor)
        UNION 
        (SELECT last_name FROM customer)


        --b
        (SELECT last_name FROM actor)
        INTERSECT 
        (SELECT last_name FROM customer)

        --c
        (SELECT last_name FROM actor)
        EXCEPT
        (SELECT last_name FROM customer)

    --last_update
        --a
        (SELECT last_update FROM actor)
        UNION 
        (SELECT last_update FROM customer)


        --b
        (SELECT last_update FROM actor)
        INTERSECT 
        (SELECT last_update FROM customer)

        --c
        (SELECT last_update FROM actor)
        EXCEPT
        (SELECT last_update FROM customer)
```

## Ödev 12

Aşağıdaki sorgu senaryolarını **dvdrental** örnek veri tabanı üzerinden gerçekleştiriniz.

1. **film** tablosunda film uzunluğu **length** sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
2. **film** tablosunda en yüksek rental\_rate değerine sahip kaç tane film vardır?
3. **film** tablosunda en düşük rental\_rate ve en düşün replacement\_cost değerlerine sahip filmleri sıralayınız.
4. **payment** tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.

## Cevaplar 12

```sql
--1
--SELECT AVG(length) from film; --115.272
--SELECT * from film WHERE length > 115.272; --489
SELECT COUNT(*) FROM film
WHERE length > 
(
SELECT AVG(length) From film
);

--2
--SELECT * from film ORDER BY rental_rate DESC; --4.99
--SELECT * from film WHERE rental_rate = 4.99; --336
SELECT COUNT(*) FROM film
WHERE rental_rate =
(
SELECT MAX(rental_rate) From film
);

--3
SELECT title, replacement_cost, rental_rate from film 
WHERE rental_rate = 
(
SELECT MIN(rental_rate) from film
) 
AND replacement_cost =
(
SELECT MAX(replacement_cost) from film
);

--4
SELECT first_name, last_name from customer
WHERE customer_id = ANY
(
SELECT COUNT(customer_id) AS shoping_counter  from payment
GROUP BY customer_id
ORDER BY shoping_counter DESC
);
````
