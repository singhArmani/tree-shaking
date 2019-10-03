import { cube, c } from "./utils";
import { add } from "./math";

function component() {
  const element = document.createElement("pre");
  element.innerHTML = ["Hello webpack!", "5 cubed is equal to " + cube(5) + add(3, 4) ].join(
    "\n\n"
  );
  return element;
}

console.log(c()); 

document.body.appendChild(component());
