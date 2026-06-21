let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        //AC
        if (value === "AC") {
            expression = "";
            input.value = "";
        }

        // Delete
        else if (value === "Del") {
            expression = expression.slice(0, -1);
            input.value = expression;
        }

        // Equal
        else if (value === "=") {
            try {
                expression = eval(
                    expression
                        .replace(/×/g, "*")
                        .replace(/÷/g, "/")
                ).toString();

                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
        }

        // Plus/Minus
        else if (value === "+/-") {
            if (expression) {
                expression = (-Number(expression)).toString();
                input.value = expression;
            }
        }

        // Normal buttons
        else {
            expression += value;
            input.value = expression;
        }
    });
});
