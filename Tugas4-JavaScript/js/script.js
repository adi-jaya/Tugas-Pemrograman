$(document).ready(function() {
	
	// Show all product
	getAllProducts()

	// Set tombol All Product
	$('#btn-allProduct').click(() => getAllProducts(100));

	// Set tombol Product Categories
		// Show
	$('#btn-category').dblclick( function() {
		$('#listCategory').attr('class', 'd-grid gap-1 mt-2 p-2 bg-dark');
		($('#listCategory').html() === '') ? getCategory() : $('#listCategory').show();		
	});
		// Hide
	$('#btn-category').click(function() {
		$('#listCategory').attr('class', '');
		$('#listCategory').hide();
	})

	// Set tombol di daftar Product Categories
	$('#listCategory').on('click', '#btn-productOf',function() {
		let category = $(this).attr('category');
		getProductOfCategory(category);
	})
	
	// Set tombol Detail
	$('tbody').on('click', '#btn-detail', function() {
		let id = $(this).attr("data-id");
		getProduct(id);
	});

	// Set icon Close Modal Detail
	$('.btn-close').click(function() {
		$('#titleProduct').text('');
		$('#description').text('');
		$('#brand').text('');
		$('#rating').text('');
		$('#price').text('');
		$('#stock').text('');
	})

	// Set tombol Simpan di Modal Form Tambah Data
	$('#simpan').click(function(e) {
		e.preventDefault();

		let id = $('#id').val();
		let product = {
			'title': $('#titleInput').val(),
			'category': $('#categoryInput').val(),
			'description': $('#descriptionInput').val(),
			'brand': $('#brandInput').val(),
			'rating': $('#ratingInput').val(),
			'price': $('#priceInput').val(),
			'stock': $('#stockInput').val(),
		};

		removeValue();

		(id === '') ? addProduct(product) : updateProduct(id, product);	
	})

	// Set tombol Add a Product
	$('#btn-addProduct').click(function() {
		$('#modalLabel').text('Tambah Produk');
		removeValue()
	})

	// Set tombol Update
	$('tbody').on('click', '#btn-update', function() {
		let id = $(this).attr('data-id');
		$('#modalLabel').text('Perbarui Produk')
		selectProduct(id);
	})

	// Set tombol Delete
	$('tbody').on('click', '#btn-delete', function() {
		let id = $(this).attr('data-id');
		( confirm('Data produk akan dihapus, hapus produk?') ) ? deleteProduct(id) : undefined;
	})

	
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
				// console.log(response);
				// console.log(respons.products);

				let data = response.products;
				// console.log(data);
				
				let no = 1;
				let tbody = ``;
				
				$.each(data, function(key, value) {
					// console.log(value);
					
					tbody += `<tr>
								<td>${no++}</td>
								<td>${value.title}</td>
								<td>${value.price}$</td>
								<td>★${value.rating}</td>
								<td>${value.description}</td>
								<td>
									<button type="button" id="btn-detail" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#detailProductModal" data-id=${value.id}>
										Detail
									</button>
								</td>
								<td>
									<button type="button" id="btn-update" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#modalForm" data-id=${value.id}>
										Update
									</button>
								</td>
								<td>
									<button type="button" id="btn-delete" class="btn btn-outline-danger btn-sm" data-id=${value.id}>
										Delete
									</button>
								</td>
							</tr>`;
				});

				$('table > tbody').html(tbody);
			}
		});
	}

	
	// ----- Get a single Product ----- //
	function getProduct(id)
	{
		$.ajax({
			method 		: "GET",
			url		  	: `https://dummyjson.com/products/${id}`,
			dataType	: "json",
			success		: function(product) {
				// console.log(product);

				$('#titleProduct').text(`${product.title} | ${product.category}`);
				$('#description').text(product.description);
				$('#brand').text(product.brand);
				$('#rating').text(`★${product.rating}`);
				$('#price').text(`${product.price}$`);
				$('#stock').text(`Stock: ${product.stock}`);
			}
		});
	}

	
	// ----- Get products of a category   ----- //
	function getProductOfCategory(category)
	{
		$.ajax({
			method 		: "GET",
			url	  		: `https://dummyjson.com/products/category/${category}`,
			dataType	: "json",
			success		: function(response) {
				// console.log(response);
				// console.log(reponse.product);
				
				let product = response.products;
				// console.log(product);

				let no = 1;
				let tbody = ``;
				
				$.each(product, function(key, value) {
					// console.log(value);
					
					tbody += `<tr>
								<td>${no++}</td>
								<td>${value.title}</td>
								<td>${value.price}$</td>
								<td>★${value.rating}</td>
								<td>${value.description}</td>
								<td>
									<button type="button" id="btn-detail" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#detailProductModal" data-id=${value.id}>
										Detail
									</button>
								</td>
								<td>
									<button type="button" id="btn-update" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#modalForm" data-id=${value.id}>
										Update
									</button>
								</td>
								<td>
									<button type="button" id="btn-delete" class="btn btn-outline-danger btn-sm" data-id=${value.id}>
										Delete
									</button>
								</td>
							</tr>`;
				});

				$('table > tbody').html(tbody);
			}
		});
	}
	

	// ----- Get all products categories  ----- //
	function getCategory()
	{
		$.ajax({
			method 		: "GET",
			url	  		: `https://dummyjson.com/products/categories`,
			dataType	: "json",
			success		: function(categories) {
				// console.log(categories);
				
				let listCtgry = ``;
					
				categories.forEach( category => {
					listCtgry +=  `<button type="button" id="btn-productOf" class="btn btn-light mb-1 text-capitalize" category="${category}">${category}</button>`;
				})

				$('#listCategory').html(listCtgry);
			}
		});
	}

	
	// ----- Add Product  ----- //
	function addProduct(data)
	{
		$.ajax({
			method 	: "POST",
			url	  	: "https://dummyjson.com/products/add",
			data 	: JSON.stringify(data),
			headers : { 'Content-Type' : 'application/json' },
			success	: product => console.log(product)
		});
	}
	

	// ----- Select Product to Update ----- //	
	function selectProduct(id)
	{
		$.ajax({
			url	  	: `https://dummyjson.com/products/${id}`,
			data 	: JSON.stringify(id),
			success	: function(product) {
				// console.log(product);

				$('#id').val(product.id);
				$('#titleInput').val(product.title);
				$('#categoryInput').val(product.category);
				$('#descriptionInput').val(product.description);
				$('#brandInput').val(product.brand);
				$('#ratingInput').val(product.rating);
				$('#priceInput').val(product.price);
				$('#stockInput').val(product.stock);
			}
		});
	}

	
	// ----- Update Product  ----- //	
	function updateProduct(id, data)
	{
		$.ajax({
			method 	: "PUT",
			url	  	: `https://dummyjson.com/products/${id}`,
			headers : { 'Content-Type' : 'application/json' },
			data 	: JSON.stringify(data),
			success	: product => console.log(product)
		});
	}


	// ----- Delete Product  ----- //
	function deleteProduct(id)
	{
		$.ajax({
			method 	: 'DELETE',
			url	 	: `https://dummyjson.com/products/${id}`,
			success : function(product) {
				console.log(product);
				console.log(`isDeleted: ${product.isDeleted}`);
				console.log(`deletedOn: ${product.deletedOn}`);
			}
		});	
	}

	
	// ----- Remove Input Value  ----- //
	function removeValue()
	{
		$('#id').val('');
		$('#titleInput').val('');
		$('#categoryInput').val('');
		$('#descriptionInput').val('');
		$('#brandInput').val('');
		$('#ratingInput').val('');
		$('#priceInput').val('');
		$('#stockInput').val('');
	}

});
