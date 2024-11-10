const container = document.getElementById("scrollableContainer");

function scrollLeft2() {
  container.scrollLeft -= 200;
}

function scrollRight() {
  container.scrollLeft += 200;
}

function downloadPDF() {
  const portfolio = document.body;
  html2pdf().from(portfolio).save("portfolio.pdf");
}
