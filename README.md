# Objective
To allow user capture an image from mobile back camera, then user can touch to drag out a rectangle to select an area for OCR

# Major Package used
+OCR: Tesseract.js
+Touch Gesture: react-use-gesture
+Camera: react-webcam

# Issues Identified
The drag selected area of image does not align to actual image location

# Potential Enhancements
*Better image taking quality / resolution
*Portrait and Landscape mode of image taking (does it work now?)
*Zoom in before selecting area
*Image preprocessing before passing to Tesseract
*Using Tensorflow.js model for OCR
