<?php

require_once '../koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$dataPesanan = json_decode($data, true);

// var_dump($dataPesanan);

$idorder = $dataPesanan['idorder'];
$idbarang = $dataPesanan['idbarang'];
$barang = $dataPesanan['barang'];
$jumlah = $dataPesanan['jumlah'];
$harga = $dataPesanan['harga'];
$idpelanggan = $dataPesanan['idpelanggan'];
$pelanggan = $dataPesanan['pelanggan'];
$alamat = $dataPesanan['alamat'];

$sql = "INSERT INTO orderdetail (idorderdetail, idorder, idbarang, barang, jumlah, harga, idpelanggan, pelanggan, alamat) VALUES('', '$idorder', '$idbarang', '$barang', '$jumlah', '$harga', '$idpelanggan', '$pelanggan', '$alamat')";

mysqli_query($connect, $sql);

echo 'Pesanan telah dikonfirmasi dan akan dikirim';