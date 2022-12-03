<template>
  <section class="join-section">
    <h3>Join our Team of Writers</h3>
    <p>On dasdas, writers earn a living doing what they love.</p>
    <p>
      Getting started is easy. Just pay a one time <span>$25 fee</span> and
      everything is ready to go.
    </p>

    <button type="button" onclick="makePayment()">JOIN US</button>
  </section>
</template>

<script>
export default {
  name: "JoinSection",

  // data() {
  //   return {
  //     paymentData: {
  //       tx_ref: this.generateReference(),
  //       amount: 10,
  //       currency: "NGN",
  //       payment_options: "card,ussd",
  //       redirect_url: "",
  //       meta: {
  //         counsumer_id: "7898",
  //         consumer_mac: "kjs9s8ss7dd",
  //       },
  //       customer: {
  //         name: "Demo Customer  Name",
  //         email: "customer@mail.com",
  //         phone_number: "081845***044",
  //       },
  //       customizations: {
  //         title: "Customization Title",
  //         description: "Customization Description",
  //         logo: "https://flutterwave.com/images/logo-colored.svg",
  //       },
  //       onclose: this.closedPaymentModal,
  //     },
  //   };
  // },
  // methods: {
  //   asyncPay() {
  //     this.asyncPayWithFlutterwave(this.paymentData).then((response) => {
  //       console.log(response);
  //     });
  //   },

  //   closedPaymentModal() {
  //     console.log("payment is closed");
  //   },
  //   generateReference() {
  //     let date = new Date();
  //     return date.getTime().toString();
  //   },
  // },
};
</script>

<style scoped lang="scss">
$--c-black: #2c2c2c;
$--c-black-20: #6e6e6e;
.join-section {
  text-align: center;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: $--c-black;
    font-weight: bold;
    font-size: 32px;
    margin: 10px auto;
  }

  p {
    color: $--c-black-20;
    margin: 0 0 10px 0;
    font-size: 22px;

    span {
      font-weight: bolder;
    }
  }

  button {
    color: #fff;
    background: #000000;
    width: 177px;
    margin-top: 20px;
    padding: 10px;
  }
}
</style>
