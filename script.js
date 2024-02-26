document.addEventListener("DOMContentLoaded", function() {
    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");
    const colorPicker = document.getElementById("colorPicker");
    const colorDisplay = document.getElementById("colorDisplay");
  
    function updateColor() {
      const redValue = parseInt(redInput.value);
      const greenValue = parseInt(greenInput.value);
      const blueValue = parseInt(blueInput.value);
  
      if (redValue >= 0 && redValue <= 255 && greenValue >= 0 && greenValue <= 255 && blueValue >= 0 && blueValue <= 255) {
        const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        const hexColor = rgbToHex(redValue, greenValue, blueValue);
  
        colorDisplay.style.backgroundColor = rgbColor;
        colorDisplay.innerHTML = `<p>RGB: ${rgbColor}</p><p>Hex: ${hexColor}</p>`;
      }
    }
  
    function rgbToHex(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
  
    function updateColorFromPicker() {
      const hexColor = colorPicker.value;
      const rgbColor = hexToRgb(hexColor);
      
      redInput.value = rgbColor.r;
      greenInput.value = rgbColor.g;
      blueInput.value = rgbColor.b;
      redRange.value = rgbColor.r;
      greenRange.value = rgbColor.g;
      blueRange.value = rgbColor.b;
  
      updateColor();
    }
  
    function hexToRgb(hex) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    }
  
    redInput.addEventListener("input", updateColor);
    greenInput.addEventListener("input", updateColor);
    blueInput.addEventListener("input", updateColor);
    redRange.addEventListener("input", function() {
      redInput.value = redRange.value;
      updateColor();
    });
    greenRange.addEventListener("input", function() {
      greenInput.value = greenRange.value;
      updateColor();
    });
    blueRange.addEventListener("input", function() {
      blueInput.value = blueRange.value;
      updateColor();
    });
    colorPicker.addEventListener("input", updateColorFromPicker);
  
    // Agregamos el event listener para el cambio de color
    colorPicker.addEventListener("change", updateColorFromPicker);
  
    // Actualizar color al inicio
    updateColorFromPicker();
  });
  