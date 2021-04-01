# test_noveo
VueJS test for Noveo

In this task you must use:
    1. Vue
    2. Vue Router
    3. Vuex
    4. Axios

Also you can use any style preprocessing, as you like, we preferably use SCSS.

Don’t use any UI libraries in this task.

TASK:
Develop a simple SPA, which is based on API.
API - https://dog.ceo/dog-api/

1) Main screen contains header and dogs card list (grid *).

*  Grid contains 4 cards in a row, and 20 items on the page.

2) Header contents the following elements:
    • Home link
    • Dog breed select *
    • Favorites link

* After selecting the breed you may redirect user to page with this breed. On this page you must display dogs grid, as on home page. You may not using second level breeds, just filter them. Only top level breeds shows in select.

3) Develop infinite scroll for dogs grid

4) Dog card structure:
    • Picture (clickable). Click on card works as add to favorite button.
    • Add to favorite Button/Icon (shows when cursor over) with different states (added/not added).

5) On your favorite page you need to display all dog cards without scroll preloading. For storing favorites you can use any offline storage.	


After that you can push your code to open Github repository.