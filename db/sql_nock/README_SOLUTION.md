### 96年に3回以上注文した（Ordersが3つ以上紐づいている）Customerのidと、注文回数

[完成イメージ](./output_images/order_count_3.png)

```
SELECT CustomerID, count(*) as OrderCount FROM Orders
WHERE OrderDate > '1995-12-31' AND OrderDate < '1997-01-01'
GROUP BY CustomerID HAVING OrderCount >= 3
ORDER BY OrderCount DESC;
```

### 過去、最も多くのOrderDetailが紐づいたOrderを取得してください。何個OrderDetailが紐づいていたでしょうか？

```
SELECT OrderID, count(*) as OrderDetailCount FROM OrderDetails
GROUP BY OrderID
ORDER BY OrderDetailCount DESC
LIMIT 1;
```

[完成イメージ](./output_images/most_orders.png)

### Order数が多い順番にShipperのidを並べてください。Order数も表示してください

```
SELECT ShipperID, count(*) as ShippingCount FROM Orders
GROUP BY ShipperID
ORDER BY ShippingCount DESC;
```

[完成イメージ](./output_images/most_orders_shipper.png)


### 売上が高い順番にCountryを並べてください。売上も表示してください

[完成イメージ](./output_images/sales_country.png)

```
SELECT round(sum(quantity*price)) as sales, country FROM customers c
JOIN orders o ON c.customerId= o.customerId
JOIN orderdetails od ON o.orderid = od.orderid
JOIN products p ON od.productid = p.productid
GROUP BY country
ORDER BY sales DESC;
```

### 国ごとの売上を年ごとに集計する

[完成イメージ](./output_images/sales_country_year.png)

```
SELECT round(sum(quantity*price)) as sales, strftime('%Y', o.OrderDate) as OrderYear, country FROM customers c
JOIN orders o ON c.customerId= o.customerId
JOIN orderdetails od ON o.orderid = od.orderid
JOIN products p ON od.productid = p.productid
GROUP BY Country, OrderYear;
```


### Employeeテーブルに「Junior（若手）」カラム（boolean）を追加

[完成イメージ](./output_images/junior.png)

```
ALTER TABLE Employees
ADD Junior BOOLEAN NOT NULL DEFAULT FALSE;

WITH Junior_EmployeeIds AS (SELECT EmployeeID FROM Employees
WHERE BirthDate > '1960-01-01')
UPDATE Employees
SET Junior = true
WHERE EmployeeID IN Junior_EmployeeIds;
```

### Shipperにlong_relationカラム（boolean）を追加

[完成イメージ](./output_images/long_relation.png)

```
ALTER TABLE Shippers
ADD long_relation boolean not null default false;

WITH Long_Relation_Shipper_Ids AS (
SELECT o.ShipperId FROM Orders o
LEFT JOIN Shippers s ON o.ShipperID = s.ShipperID
GROUP BY o.ShipperID
HAVING count(*) > 70
)
UPDATE Shippers
SET long_relation = true
WHERE ShipperID IN Long_Relation_Shipper_Ids;
```

### それぞれのEmployeeが最後に担当したOrderと、その日付
[完成イメージ](./output_images/latest_order.png)

```
SELECT o.EmployeeID, MAX(o.OrderDate) as LatestOrderDate FROM Orders o
JOIN Employees e ON o.EmployeeID = e.EmployeeID
GROUP BY o.EmployeeID;
```

### NULLの扱いに慣れる
[完成イメージ](./output_images/employee_not_shown.png)
[完成イメージ](./output_images/employee_null.png)

```
SELECT * FROM Orders o
INNER JOIN Employees e ON o.CustomerID = e.EmployeeID;

SELECT * FROM Orders o
LEFT JOIN Employees e ON o.CustomerID = e.EmployeeID;
```

### JOINの扱いになれる

[完成イメージ](./output_images/employee_not_shown.png)
[完成イメージ](./output_images/employee_null.png)

(LEFT/INNER JOINするだけ)