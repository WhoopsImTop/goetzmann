<template>
    <div
      class="custom-termin"
      @click="saveToIcal()"
      :style="backgroundColor ? 'background-color:' + backgroundColor : ''"
    >
      <div class="termin"></div>
      <div class="text-area">
        <span>{{ weekday }} | {{ new Date(date).toLocaleString('de-DE', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' }) }} Uhr</span>
        <h4>{{ title }}</h4>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["title", "subtitle", "date", "weekday", "backgroundColor"],
  };
  </script>
  
  <style>
  .custom-termin {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px 10px;
    border-radius: 5px;
    background-color: #fff;
    position: relative;
    margin: 20px 20px;
    width: 45%;
    min-width: 400px;
  }
  
  .termin {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: -25px;
    width: 50px;
    height: 50px;
    background-image: url("/img/calendar.svg");
    background-size: 62%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 5px 20px #3b599950;
  }
  
  .text-area {
    margin-left: 20px;
  }
  
  @media (max-width: 1000px) {
    .custom-termin {
      margin-bottom: 20px;
      margin-left: 10px;
      min-width: 100%;
    }
  }
  </style>