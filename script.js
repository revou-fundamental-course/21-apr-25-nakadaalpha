let lastResult = null;

// ===== Fungsi Konversi Suhu =====
function convertTemperature() {
    const input = document.getElementById('temperature');
    const unit = document.getElementById('unit').value;
    const resultBox = document.getElementById('resultBox');
    const convertedValue = document.getElementById('convertedValue');
    const explanation = document.getElementById('explanation');

    const value = parseFloat(input.value);

    if (isNaN(value)) {
        alert("Masukkan angka suhu yang valid.");
        return;
    }

    let result, detail;

    if (unit === 'c') {
        result = (value * 9 / 5) + 32;
        detail = `${value}°C * (9/5) + 32 = ${result.toFixed(2)}°F`;
        convertedValue.innerHTML = `Hasil: <strong>${result.toFixed(2)}°F</strong>`;
    } else {
        result = (value - 32) * 5 / 9;
        detail = `(${value}°F - 32) * (5/9) = ${result.toFixed(2)}°C`;
        convertedValue.innerHTML = `Hasil: <strong>${result.toFixed(2)}°C</strong>`;
    }

    explanation.innerHTML = `Cara Kalkulasi:<br><code>${detail}</code>`;
    resultBox.style.display = 'block';

    lastResult = result.toFixed(2); // Simpan untuk reverse
}

// ===== Fungsi Reset Form =====
function resetForm() {
    document.getElementById('temperature').value = '';
    document.getElementById('unit').value = 'c';
    document.getElementById('resultBox').style.display = 'none';
    lastResult = null;
}

// ===== Fungsi Reverse Satuan Konversi =====
function reverseUnit() {
    const unitSelect = document.getElementById('unit');
    const input = document.getElementById('temperature');

    // Toggle satuan
    unitSelect.value = unitSelect.value === 'c' ? 'f' : 'c';

    // Jika sudah ada hasil sebelumnya, pakai hasil itu sebagai input baru
    if (lastResult !== null) {
        input.value = lastResult;
        convertTemperature();
    } else {
        alert("Lakukan konversi terlebih dahulu sebelum menggunakan fitur reverse.");
    }
}