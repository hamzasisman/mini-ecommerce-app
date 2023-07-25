import Swal from "sweetalert2"
import '@sweetalert2/theme-borderless/borderless.css'

/**
 * Swal paketi ile sağ üst köşede alert gösteriliyor
 * ikonlar success, error, warning, info, question olmalıdır
 * @param {string} message - Gösterilecek mesaj
 * @param {string} icon - Gösterilecek ikon
 */
export const showTopAlert = (message, icon) => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    })

    Toast.fire({
        icon: icon,
        title: message
    })
}

/**
 * Swal paketi ile sağ üst köşede alert gösteriliyor
 * ikonlar success, error, warning, info, question olmalıdır
 * func ile alert sonrası çalışacak callback fonksiyonu gönderilir
 * @param {string} message - Gösterilecek mesaj
 * @param {string} icon - Gösterilecek ikon
 * @param {function} func - Çalışacak callback fonksiyonu
 */
export const showTopAlertWithCallback = (message, icon, func) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    })

    Toast.fire({
        icon: icon,
        title: message
    }).then(func())
}

/**
 * Swal paketi ile ekranın ortasında alert gösteriliyor
 * ikonlar success, error, warning, info, question olmalıdır
 * @param {string} title - Gösterilecek başlık
 * @param {string} message - Gösterilecek mesaj
 * @param {string} icon - Gösterilecek ikon
 */
export const showCenteredAlert = (title, message, icon) => {
    Swal.fire({
        icon: icon,
        title: title,
        text: message,
        width: '400px'
    });
}

/**
 * Swal paketi ile ekranın ortasında alert gösteriliyor
 * ikonlar success, error, warning, info, question olmalıdır
 * @param {string} title - Gösterilecek başlık
 * @param {string} message - Gösterilecek mesaj
 * @param {string} icon - Gösterilecek ikon
 */
export const showCenteredHtmlAlert = (title, html, icon) => {
    Swal.fire({
        icon: icon,
        title: title,
        html: html,
        width: '400px'
    });
}


/**
 * Swal paketi ile ekranın ortasında alert gösteriliyor
 * @param {string} title - Gösterilecek başlık
 * @param {string} message - Gösterilecek mesaj
 * @param {string} confirmText - Onayla butonu
 * @param {string} cancelText - İptal butonu
 */

export const showCenteredAlertTwoButtons = (title, message, confirmText, cancelText, confirmCallback, dismissCallback) => {

    Swal.fire({
        title: title,
        text: message,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmText,
        cancelButtonText: cancelText
    }).then((result) => {

        if (result.isConfirmed) {
            confirmCallback();
        } else if (result.isDismissed) {
            dismissCallback && dismissCallback();
        }

    })
}

/**
 * Swal paketi ile ekranın ortasında alert gösteriliyor
 * @param {string} title - Gösterilecek başlık
 * @param {string} message - Gösterilecek mesaj
 * @param {string} confirmText - Onayla butonu
 * @param {string} cancelText - İptal butonu
 */

export const showCenteredAlertTwoButtonsWithParameters = (title, message, confirmText, cancelText, confirmCallback, confirmParameters, dismissCallback, dismissParameters) => {

    Swal.fire({
        title: title,
        text: message,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmText,
        cancelButtonText: cancelText
    }).then((result) => {

        if (result.isConfirmed) {
            confirmCallback(...confirmParameters);
        } else if (result.isDismissed) {
            if (dismissCallback) {
                if (dismissParameters.length > 0) {
                    dismissCallback(...dismissParameters);
                } else {
                    dismissCallback();
                }
            }
        }

    })
}