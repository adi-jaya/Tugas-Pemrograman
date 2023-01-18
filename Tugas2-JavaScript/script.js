let tampil = document.querySelector('#tampil');
let btnAngka = document.querySelectorAll('.btn-angka > button');
let btnAksi = document.querySelectorAll('.btn-aksi > button');
let btnResult = document.querySelector('.btn-result');
let button = document.querySelectorAll('button');

let operasi;
let operand1;
let operand2;

tampil.readOnly = true;

// Tombol angka
for (let index = 0; index < btnAngka.length; ++index)
{
	btnAngka[index].onclick = () => {
		if (tampil.value == "0")
		{
			tampil.value = btnAngka[index].innerHTML;

			if (tampil.placeholder == '')
			{
				tampil.placeholder = btnAngka[index].innerHTML;	
			}
			else
			{
				tampil.placeholder += btnAngka[index].innerHTML;	
			}
			
		}
		else
		{
			tampil.value += btnAngka[index].innerHTML;
			
			if (tampil.placeholder == '')
			{
				tampil.placeholder = btnAngka[index].innerHTML;	
			}
			else
			{
				tampil.placeholder += btnAngka[index].innerHTML;	
			}
		}
	};
}

// '=' button
btnResult.onclick = () => {
	operand2 = tampil.value;
	tampil.value = calcu(operasi);
} 

// '+' button
btnAksi[0].onclick = () => {
	operasi = btnAksi[0].innerHTML;
	operand1 = tampil.value;
	tampil.placeholder += btnAksi[0].innerHTML;
	tampil.value = '';

};

// '-' button
btnAksi[1].onclick = () => {
	operasi = btnAksi[1].innerHTML;
	operand1 = tampil.value;
	tampil.placeholder += btnAksi[1].innerHTML;
	tampil.value = '';
};

// '*' button
btnAksi[2].onclick = () => {
	operasi = btnAksi[2].innerHTML;
	operand1 = tampil.value;
	tampil.placeholder += btnAksi[2].innerHTML;
	tampil.value = '';
};

// '/' button
btnAksi[3].onclick = () => {
	operasi = btnAksi[3].innerHTML;
	operand1 = tampil.value;
	tampil.placeholder += btnAksi[3].innerHTML;
	tampil.value = '';
};

// 'Clear' button
btnAksi[4].onclick = () => {
	tampil.placeholder = '';
	tampil.value = '';
};


function calcu(operasi)
{
	switch(operasi)
	{
		case '+':
			return `${operand1} ${operasi} ${operand2} = ${parseFloat(operand1) + parseFloat(operand2)} `;

		case '-':
			return `${operand1} ${operasi} ${operand2} = ${parseFloat(operand1) - parseFloat(operand2)} `;

		case '*':
			return `${operand1} ${operasi} ${operand2} = ${parseFloat(operand1) * parseFloat(operand2)} `;

		case '/':
			return `${operand1} ${operasi} ${operand2} = ${parseFloat(operand1) / parseFloat(operand2)} `;
	}
}