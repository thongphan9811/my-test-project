export function createLinkAndDownloadFile(data: string, fileName: string) {
  var link = document.createElement('a');

  if (typeof link.download === 'string') {
    link.href = data;
    link.download = fileName;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(data);
  }
}
