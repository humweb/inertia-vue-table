<template>
  <div class="relative">
    <input
      class="form-input search-input"
      placeholder="Search..."
      :value="value"
      type="text"
      @input="onChange($event.target.value)"
    />
    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        value: {
            type: String,
            default: "",
            required: false,
        },

        onChange: {
            type: Function,
            required: true,
        },
    },
    computed:{
        icon(){

            return 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z';
        }
    }
};
</script>

<style>
.search-input {
    padding-right: 2.5em;
}
</style>
