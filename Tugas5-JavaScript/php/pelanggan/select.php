<?php

require_once '../koneksi.php';

$sql = 'SELECT * FROM pelanggan';
$result = mysqli_query($connect, $sql);

if(mysqli_num_rows($result) > 0)
{
	$data = [];
	while($row = mysqli_fetch_assoc($result))
	{
		$data[] = $row;
	}
}

echo json_encode($data);