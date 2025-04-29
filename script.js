document.addEventListener('DOMContentLoaded', function() {
    // Tüm toggle butonlarını seç
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Butonun ait olduğu .field-source kartını bul
            const fieldSourceCard = this.closest('.field-source');
            // O kart içindeki .details bölümünü bul
            const details = fieldSourceCard.querySelector('.details');

            // Detayların görünürlüğünü değiştir
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = 'Detayları Gizle'; // Buton metnini değiştir
            } else {
                details.style.display = 'none';
                this.textContent = 'Detayları Göster'; // Buton metnini değiştir
            }
        });
    });

    // İsteğe Bağlı: Başlıklara tıklayarak açma/kapama
    const sourceHeadings = document.querySelectorAll('.field-source > h2');
     sourceHeadings.forEach(heading => {
        heading.addEventListener('click', function() {
             // Başlığın ait olduğu .field-source kartını bul
            const fieldSourceCard = this.closest('.field-source');
            // O kart içindeki .details bölümünü bul
            const details = fieldSourceCard.querySelector('.details');
            // Butonu bul (metnini güncellemek için)
            const button = fieldSourceCard.querySelector('.toggle-button');

            // Detayların görünürlüğünü değiştir
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                if (button) button.textContent = 'Detayları Gizle';
            } else {
                details.style.display = 'none';
                 if (button) button.textContent = 'Detayları Göster';
            }
        });
        // Başlığın üzerine gelince fare imlecini değiştir
        heading.style.cursor = 'pointer';
     });


    // --- Görselleştirme Alanı İçin Notlar ---
    // Gerçek çizimleri eklemek için:
    // 1. Her bir `.visualization` div'ine özgün bir `id` verdik (HTML'de var).
    // 2. Bu id'leri kullanarak JavaScript ile ilgili div'i seçebilirsiniz.
    // 3. Seçilen div'in içine `innerHTML` ile SVG kodu ekleyebilir veya
    //    bir Canvas kütüphanesi (örn. p5.js, Konva.js) kullanarak çizim yapabilirsiniz.
    // 4. Örneğin, basit bir metin eklemek için:
    //    const viz = document.getElementById('wire-neutral-still');
    //    if (viz) {
    //       viz.innerHTML = '<p>Buraya SVG veya Canvas çizimi gelecek.</p>';
    //       // Veya SVG örneği:
    //       // viz.innerHTML = `
    //       //   <svg width="100" height="50" viewbox="0 0 100 50">
    //       //     <line x1="0" y1="25" x2="100" y2="25" stroke="black" stroke-width="2"/>
    //       //     <circle cx="50" cy="25" r="5" fill="grey"/>
    //       //     <text x="5" y="15" font-size="10">Tel</text>
    //       //     <text x="45" y="45" font-size="10">Cisim (Durgun)</text>
    //       //   </svg>
    //       // `;
    //    }
    // Bu kısım, her durum için ayrı ayrı fiziksel temsilleri (tel, çember, bobin, manyetik alan çizgileri, parçacık, hız vektörü, kuvvet vektörü) çizmeyi gerektirir.
});