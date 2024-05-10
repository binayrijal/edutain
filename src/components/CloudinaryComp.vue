<template>
    <div>
      <AdvancedImage :cldImg="myImg" />
    </div>
</template>

<script>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo',
  },
});

// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
const myImg = cld.image('docs/model');

export default {
  components: {
    AdvancedImage,
  },
  data() {
    return {
      myImg,
    };
  },
};
</script>

