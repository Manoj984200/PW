// let abc=document.querySelector('table')
// let d=abc.innerHTML
// console.log(d);

// below code to access full body
const body=document.body
console.log(body);
//Below code to Get body text(Text only not tags inside body):
console.log(document.body.innerText);
//below code to access complete table
let table = document.querySelector("table");
console.log(table);
console.log(table.innerHTML);
// Access ALL rows (tr)
let row = document.querySelectorAll("tr");
console.log(row);
// Access ONLY subject rows
let rowss = document.querySelectorAll("tbody tr");
console.log(rowss);
// Access ALL cells (td)
let cells = document.querySelectorAll("td");
console.log(cells);
// Access specific cell
let mark = document.querySelector("tbody tr td:nth-child(3)");
console.log(mark.innerText);
// Change marks (88 → 95)
let mrk = document.querySelector("tbody tr td:nth-child(3)");
mrk.innerText = "95";
// Change heading
let heading = document.querySelector("h2");
heading.innerText = "Final Result";
// Change Total
let total = document.querySelector("tfoot tr td:nth-child(3)");
total.innerText = "410";
// Add New Subject Row (AI)
let tbody = document.querySelector("tbody");

let tr = document.createElement("tr");

tr.innerHTML = `
<td>AI</td>
<td>100</td>
<td>90</td>
<td>A+</td>
`;

tbody.appendChild(tr);
//Replace ALL tbody rows
 let tbody1 = document.querySelector("tbody1");

tbody.innerHTML = `
<tr>
<td>AI</td>
<td>100</td>
<td>95</td>
<td>A+</td>
</tr>
`;
// Change all subject names color
let subjects = document.querySelectorAll("tbody td:first-child");

subjects.forEach((td) => {
    td.style.color = "blue";
});
// Calculate Total Automatically
let mrks = document.querySelectorAll("tbody td:nth-child(3)");

let sum = 0;

mrks.forEach((td) => {
    sum += Number(td.innerText);
});

document.querySelector("tfoot tr td:nth-child(3)").innerText = sum;
// //  Below is complete notes
// DOM SELECTORS + TEXT NOTES

// 1. querySelector()
// - Selects first matching element.
// - Uses CSS selectors.

// Examples:
// document.querySelector("h2")
// document.querySelector(".box")
// document.querySelector("#id")

// 2. querySelectorAll()
// - Selects all matching elements.
// - Returns NodeList.

// Example:
// document.querySelectorAll("td")

// 3. innerText
// - Gets visible text only.
// - Ignores hidden text.

// Example:
// document.querySelector("h2").innerText

// 4. textContent
// - Gets all text.
// - Includes hidden text.

// Example:
// document.querySelector("div").textContent

// 5. innerHTML
// - Gets or sets HTML inside element.

// Example:
// document.querySelector("h2").innerHTML = "<b>Hello</b>"

// 6. Select Specific Similar Tags

// let td = document.querySelectorAll("td");

// td[0].innerText   // first td
// td[1].innerText   // second td

// 7. Change Text

// document.querySelector("h2").innerText = "Result"

// 8. Main Difference

// innerText   = visible text
// textContent = all text
// innerHTML   = HTML tags + text

// 9. Best Practice

// Use innerText for normal text.
// Use textContent for raw text.
// Use innerHTML for adding HTML.

// 10. Important

// querySelector() = first item only
// querySelectorAll() = all items




// below is code and notes of DOM Methods: append(), appendChild(), createElement(), remove(), replaceWith()

// DOM CREATE / DELETE NOTES

// 1. createElement()
// - Creates new HTML element.

// Example:
// let tr = document.createElement("tr");

// 2. appendChild()
// - Adds one child element inside parent.

// Example:
// tbody.appendChild(tr)

// 3. append()
// - Adds text or elements.
// - Can add multiple items.

// Example:
// body.append("Hello")
// body.append(pTag)

// 4. append() vs appendChild()

// append():
// - text allowed
// - multiple items allowed

// appendChild():
// - only one element
// - no text directly

// 5. remove()
// - Deletes selected element.

// Example:
// document.querySelector("h2").remove()

// 6. replaceWith()
// - Replaces old element with new one.

// Example:
// oldTag.replaceWith(newTag)

// 7. Add Row Example

// let row = document.createElement("tr");

// row.innerHTML = "
// <td>Computer</td>
// <td>100</td>
// <td>95</td>
// <td>A+</td>
// ";

// document.querySelector("tbody").append(row)

// 8. Remove Row

// document.querySelector("tbody tr").remove()

// 9. Replace Heading

// let h = document.createElement("h2")
// h.innerText = "Result"

// document.querySelector("h2").replaceWith(h)

// 10. Best Practice

// createElement() + append() = modern best method