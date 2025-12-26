self.addEventListener('canmakepayment', (evt) => {
    evt.respondWith(true);  // Katakan ya, bisa bayar
});

self.addEventListener('paymentrequest', (evt) => {
    evt.respondWith(new Promise((resolve) => {
        // Buka window untuk UI konfirmasi (opsional)
        evt.openWindow('/payment-ui.html').then(client => {
            // Kirim data ke UI jika perlu
            client.postMessage(evt.methodData);
        });

        // Simulasi proses pembayaran
        setTimeout(() => {
            resolve({
                methodName: 'https://bobbucks.dev/pay',
                details: {
                    cardNumber: '**** **** **** 1234',
                    expiryDate: '12/25',
                    cardSecurityCode: '123'
                }
            });
        }, 2000);  // Delay simulasi
    }));
});
