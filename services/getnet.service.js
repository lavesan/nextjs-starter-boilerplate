import axios from 'axios';

export class GetnetService {

    redirectToConfirmPayment({ redirectUrl, issuer_payment_id }) {

        const body = {
            MD: issuer_payment_id,
            PaReq: payer_authentication_request,
            TermUrl: 'http://192.168.15.8:3000/order/finalize-debit',
        }

        return redirectPost(redirectUrl, body);

    }

    checkDebitStatus(orderId) {
        return axios.get(`/order/payment/check-debit?id=${orderId}`);
    }

    redirectPost(url, data) {
        var form = document.createElement('form');
        document.body.appendChild(form);
        form.method = 'post';
        form.action = url;
        for (var name in data) {
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = data[name];
            form.appendChild(input);
        }
        form.submit();
    }

}

let productServiceInstance = null;

// Singleton class
export const getnetInstance = (() => {

    const getInstance = () => {
        if (!productServiceInstance)
            productServiceInstance = new GetnetService();

        return productServiceInstance;
    }

    return {
        getInstance,
    }

})()