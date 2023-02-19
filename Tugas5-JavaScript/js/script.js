$(document).ready(function() {
	
	// ----- Menampilkan ----- //

	getAllProducts();			// Menampilkan Produk
	getAllPelanggan();			// Menampilkan Pelanggan
	getAllCategoryProduct();	// Get kategori produk

	// ----- Konfigurasi Tombol ----- //

	// Set tombol 'Buka | Tutup' - Show & Hide Table Product
	$('#btn-tblProduk').dblclick( function() {
		$('#tblProduk').show();
		$('#btn-kategori').show();
	});
	
	$('#btn-tblProduk').click( function() {
		$('#tblProduk').hide();
		$('#btn-kategori').hide();
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

	// Set tombol ikon sampah (hapus)
	$('#tbody-tblPelanggan').on('click', '#btn-delete', function() {
		let idpelanggan = $(this).attr('id-pelanggan');
		( confirm('Konfirmasi untuk menghapus data pelanggan:') ? deletePelanggan(idpelanggan) : undefined );
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

	// Set tombol 'Cari' di modal
	$('#btn-cari').click( function() {
		let kategori = document.querySelector('#selectKategori').value;
		(kategori === 'semuaProduk') ? getAllProducts(100) : getProductOfCategory(kategori);
	});

	// Set icon keranjang di tabel produk
	$('#tbody-tblProduk').on('click', '#btn-addCart', function() {
		let idProduk = $(this).attr('id-produk');
		addProductToCart(idProduk);
	});

	// Set icon user-check di tabel pelanggan
	$('#tbody-tblPelanggan').on('click', '#btn-pemesan', function() {
		let idPelanggan = $(this).attr('id-pelanggan');
		addPelangganToCart(idPelanggan);
	});

	// Set icon chekout di tabel pesanan
	$('#checkout').click(checkout);
	
	
	// ------------------------------------------------------- //
	// ---------------------- Functions ---------------------- //
	// ------------------------------------------------------- //
	
	
	// ----- ----- Functions to Set Data Product  ----- ----- //

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
					tbody += `<tr class="align-middle">
								<td>${no++}</td>
								<td>${product.title}</td>
								<td>${product.description}</td>
								<td>${product.brand}</td>
								<td>${product.price}$</td>
								<td>★${product.rating}</td>
								<td>${product.stock}</td>
								<td class="text-center" style="width: 50px">
									<button type="button" id="btn-addCart" class="btn btn-sm btn-light" title="Masukkan ke keranjang" id-produk="${product.id}">
										<img src="assets/icon/shopping-cart.svg" alt="shopping-cart.svg">
									</button>
								</td>
							</tr>`;
				});

				$('table > #tbody-tblProduk').html(tbody);
			}
		});
	}

	
	// ----- Get All Product of Category ----- //
	function getProductOfCategory(category) {
		$.ajax({
			method 		: "GET",
			url	  		: `https://dummyjson.com/products/category/${category}`,
			dataType	: "json",
			success		: function(response) {

				let products = response.products;

				let no = 1;
				let tbody = ``;
				
				$.each(products, function(key, product) {
					
					tbody += `<tr>
								<td>${no++}</td>
								<td>${product.title}</td>
								<td>${product.description}</td>
								<td>${product.brand}</td>
								<td>${product.price}$</td>
								<td>★${product.rating}</td>
								<td>${product.stock}</td>
								<td class="text-center" style="width: 50px">
									<button type="button" id="btn-addCart" class="btn btn-sm btn-light" title="Masukkan ke keranjang" id-produk="${product.id}">
										<img src="assets/icon/shopping-cart.svg" alt="shopping-cart.svg">
									</button>
								</td>
							</tr>`;
				});

				$('table > #tbody-tblProduk').html(tbody);
			}
		});
	}

	// ----- Get All Category ----- //
	function getAllCategoryProduct()
	{
		$.ajax({
			method		: 'GET',
			url 		: 'https://dummyjson.com/products/categories',
			dataType 	: 'json',
			success 	: function(categories) {
				let listOption = `<option selected value="semuaProduk">semua produk</option>`;

				categories.forEach( category => {
					listOption += `<option value="${category}">${category}</option>`;
				});

				$('#selectKategori').html(listOption);
			}
		});
	}

	
	// ----- ----- Functions to Set Data Pelaggan ----- ----- //

	// ----- Get All Pelanggan ----- //
	function getAllPelanggan()
	{
		$.ajax({
			type 		: 'get',
			url			: 'php/pelanggan/select.php', 
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
										<img src="assets/icon/pencil.svg">
									</button>
								</td>
								<td class="text-center" style="width: 50px">
									<button type="button" id="btn-delete" class="btn btn-sm btn-light" title="Hapus" id-pelanggan=${pelanggan.idpelanggan}>
										<img src="assets/icon/trash.svg">
									</button>
								</td>
								<td class="text-center" style="width: 50px">
									<button type="button" id="btn-pemesan" class="btn btn-sm btn-light" title="Pilih pembeli" id-pelanggan=${pelanggan.idpelanggan}>
										<img src="assets/icon/user-check.svg" alt="user-check">
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
			url 	: 'php/pelanggan/insert.php',
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
			url 	: 'php/pelanggan/selectPelanggan.php',
			data 	: JSON.stringify(idpelanggan),
			success	: function(response) {
				let pelanggan = JSON.parse(response);

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
			url		: 'php/pelanggan/update.php',
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
			url		: 'php/pelanggan/delete.php',
			data 	: JSON.stringify(idpelanggan),
			success	: function(response) {
				getAllPelanggan();
				
				$('#message').attr('class', 'alert alert-secondary alert-dismissible fade show py-0 my-0 mb-2 rounded-pill');
				$('#message > span').text(response);
				$('#message > span').after('<button type="button" class="btn-close p-0 pt-2 pe-4" data-bs-dismiss="alert" aria-label="Close"></button>');
			}
		});
	}

	// ----- ----- Functions to Set Order Detail ----- ----- //

	let dataPesanan = {
		idorder 	: 0,
		idbarang	: '',
		barang		: '',
		jumlah      : '',
		harga 		: '',
		idpelanggan : '',
		pelanggan 	: '',
		alamat 		: ''
	};

	function addProductToCart(idproduk)
	{
		$.ajax({
			method 		: "GET",
			url		  	: `https://dummyjson.com/products/${idproduk}`,
			dataType	: "json",
			success		: function(product) {
				$('#tbody-tblPesanan > tr > #produk').text(product.title);
				$('#tbody-tblPesanan > tr > #harga').text(product.price);

				dataPesanan.idbarang = product.id;
				dataPesanan.barang = product.title;
				dataPesanan.harga = product.price;
			}
		});
	}

	function addPelangganToCart(idpelanggan)
	{
		$.ajax({
			method 	: 'post',
			url 	: 'php/pelanggan/selectPelanggan.php',
			data 	: JSON.stringify(idpelanggan),
			success	: function(response) {
				let pelanggan = JSON.parse(response);
				$('#tbody-tblPesanan > tr > #pemesan').text(pelanggan.nama);

				dataPesanan.idpelanggan = pelanggan.idpelanggan;
				dataPesanan.pelanggan = pelanggan.nama;
				dataPesanan.alamat = pelanggan.alamat;
			}
		});
	}

	function checkout()
	{
		++dataPesanan.idorder;
		dataPesanan.jumlah = $('#jmlPesanan').val();

		$.ajax({
			method	: 'POST',
			url 	: 'php/orderdetail/insert.php',
			data 	: JSON.stringify(dataPesanan),
			success	: response => alert(response)
		})
	}

	// ---------------------------------------------------------------------- //

	// ----- Remove Input Value  ----- //
	function removeValue()
	{
		$('#idpelanggan').val('');
		$('#nama').val('');
		$('#alamat').val('');
		$('#telepon').val('');
	}
});