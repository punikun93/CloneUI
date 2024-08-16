function run() {
  let htmlCodeInput = document.getElementById("html-code").value;
  let cssCodeInput = document.getElementById("css-code").value;
  let output = document.getElementById("output");

  output.contentDocument.body.innerHTML = `${htmlCodeInput}<style> ${cssCodeInput} </style>`;
}


