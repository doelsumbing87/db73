function konversiTanggal(tanggal) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const tanggalObj = new Date(tanggal);
  return tanggalObj.toLocaleDateString('id-ID', options);
}

const tanggal = '2024-07-02';
const tanggalDikonversi = konversiTanggal(tanggal);
console.log(`Tanggal dalam format Indonesia: ${tanggalDikonversi}`);
