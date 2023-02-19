<?php

require_once '../koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$pelanggan = json_decode($data, true);

// var_dump($dataPelanggan);

$nama = $pelanggan['nama'];
$alamat = $pelanggan['alamat'];
$telepon = $pelanggan['telepon'];

$sql = "INSERT INTO pelanggan (idpelanggan, nama, alamat, telepon) VALUES('', '$nama', '$alamat', '$telepon')";

if (!empty($nama) && !empty($alamat) && !empty($telepon))
{
	if ( mysqli_query($connect, $sql) )
	{
		echo 'Data berhasil ditambahkan';
	}
	else
	{
		echo 'Gagal menambahkan data';
	}
}
else
{
	echo 'Tidak ada data untuk ditambahkan';
}