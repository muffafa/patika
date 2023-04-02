# Ödevler

## Proje 1

**\[22,27,16,2,18,6\]** -> Insertion Sort

- Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
- Big-O gösterimini yazınız.
- Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

1. Average case: Aradığımız sayının ortada olması
2. Worst case: Aradığımız sayının sonda olması
3. Best case: Aradığımız sayının dizinin en başında olması.

- **\[7,3,5,8,2,9,4,15,6**\] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

### Cevap 1

a-

1. \[22, 27, 16, 2, 18, 6\] -> \[22, 27, 16, 2, 18, 6\] (no swap)
2. \[22, 27, 16, 2, 18, 6\] -> \[22, 16, 27, 2, 18, 6\] -> \[16, 22, 27, 2, 18, 6\]
3. \[16, 22, 27, 2, 18, 6\] -> \[2, 16, 22, 27, 18, 6\] -> \[2, 16, 18, 22, 27, 6\] -> \[2, 16, 18, 22, 6, 27\]
4. \[2, 16, 18, 22, 6, 27\] -> \[2, 16, 18, 6, 22, 27\] -> \[2, 16, 6, 18, 22, 27\] -> \[2, 6, 16, 18, 22, 27\]

b- O(n^2)

c- Avarage case

d -

1. \[7, 3, 5, 8, 2, 9, 4, 15, 6\] -> \[2, 3, 5, 8, 7, 9, 4, 15, 6\]
2. \[2, 3, 5, 8, 7, 9, 4, 15, 6\] -> \[2, 3, 4, 8, 7, 9, 5, 15, 6\]
3. \[2, 3, 4, 8, 7, 9, 5, 15, 6\] -> \[2, 3, 4, 8, 7, 9, 5, 15, 6\] (no swap)
4. \[2, 3, 4, 8, 7, 9, 5, 15, 6\] -> \[2, 3, 4, 5, 7, 9, 8, 15, 6\]

## Proje 2

**\[16,21,11,8,12,22\]** \-> Merge Sort

- Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
- Big-O gösterimini yazınız.
  
### Cevap 2

a-

Diziyi iki yarıya ayıralım:

[16, 21, 11] [8, 12, 22]

Her yarımızı özyenilemeli olarak sıralayalım:

[16, 21, 11] -> [11, 16, 21]
[8, 12, 22] -> [8, 12, 22]

İki sıralı yarımızı birleştirerek tek bir sıralı dizi oluşturalım:

[11, 16, 21] [8, 12, 22] -> [8, 11, 12, 16, 21, 22]

b-

O(n log n)
