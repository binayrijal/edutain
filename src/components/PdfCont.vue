<template>
  <div>
    <h1>File</h1>

    <PDFViewer
      :source="url"
      style="height: 100vh; width: 100vw"
      @download="handleDownload"
    />

    <h1>Base64</h1>

    <PDFViewer
      :source="base64"
      style="height: 100vh; width: 100vw"
      @download="handleDownload"
    />
  </div>
</template>

<script>
import PDFViewer from 'pdf-viewer-vue'


export default {
  components: {
    PDFViewer,
  },

  data() {
    return {
      url: 'src/assets/cv.pdf',
      base64: '<BASE64_ENCODED_PDF>',
    }
  },
}
</script>