// Script voor Indesign om een object/vorm pagina+afloop vullend te maken.

// Het script controleerd of er een document is geopend en daarna of er een selectie is gemaakt.
// Dan word de eenheidsmaat gecontroleerd, pagina grote + afloop berekend en daarna word de grote van het geselecteerde object aangepast naar deze grote.

if (app.documents.length > 0) {
  var doc = app.activeDocument;

  if (doc.selection.length > 0) {
    var selectedItem = doc.selection[0];

    var originalUnit = app.scriptPreferences.measurementUnit;
    app.scriptPreferences.measurementUnit = MeasurementUnits.PICAS;
    var pageWidth = doc.documentPreferences.pageWidth;
    var pageHeight = doc.documentPreferences.pageHeight;
    var bleedInsideOrLeftOffset = doc.documentPreferences.documentBleedInsideOrLeftOffset;
    var bleedOutsideOrRightOffset = doc.documentPreferences.documentBleedOutsideOrRightOffset;
    var bleedTopOffset = doc.documentPreferences.documentBleedTopOffset;
    var bleedBottomOffset = doc.documentPreferences.documentBleedBottomOffset;

    var docWidth = pageWidth + bleedInsideOrLeftOffset + bleedOutsideOrRightOffset;
    var docHeight = pageHeight + bleedTopOffset + bleedBottomOffset;

    var bleedTop = -bleedTopOffset;
    var bleedLeft = -bleedInsideOrLeftOffset;
    var bleedBottom = pageHeight + bleedBottomOffset;
    var bleedRight = pageWidth + bleedOutsideOrRightOffset;

    selectedItem.geometricBounds = [bleedTop, bleedLeft, bleedBottom, bleedRight];

    app.scriptPreferences.measurementUnit = originalUnit;
  } else {
    alert("Je hebt niets geselecteerd!");
  }
} else {
  alert("Je hebt geen document geopend!");
}

// Je kunt dit script sneller triggeren door er een shortcut aan toe te voegen.