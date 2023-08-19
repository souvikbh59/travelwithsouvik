import jsPDF from "jspdf";

export const pdfGenerate = ({
  name,
  description,
  url,
  moreDescription,
  plan,
  contact,
}) => {
  var doc = new jsPDF("potrait", "pt", "a4", "true");
  doc.setFont("Arial", "times", 200);
  doc.text(`${name} Tour Plan`, 300, 20, 0, "center");
  doc.addImage(url, "jpeg", 65, 50, 500, 400);
  doc.text(description, 20, 560, { maxWidth: 500 });
  doc.addPage();
  doc.setFont("Time-Italic", "Normal");
  doc.text(moreDescription, 20, 20, { maxWidth: 500 });
  doc.text(plan, 20, 80, { maxWidth: 500 });
  doc.text(contact, 20, 240, { maxWidth: 500 });
  doc.setFontSize(10);
  doc.text(`All Rights Reserved By Travel With Souvik`, 300, 600, 0, "center");
  doc.save(`${name}.pdf`);
};
