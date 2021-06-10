$(function () {
    $('#phone-submit').on('click', () => {
        let phone = ($('#phone').val());
        if (new RegExp('^[0-9]{10}$').test(phone)) {
            axios
                .post('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP', {
                    mobile: '8981600142'
                })
                .then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        } else {
            alert("Invalid phone number");
        }
    });
});