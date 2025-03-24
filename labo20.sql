SELECT SUM(E.cantidad) AS cantidadesTotales, SUM(M.precio * (M.impuesto + 100) * 0.01 * E.cantidad) AS ImporteTotal
FROM entregan E
JOIN materiales M ON M.clave = E.clave
WHERE YEAR(E.fecha) = 1997;

SELECT P.razonsocial, COUNT(*) AS entregas, SUM(M.precio * (M.impuesto + 100) * 0.01 * E.cantidad) AS ImporteTotal
FROM proveedores P
JOIN entregan E ON P.rfc = E.rfc
JOIN materiales M ON M.clave = E.clave
GROUP BY P.razonsocial;

SELECT M.clave, M.descripcion, SUM(E.cantidad) AS Total, MIN(E.cantidad) AS MinimoEntregado, MAX(E.cantidad) AS MaximoEntregado, SUM(M.precio * (M.impuesto + 100) * 0.01 * E.cantidad) AS ImporteTotal
FROM materiales M
JOIN entregan E ON E.clave = M.clave
GROUP BY M.clave
HAVING AVG(E.cantidad) > 400;

SELECT P.razonsocial, M.clave, M.descripcion, AVG(E.cantidad) AS PromedioEntregado
FROM entregan E
JOIN proveedores P ON E.rfc = P.rfc
JOIN materiales M ON M.clave = E.clave
GROUP BY P.razonsocial, M.clave
HAVING AVG(E.cantidad) > 500;

SELECT P.razonsocial, M.clave, M.descripcion, AVG(E.cantidad) AS PromedioEntregado
FROM entregan E
JOIN proveedores P ON E.rfc = P.rfc
JOIN materiales M ON M.clave = E.clave
GROUP BY P.razonsocial, M.clave
HAVING AVG(E.cantidad) < 370 OR AVG(E.cantidad) > 450;

INSERT INTO `materiales` (`clave`, `descripcion`, `precio`, `impuesto`) VALUES
(2010, 'PVC 1/2 x 3m', 28.5, 2.8),
(2020, 'PVC 4 x 3m', 156, 15.6),
(2030, 'PVC 75mm x 1m', 31.55, 3.1),
(2040, 'PVC cuadrado 23.5 x 1.55mm 1m', 149, 14.9),
(2050, 'PVC 6" x 6m', 600, 60);

SELECT clave, descripcion FROM materiales WHERE clave NOT IN (SELECT clave FROM entregan);
SELECT descripcion FROM materiales WHERE clave NOT IN (SELECT clave FROM entregan WHERE numero = 5015);
