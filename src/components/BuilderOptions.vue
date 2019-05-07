<template>
  <div class="outline">
    <ul>
      <li class="tooltip">
        <i class="icon fas fa-2x fa-edit"></i>
        <span class="tooltiptext">Edit</span>
      </li>
      <li class="tooltip">
        <i class="icon fas fa-2x fa-ruler-vertical"></i>
        <span class="tooltiptext">Styles</span>
      </li>
      <li class="tooltip">
        <i class="icon fas fa-2x fa-cog"></i>
        <span class="tooltiptext">Settings</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "BuilderOptions",
};
</script>

<style scoped lang="scss">
.outline {
  border-right: 1px solid tomato;
}
ul {
  list-style: none;
  padding-left: 0;
}

li {
  transition: color .3s ease;
  position: relative;
  width: 100%;

  &:hover {
  cursor: pointer;
  color: tomato;
  }

  &:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
  }
}

li:not(:last-child) {
  margin-bottom: 2rem;
}

.tooltip .tooltiptext {
  transition: opacity .3s ease;
  opacity: 0;
  visibility: hidden;
  width: 120px;
  background-color: #2c3e50;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: 50%;
  right: 25%;
  transform: translate(100%, -50%);
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -6px;
  border-width: 6px;
  border-style: solid;
  border-color: transparent #2c3e50 transparent transparent;
}

</style>
