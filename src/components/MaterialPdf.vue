<template>
    <div>
      <object :data="pdfUrl" type="application/pdf" width="100%" height="500px">
        <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a :href="pdfUrl">click here to download the PDF file.</a></p>
      </object>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pdfUrl: '../assets/cv.pdf'
      };
    }
  };
  </script>