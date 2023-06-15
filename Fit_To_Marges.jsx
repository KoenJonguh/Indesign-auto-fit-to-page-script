// Script voor Indesign om een object/vorm tot aan de marges vullend te maken.

// Het script controleerd of er een document is geopend en daarna of er een selectie is gemaakt.
// Dan word de eenheidsmaat gecontroleerd, marge grote berekend en daarna word de grote van het geselecteerde object aangepast naar deze grote.

if (app.documents.length > 0) {
  var doc = app.activeDocument;

  if (doc.selection.length > 0) {
    var selectedItem = doc.selection[0];

    var originalUnit = app.scriptPreferences.measurementUnit;
    app.scriptPreferences.measurementUnit = MeasurementUnits.PICAS;

    var pageWidth = doc.documentPreferences.pageWidth;
    var pageHeight = doc.documentPreferences.pageHeight;

    var leftMargin = doc.marginPreferences.left;
    var topMargin = doc.marginPreferences.top;
    var rightMargin = doc.marginPreferences.right;
    var bottomMargin = doc.marginPreferences.bottom;

    var objectBounds = [
      topMargin,
      leftMargin,
      pageHeight - bottomMargin,
      pageWidth - rightMargin
    ];

    selectedItem.geometricBounds = objectBounds;

    app.scriptPreferences.measurementUnit = originalUnit;
  } else {
    alert("Je hebt niets geselecteerd!");
  }
} else {
  alert("Je hebt geen document geopend!");
}

// Je kunt dit script sneller triggeren door er een shortcut aan toe te voegen.