const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const getInputValue = (event) => {
    nameOutput.textContent = nameInput.value.trim() !== ''
        ? event.currentTarget.value.trim()
        : 'Anonymous';
};

nameInput.addEventListener('input', getInputValue);



// const getInputValue = ({ currentTarget }) => {
//   if (currentTarget.value.trim() !== '') {
//     nameOutput.textContent = currentTarget.value.trim();
//   } else {
//     nameOutput.textContent = 'Anonymous';
//   }
// };

// nameInput.addEventListener('input', getInputValue);




