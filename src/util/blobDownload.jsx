const downloadFile = (data) => {
    const fileName = "file";

    data.forEach(element => {
    const json = JSON.stringify(element);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    });
  };
  
  export default downloadFile;