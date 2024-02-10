const categoriesNumbers = document.querySelectorAll(".item");

console.log(`Number of categoriesNumbers: ${categoriesNumbers.length}`);

categoriesNumbers.forEach((number) => {
    console.log(`Category: ${number.firstElementChild.textContent}`);
    console.log(`Elements: ${number.lastElementChild.childElementCount}`);
});