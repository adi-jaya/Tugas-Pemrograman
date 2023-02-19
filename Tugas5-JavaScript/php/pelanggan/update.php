<?php

require_once '../koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$pelanggan = json_decode($data, true);
// var_dump($pelanggan); die;

$idPelanggan = $pelanggan['idpelanggan'];
$nama = $pelanggan['nama'];
$alamat = $pelanggan['alamat'];
$telepon = $pelanggan['telepon'];

$sql = "UPDATE pelanggan SET nama = '$nama', alamat = '$alamat', telepon = '$telepon' WHERE idpelanggan = $idPelanggan";

if (!empty($pelanggan) && !empty($alamat) && !empty($telepon))
{
	if ( mysqli_query($connect, $sql) )
	{
		echo 'Data berhasil diubah';
	}
	else
	{
		echo 'Gagal mengubah data';
	}
}
else
{
	echo 'Tidak boleh ada data yang kosong';
}