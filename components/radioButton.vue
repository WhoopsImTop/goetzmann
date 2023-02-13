<template>
  <div class="custom-radio" @click="toggleSelected"
    :style="backgroundColor ? 'background-color:' + backgroundColor : ''">
    <div class="clickable-area" :class="active ? 'marked' : ''"></div>
    <div class="text-area">
      <h4>{{ title }}</h4>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "setAction", "removeAction", "backgroundColor"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleSelected() {
      this.active = !this.active;
      if (this.active == true) {
        //commit to store
        this.$store.commit(this.setAction, {
          title: this.title,
          subtitle: this.subtitle,
        });
      } else {
        //remove from store
        this.$store.commit(this.removeAction, {
          title: this.title,
          subtitle: this.subtitle,
        });
      }
    },
  },
};
</script>

<style>
.custom-radio {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 10px;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  max-width: 400px;
  width: 100%;
}

.clickable-area {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: -25px;
  width: 50px;
  height: 50px;
  background-image: url("/img/circle.svg");
  background-size: 62%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 5px 20px #3b599950;
}

.custom-radio:hover .clickable-area {
  background-image: url("/img/cross.svg");
  background-size: 70% !important;
}

.marked {
  background-image: url("/img/cross.svg");
  background-size: 70% !important;
  background-position: center;
  background-repeat: no-repeat;
}

.text-area {
  margin-left: 20px;
}

@media (max-width: 1000px) {
  .custom-radio {
    margin-bottom: 20px;
    margin-left: 10px;
  }
}

</style>