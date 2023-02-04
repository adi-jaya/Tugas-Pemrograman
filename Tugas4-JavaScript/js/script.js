$(document).ready(function() {
	// Show all product
	getAllProducts()

	// Set tombol All Product
	$('#btn-allProduct').click(getAllProducts);

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

		(id) ? updateProduct(id, product) :  addproduct(product);
		removeValue()
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
	function getAllProducts()
	{
		$.ajax({
			type 		: "get",
			url		  	: "https://dummyjson.com/products",
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
		fetch(`https://dummyjson.com/products/${id}`)
		.then( res => res.json() )
		.then( product => {
			// console.log(product);

			$('#titleProduct').text(`${product.title} | ${product.category}`);
			$('#description').text(product.description);
			$('#brand').text(product.brand);
			$('#rating').text(`★${product.rating}`);
			$('#price').text(`${product.price}$`);
			$('#stock').text(`Stock: ${product.stock}`);	
		} )
	}

	
	// ----- Get products of a category   ----- //
	function getProductOfCategory(category)
	{
		fetch(`https://dummyjson.com/products/category/${category}`)
		.then( res => res.json() )
		.then( res => {
			// console.log(res);
			
			let product = res.products;
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

		} )
	}
	

	// ----- Get all products categories  ----- //
	function getCategory()
	{
		fetch('https://dummyjson.com/products/categories')
		.then( res => res.json() )
		.then( category => {
			// console.log(category);

			let listCtgry = ``;
			
			category.forEach( item => {
				listCtgry +=  `<button type="button" id="btn-productOf" class="btn btn-light mb-1 text-capitalize" category="${item}">${item}</button>`;
			})

			$('#listCategory').html(listCtgry);
		})
	}

	
	// ----- Add Product  ----- //
	function addproduct(data)
	{
		fetch('https://dummyjson.com/products/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
		.then( res => res.json() )
		.then( console.log )
	}
	

	// ----- Select Product to Update ----- //	
	function selectProduct(id)
	{
		fetch(`https://dummyjson.com/products/${id}`)
		.then( res => res.json() )
		.then( product => {
			$('#id').val(product.id);
			$('#titleInput').val(product.title);
			$('#categoryInput').val(product.category);
			$('#descriptionInput').val(product.description);
			$('#brandInput').val(product.brand);
			$('#ratingInput').val(product.rating);
			$('#priceInput').val(product.price);
			$('#stockInput').val(product.stock);
		} )
	}

	
	// ----- Update Product  ----- //	
	function updateProduct(id, data)
	{
		fetch(`https://dummyjson.com/products/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		})
		.then( res => res.json() )
		.then( console.log )
	}


	// ----- Delete Product  ----- //
	function deleteProduct(id)
	{
		fetch(`https://dummyjson.com/products/${id}`, {
			method: 'DELETE',
		})
		.then( res => res.json() )
		.then( product => {
			console.log(product);
			console.log(`isDeleted: ${product.isDeleted}`);
			console.log(`deletedOn: ${product.deletedOn}`);
		})
	}

	
	// ----- Remove Input Value  ----- //
	function removeValue()
	{
		$('#titleInput').val('');
		$('#categoryInput').val('');
		$('#descriptionInput').val('');
		$('#brandInput').val('');
		$('#ratingInput').val('');
		$('#priceInput').val('');
		$('#stockInput').val('');
	}

});