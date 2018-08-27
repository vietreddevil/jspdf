function savePDF() {
    var imgData;
    html2canvas($("#someHtml"), {
        useCORS: true,
        onrendered: function (canvas) {
            imgData = canvas.toDataURL('image/png');
            var doc = new jsPDF('p', 'pt', 'a4');
            doc.setFontSize(100)
            doc.addImage(imgData, 'PNG', 0, 0, 1000, 1500);

            doc.addPage();
            doc.addImage(imgData, 'PNG', 15,-100);
            doc.save('sample-file.pdf');
            //setTimeout(function () { window.open(imgData) }, 1000);
        }
    });
}
/*set doc size = size 1 trang || image size
trang dau doc add image 0 0
trang 2 add image 0 -imageheight
trang 3 add image 0 -2*imageheight
...
*/


function PrintElem()
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById("someHtml").innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}
