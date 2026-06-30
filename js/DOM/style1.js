
    // Select all rows inside tbody (skip header)
    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(function(row, index) {
        if (index % 2 === 0) {
            // Even row (0,2,4...) → White
            row.style.backgroundColor = "white";
        } else {
            // Odd row (1,3,5...) → Gray
            row.style.backgroundColor = "#d3d3d3";
        }
    });
