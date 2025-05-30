/*
===========================================
🐾 Debugging & Exception Handling Activity
===========================================

🎯 Activity Overview:
Students will be presented with a partially written program containing
runtime and logic errors. Their goal is to debug the program, identify
exceptions, and implement appropriate try/catch blocks.

---

📘 Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records.

The program is intended to:
- Allow users to enter an animal type and adoption fee
- Add the animal and fee to a list
- Retrieve the adoption fee for a specific animal

Unfortunately, the original developer left the program with bugs and missing error handling.
Your job is to fix it!

---

🧭 Instructions:

1️⃣ Understand the Errors:
   - Run the program
   - Observe any thrown exceptions
   - Document what went wrong and where

2️⃣ Write Exception Handling Code:
   - Use `try/catch` blocks to catch runtime issues

3️⃣ Test and Debug:
   - Try valid and invalid inputs
   - Ensure the program handles errors gracefully and continues running
*/

// ============================================
// 🐞 Initial Code with Bugs (to be debugged)
// ============================================

const prompt = require("readline-sync");   //inserted readline so that i could use the prompts in vs rather than browser

let animals = ["cat", "dog", "hamster"];
let fees = [30, 35, 25];

function addAnimal(name, fee) {
    if (!name || typeof name !== "string" || name.trim() === "") {
        throw new Error("Please enter an animal name.");
    }                                                                            //made two seperate ifs
    if (isNaN(fee) || fee < 0) {      
        throw new Error("Adoption fee must be a valid non-negative number.");
    }
    animals.push(name.trim());
    fees.push(fee);
}

function getAdoptionFee(animalName) {
    if (!animalName || animalName.trim() === "") {
        throw new Error("Please enter a valid animal name.");
    }
    let trimmedName = animalName.trim();
    let index = animals.indexOf(trimmedName);
    if (index === -1) {
        throw new Error("Animal not found in records.");
    }
    return fees[index];
}

// ============================================
// 🚀 Main Program Logic
// ============================================

console.log("Welcome to the Pet Shelter System");

while (true) {
    try {
        let action = prompt.question("Choose an action: 'add', 'fee', or 'exit': ");
        if (!action) continue;

        action = action.toLowerCase().trim();

        if (action === "exit") {
            console.log("Goodbye!");
            break;
        }

        if (action === "add") {
            let animal = prompt.question("Enter the animal's name: ");
            let feeInput = prompt.question("Enter the adoption fee: ");
            let fee = Number(feeInput);

            try {
                addAnimal(animal, fee);
                console.log(`${animal.trim()} added with a fee of $${fee.toFixed(2)}.`);
            } catch (err) {
                console.log("Error adding animal:", err.message);
            }

        } else if (action === "fee") {
            let animal = prompt.question("Enter the animal's name to find its adoption fee: ");

            try {
                let fee = getAdoptionFee(animal);
                console.log(`${animal.trim()}'s adoption fee is $${fee.toFixed(2)}.`);
            } catch (err) {
                console.log("Error retrieving fee:", err.message);
            }

        } else {
            console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
        }

    } catch (err) {
        console.log("Unexpected error:", err.message);
    }
}


// ============================================
// 🧩 Problems to Solve
// ============================================

/*
🔹 Invalid Input Errors:
- What if the user enters a negative fee?
- What if the animal name is blank?
- What if an animal isn't found?

🔹 Code Flow Problems:
- What happens when an exception is thrown?
- Does the rest of the program continue?

🔹 Structured Exception Handling:
- Add `try/catch` blocks to catch these errors and allow the app to continue running.
*/
