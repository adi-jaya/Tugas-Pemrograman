$(document).ready(function() {
	
	getAllProducts();
	getAllPelanggan();

	// Set tombol 'Buka | Tutup' - Show & Hide Table Product
	$('#btn-tblProduk').dblclick( function() {
		$('#tblProduk').show();
	});

	$('#btn-tblProduk').click( function() {
		$('#tblProduk').hide();
	});

	// Set tombol 'Buka | Tutup' - Show & Hide Table Pelanggan
	$('#btn-tblPelanggan').dblclick( function() {
		$('#tblPelanggan').show();
		$('#btn-tambah').show();
	});

	$('#btn-tblPelanggan').click( function() {
		$('#tblPelanggan').hide();
		$('#btn-tambah').hide();
	});

	// Set tombol 'Tambah' - Tambah data pelanggan
	$('#btn-tambah').click(function() {
		$('#modalLabel').text('Tambah Data Pelanggan');
		removeValue();
	});

	// Set tombol ikon pencil (update)
	$('#tbody-tblPelanggan').on('click', '#btn-update', function() {
		$('#modalLabel').text('Perbarui Data Pelanggan');
		let idpelanggan = $(this).attr('id-pelanggan');
		selectDataToUpdate(idpelanggan);
	});

	// Set tombol 'Simpan' di Modal
	$('#btn-simpan').click(function() {
		let data = {
			'idpelanggan'	: $('#idpelanggan').val(),
 			'nama'			: $('#nama').val(),
			'alamat'		: $('#alamat').val(),
			'telepon'		: $('#telepon').val(),
		};
		
		removeValue();

		(data.idpelanggan === '') ? addPelanggan(data) : updatePelanggan(data);
	});

	// Set tombol ikon sampah (hapus)
	$('#tbody-tblPelanggan').on('click', '#btn-delete', function() {
		let idpelanggan = $(this).attr('id-pelanggan');
		( confirm('Konfirmasi untuk menghapus data pelanggan:') ? deletePelanggan(idpelanggan) : undefined );
	});
	
	
	// ------------------------------------------------------- //
	// ---------------------- Functions ---------------------- //
	// ------------------------------------------------------- //
	
	// ----- Get All Products ----- //
	function getAllProducts(limit = 30)
	{
		$.ajax({
			method 		: "GET",
			url		  	: `https://dummyjson.com/products?limit=${limit}`,
			dataType	: "json",
			success		: function(response) {
				let products = response.products;
				
				let tbody = ``;
				let no = 1;

				$.each(products, function(key, product) {
					tbody += `<tr>
								<td>${no++}</td>
								<td>${product.title}</td>
								<td>${product.description}</td>
								<td>${product.brand}</td>
								<td>${product.price}$</td>
								<td>★${product.rating}</td>
								<td>${product.stock}</td>
							</tr>`;
				});

				$('table > #tbody-tblProduk').html(tbody);
			}
		});
	}

	// ----- Get All Pelanggan ----- //
	function getAllPelanggan()
	{
		$.ajax({
			type 		: 'get',
			url			: 'php/select.php',
			dataType 	: 'json',
			success		: function(response) {
				let tbody = ``;
				let no = 1;

				$.each(response, function(key, pelanggan) {
					tbody += `<tr>
								<td>${no++}</td>
								<td>${pelanggan.nama}</td>
								<td>${pelanggan.alamat}</td>
								<td>${pelanggan.telepon}</td>
								<td class="text-center" style="width: 50px">
									<button type="button" id="btn-update" class="btn btn-sm btn-light" data-bs-toggle="modal" data-bs-target="#modalFormPelanggan" title="Ubah" id-pelanggan=${pelanggan.idpelanggan}>
										<img src="assets\\icon\\pencil.svg">
									</button>
								</td>
								<td class="text-center" style="width: 50px">
									<button type="button" id="btn-delete" class="btn btn-sm btn-light" title="Hapus" id-pelanggan=${pelanggan.idpelanggan}>
										<img src="assets\\icon\\trash.svg">
									</button>
								</td>
							</tr>`
				})

				$('table > #tbody-tblPelanggan').html(tbody);
			}
		})
	}

	// ----- Tambah Data Pelanggan ----- //
	function addPelanggan(data)
	{
		$.ajax({
			method	: 'POST',
			url 	: 'php/insert.php',
			data 	: JSON.stringify(data),
			success	: function(response) {
				getAllPelanggan();
				
				$('#message').attr('class', 'alert alert-secondary alert-dismissible fade show py-0 my-0 mb-2 rounded-pill');
				$('#message > span').text(response);
				$('#message > span').after('<button type="button" class="btn-close p-0 pt-2 pe-4" data-bs-dismiss="alert" aria-label="Close"></button>');
			}
		})
	}

	// ----- Data Pelanggan yang akan diubah ----- //
	function selectDataToUpdate(idpelanggan)
	{
		$.ajax({
			method 	: 'post',
			url 	: 'php/selectUpdate.php',
			data 	: JSON.stringify(id),
			success	: function(response) {
				// console.log(response);
				let pelanggan = JSON.parse(response);
				// console.log(pelanggan);

				$('#idpelanggan').val(pelanggan.idpelanggan);
				$('#nama').val(pelanggan.nama);
				$('#alamat').val(pelanggan.alamat);
				$('#telepon').val(pelanggan.telepon);
			}
		});
	}

	// ----- Perbarui Data Pelanggan ----- //
	function updatePelanggan(data)
	{
		$.ajax({
			method	: 'post',
			url		: 'php/update.php',
			data 	: JSON.stringify(data),
			success	: function(response) {
				getAllPelanggan();
				
				$('#message').attr('class', 'alert alert-secondary alert-dismissible fade show py-0 my-0 mb-2 rounded-pill');
				$('#message > span').text(response);
				$('#message > span').after('<button type="button" class="btn-close p-0 pt-2 pe-4" data-bs-dismiss="alert" aria-label="Close"></button>');
			}
		})		
	}

	// ----- Hapus Data Pelanggan ----- //
	function deletePelanggan(idpelanggan)
	{
		$.ajax({
			method	: 'post',
			url		: 'php/delete.php',
			data 	: JSON.stringify(idpelanggan),
			success	: function(response) {
				getAllPelanggan();
				
				$('#message').attr('class', 'alert alert-secondary alert-dismissible fade show py-0 my-0 mb-2 rounded-pill');
				$('#message > span').text(response);
				$('#message > span').after('<button type="button" class="btn-close p-0 pt-2 pe-4" data-bs-dismiss="alert" aria-label="Close"></button>');
			}
		});
	}

	// ----- Remove Input Value  ----- //
	function removeValue()
	{
		$('#idpelanggan').val('');
		$('#nama').val('');
		$('#alamat').val('');
		$('#telepon').val('');
	}

});