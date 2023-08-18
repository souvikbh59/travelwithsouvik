import jsPDF from "jspdf";
import Image from "../assets/kedarnath.jpeg";

export const pdfGenerate = () => {
  var doc = new jsPDF("landscape", "pt", "a4", "false");
  doc.setFont("Helvertica", "Bold");
  doc.text("Kedarnath", 300, 20, 0, "center");
  doc.addImage(Image, "jpeg", 65, 50, 500, 400);
  doc.addPage();
  doc.setFont("Calibri", "Normal");
  doc.text("after text latest", 20, 20);
  doc.save("Travel_Information.pdf");
};
