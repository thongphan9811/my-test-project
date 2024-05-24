const letterTemplateDetail = {
  id: 1,
  width: 400,
  height: 500,
  backgroundColor: 'white',
  header: {
    text: 'Header load form api',
    fontSize: 10,
    fontWeight: 'normal',
    position: {
      top: 5,
      left: 5,
    },
  },
  description: {
    text: 'Description load from api',
    fontSize: 15,
    fontWeight: 'normal',
    position: {
      top: 60,
      left: 50,
    },
  },
  img: {
    src: new URL('./flower.jpg', window.location.href).href,
    shape: 'rectangular',
    position: {
      top: 50,
      left: 50,
    },
    size: {
      width: 100,
      height: 100,
    },
  },
};

export const api = [{ ...letterTemplateDetail }];
