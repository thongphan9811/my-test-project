const letterTemplateDetail = {
  id: 1,
  width: 400,
  height: 500,
  backgroundColor: 'white',
  header: {
    text: 'Vibrant Flower Bloom',
    fontSize: 10,
    fontWeight: 'normal',
    position: {
      top: 30,
      left: 206,
    },
  },
  description: {
    text: "A stunning close-up of a vibrant flower in full bloom, showcasing its vivid colors, delicate petals, and intricate details. The image captures the essence of nature's beauty, with each petal radiating life and color. Perfect for nature enthusiasts and those who appreciate the finer details of floral beauty.",
    fontSize: 15,
    fontWeight: 'normal',
    position: {
      top: 190,
      left: 206,
    },
  },
  img: {
    src: new URL('./flower.jpg', window.location.href).href,
    shape: 'rectangular',
    position: {
      top: 0,
      left: 0,
    },
    size: {
      width: 200,
      height: '100%',
    },
  },
};

const foodTemplateDetail = {
  id: 2,
  width: 600,
  height: 900,
  backgroundColor: 'white',
  header: {
    text: 'Welcome to the Food Paradise',
    fontSize: 10,
    fontWeight: 700,
    position: {
      top: 30,
      left: 206,
    },
  },
  img: {
    src: new URL('./bee.jpg', window.location.href).href,
    shape: 'window',
    position: {
      top: 200,
      left: 150,
    },
    size: {
      width: 275,
      height: 400,
    },
  },
  description: {
    text: 'Hi Lily,Thank you for joining me on a quest for peak health and personal peace. I’m thrilled to have you here. This self-paced course will be your retreat from the chaos of life and a space for you to discover the power of being fully present.The button below will bring you to the student portal and will require you to create a username and password. Once these steps are complete, you can begin your 30-day journey!',
    fontSize: 15,
    fontWeight: 'normal',
    position: {
      top: 650,
      left: 100,
    },
    width: 400,
  },
};

const lastOne = {
  id: 3,
  width: 600,
  height: 900,
  backgroundColor: 'white',
  header: {
    text: 'Welcome to the Food Paradise',
    fontSize: 10,
    fontWeight: 700,
    position: {
      top: 30,
      left: 206,
    },
  },
  img: {
    src: new URL('./bee.jpg', window.location.href).href,
    shape: 'window',
    position: {
      top: 200,
      left: 150,
    },
    size: {
      width: 275,
      height: 400,
    },
  },
  description: {
    text: 'Hi Lily,Thank you for joining me on a quest for peak health and personal peace. I’m thrilled to have you here. This self-paced course will be your retreat from the chaos of life and a space for you to discover the power of being fully present.The button below will bring you to the student portal and will require you to create a username and password. Once these steps are complete, you can begin your 30-day journey!',
    fontSize: 15,
    fontWeight: 'normal',
    position: {
      top: 650,
      left: 100,
    },
    width: 400,
  },
};

export const api = [{ ...letterTemplateDetail }, { ...foodTemplateDetail }, { ...lastOne }];
