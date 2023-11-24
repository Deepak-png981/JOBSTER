function voice(myref) {
    var audio = new Audio('click.wav');
    audio.play();

}

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", voice);

}

function binarySearch() {
    const arrayStr = document.getElementById("array").value;
    const target = parseInt(document.getElementById("target").value);

    if (!arrayStr || isNaN(target)) {
        alert("Please enter a valid array or target value.");
        return;
    }

    const array = arrayStr.split(" ").map(Number);
    const arrayContainer = document.getElementById("array-container");
    const resultElement = document.getElementById("result");
    resultElement.innerText = "";

    arrayContainer.innerHTML = "";

}


function linearSearch() {
    const arrayStr = document.getElementById("array").value;
    const target = parseInt(document.getElementById("target").value);

    if (!arrayStr || isNaN(target)) {
        alert("Please enter a valid array and target value.");
        return;
    }
    prompt("Highlighting the current item being compared");
    const array = arrayStr.split(" ").map(Number);
    const arrayContainer = document.getElementById("array-container");
    const resultElement = document.getElementById("result");
    resultElement.innerText = "";

    arrayContainer.innerHTML = "";

    function appendRow(numbers, currentIndex) {
        const row = document.createElement("div");
        row.className = "array-row";

        for (let index = 0; index <= currentIndex; index++) {
            const item = document.createElement("div");
            item.className = "array-item";
            item.innerText = numbers[index];
            if (index === currentIndex) {
                item.classList.add("active"); // Highlight the current item being compared
            } else {
                resultElement.innerText = `Element at index ${index} is not equal to the target ${target}.`;
            }

            row.appendChild(item);
        }
        arrayContainer.appendChild(row);
    }

    // Recursive function to process each item with a delay
    function processItem(i) {
        appendRow(array, i);

        if (array[i] === target) {
            resultElement.innerText = `Found ${target} at index ${i}.`;
            return; // Stop if the item is found
        }

        if (i < array.length - 1) {
            setTimeout(() => processItem(i + 1), 3000); // Delay before the next iteration
        } else {
            resultElement.innerText = `${target} not found in the array.`;
        }
    }

    processItem(0);


}
document.querySelector("button[onclick='linearSearch()']").addEventListener("click", () => {
    voice(linearSearch);
});
document.querySelector("button[onclick='linearSearch()']").addEventListener("click", () => {
    voice(binarySearch);
});