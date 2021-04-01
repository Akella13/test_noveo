<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <label>
        Dog breed
        <select>
          <option>Husky</option>
          <option>Bulldog</option>
        </select>
      </label>
      <router-link to="/favourites">Favourites</router-link>
    </header>
    <router-view/>
  </div>
</template>
