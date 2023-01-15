
//	Function untuk menentukan zodiak berdasarkan bulan dan tanggal

function zodiak(bulan, tanggal)
{
	let pesan;

	// Cek apakah bulan dalam rentang 1 - 12 dan tanggal dalam rentang 1 - 31
	if ((bulan >= 1 && bulan <= 12) && (tanggal >= 1 && tanggal <= 31))
	{
		// Cek apakah bulan sama dengan 1 (bulan Januari)
		if (bulan === 1)
		{
			// Januari | Tanggal: 1 - 19 -> Capricorn
			if (tanggal <= 19)
			{
				pesan = 'Capricorn';
			}
			// Januari | Tanggal: 20 - 31 -> Aquarius
			else
			{
				pesan = 'Aquarius';
			}
		}

		// Cek apakah bulan sama dengan 2 (bulan Februari)
		else if (bulan === 2)
		{
			// Februari | Tanggal: 1 - 18 -> Aquarius
			if (tanggal <= 18)
			{
				pesan = 'Aquarius';
			}
			// Februari | Tanggal: 19 - 29 -> Pisces
			else if (tanggal <= 29)
			{
				pesan = 'Pisces';
			}
			// Tanggal lebih besar dari 29 (Februari memiliki 28/29 hari)
			else
			{
				pesan = 'Bulan Februari memiliki 28/29 hari';
			}
		}

		// Cek apakah bulan sama dengan 3 (bulan Maret)
		else if (bulan === 3)
		{
			// Maret | Tanggal: 1 - 20 -> Pisces
			if (tanggal <= 20)
			{
				pesan = 'Pisces';
			}
			// Maret | Tanggal: 21 - 31 -> Aries
			else
			{
				pesan = 'Aries';
			}
		}

		// Cek apakah bulan sama dengan 4 (bulan April)
		else if (bulan === 4)
		{
			// April | Tanggal: 1 - 20 -> Aries
			if (tanggal <= 20)
			{
				pesan = 'Aries';
			}
			// April | Tanggal: 21- 31 -> Taurus
			else
			{
				pesan = 'Taurus';
			}
		}

		// Cek apakah bulan sama dengan 5 (bulan Mei)
		else if (bulan === 5)
		{
			// Mei | Tanggal: 1 - 20 -> Taurus
			if (tanggal <= 20)
			{
				pesan = 'Taurus';
			}
			// Mei | Tanggal: 21 - 31 -> Gemini
			else
			{
				pesan = 'Gemini';
			}
		}

		// Cek apakah bulan sama dengan 6 (bulan Juni)
		else if (bulan === 6)
		{
			// Juni | Tanggal: 1 - 20 -> Gemini
			if (tanggal <= 20)
			{
				pesan = 'Gemini';
			}
			// Juni | Tanggal: 21 - 31 -> Cancer
			else
			{
				pesan = 'Cancer';
			}
		}

		// Cek apakah bulan sama dengan 7 (bulan Juli)
		else if (bulan === 7)
		{
			// Juli | Tanggal: 1 - 20 -> Cancer
			if (tanggal <= 20)
			{
				pesan = 'Cancer';
			}
			// Juli | Tanggal: 21 - 31 -> Leo
			else
			{
				pesan = 'Leo';
			}
		}

		// Cek apakah bulan sama dengan 8 (bulan Agustus)
		else if (bulan === 8)
		{
			// Agustus | Tanggal: 1 - 20 -> Leo
			if (tanggal <= 20)
			{
				pesan = 'Leo';
			}
			// Agustus | Tanggal: 21 - 31 -> Virgo
			else
			{
				pesan = 'Virgo';
			}
		}	

		// Cek apakah bulan sama dengan 9 (bulan September)
		else if (bulan === 9)
		{
			// September | Tanggal: 1 - 20 -> Virgo
			if (tanggal <= 20)
			{
				pesan = 'Virgo';
			}
			// September | Tanggal: 21 - 31 -> Libra
			else
			{
				pesan = 'Libra';
			}
		}

		// Cek apakah bulan sama dengan 10 (bulan November)
		else if (bulan === 10)
		{
			// November | Tanggal: 1 - 20 -> Libra
			if (tanggal <= 20)
			{
				pesan = 'Libra';
			}
			// November | Tanggal: 21 - 31 -> Scorpio
			else
			{
				pesan = 'Scorpio';
			}
		}

		// Cek apakah bulan sama dengan 11 (bulan Oktober)
		else if (bulan === 11)
		{
			// Oktober | Tanggal: 1 - 20 -> Scorpio
			if (tanggal <= 20)
			{
				pesan = 'Scorpio';
			}
			// Oktober | Tanggal: 21 - 31 -> Sagitarius
			else
			{
				pesan = 'Sagitarius';
			}
		}

		// Selain itu semua maka bulan sama dengan 12 (bulan Desember)
		else
		{
			// Desember | Tanggal: 1 - 20 -> Sagitarius
			if (tanggal <= 20)
			{
				pesan = 'Sagitarius';
			}
			// Desember | Tanggal: 21 - 31 -> Capricorn
			else
			{
				pesan = 'Capricorn';
			}
		}
	}

	// Jika bulan & tanggal tidak sesuai rentang yang ditentukan
	else
	{
		pesan = 'Bulan atau Tanggal Salah';
	}

	return pesan;
}


// Function untuk menentukan predikat nilai siswa

function predikatNilai(nilai)
{
	let pesan;

	// Cek apakah nilai dalam rentang 0 - 100
	if ((nilai >= 0) && (nilai <= 100))
	{
		// Nilai : 0 - 69 -> C
		if (nilai < 70)
		{
			pesan = 'Predikat nilai: C';
		}
		
		// Nilai: 70 - 74 -> B-
		else if (nilai < 75)
		{
			pesan = 'Predikat nilai: B-';
		}
		
		// Nilai: 75 - 79 -> B
		else if (nilai < 80)
		{
			pesan = 'Predikat nilai: B';
		}
		
		// Nilai: 80 - 84 -> B+
		else if (nilai < 85)
		{
			pesan = 'Predikat nilai: B+';
		}
		
		// Nilai: 85 - 89 -> A-
		else if (nilai < 90)
		{
			pesan = 'Predikat nilai: A-';
		}

		// Nilai: 90 - 94 -> A
		else if (nilai < 95)
		{
			pesan = 'Predikat nilai: A';
		}

		// Nilai: 95 - 100 -> A+
		else
		{
			pesan = 'Predikat nilai: A+';
		}
	}
	else
	{
		pesan = 'Nilai tidak valid! Masukkan nilai dalam rentang 1 - 100';
	}

	return pesan;
}


// Function untuk mengecek apakah suatu bilangan asli merupakan bilangan prima atau tidak

function prima(angka)
{
	// Cek apakah angka lebih besar dari 0 (cek apakah angka merupakan bilangan asli atau tidak)
	if (angka > 0)
	{
		// Cek apakah angka lebih besar dari 1
		if(angka > 1)
		{
			// Mengecek apakah ada bilangan yang lebih kecil dari nilai angka yang dapat membagi nilai angka sama rata
			for (let i = 2; i < angka; ++i)
			{
				// Cek apakah sisa pembagian suatu bilangan yang lebih kecil dari angka sama dengan 0
				if (angka % i === 0)
				{
					return `${angka} bukan bilangan prima`;
				}
			}

			// Jika nilai angka tidak dapat dibagi rata oleh bilangan yang lebih kecil darinya
			return `${angka} adalah bilangan Prima`;
		}
		// Jika angka sama dengan 1
		else
		{
			return `${angka} bukan bilangan prima`;
		}
	}
	// Jika angka bukan bilangan asli
	else
	{
		return `${angka} bukan bilangan asli. Masukkan bilangan asli!`;
	}
}


// Function Terbilang

function terbilang(angka)
{
    if (angka >= 0 )
    {
    	let bilangan=[" ", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];

		if (angka < 12)
		{
			return bilangan[angka];
		}
		else if (angka < 20)
		{
			return terbilang(angka - 10) + " belas";
		}
		else if (angka < 100)
		{
			return terbilang(Math.floor(parseInt(angka) / 10)) + " puluh " + terbilang(parseInt(angka) % 10);
		}
		else if (angka < 200)
		{
			return "Seratus " + terbilang(parseInt(angka) - 100);
		}
		else if (angka < 1000)
		{
			return terbilang(Math.floor(parseInt(angka)/100)) + " ratus " + terbilang(parseInt(angka) % 100);
		}
		else if (angka < 2000)
		{
			return "Seribu " + terbilang(parseInt(angka) - 1000);
		}
		else if (angka < 1000000)
		{
			return terbilang(Math.floor(parseInt(angka) / 1000)) + " ribu " + terbilang(parseInt(angka) % 1000);
		}
		else if(angka < 1000000000)
		{
			return terbilang(Math.floor(parseInt(angka) / 1000000)) + " juta " + terbilang(parseInt(angka) % 1000000);
		}
		else if(angka < 1000000000000)
		{
			return terbilang(Math.floor(parseInt(angka) / 1000000000)) + " milyar " + terbilang(parseInt(angka) % 1000000000);
		}
		else if(angka < 1000000000000000)
		{
			return terbilang(Math.floor(parseInt(angka) / 1000000000000)) + " triliun " + terbilang(parseInt(angka) % 1000000000000);
		}
	}
	else
	{
		return `Masukkan bilangan asli (bilangan bulat positif)`;
	}
}