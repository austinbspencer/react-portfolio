export function calcImageSize(height, width, maxHeight, maxWidth) {
  const heightDif = height / maxHeight;
  const widthDif = width / maxWidth;

  const maxDif = heightDif > widthDif ? heightDif : widthDif;

  return {
    height: Math.floor(height / maxDif),
    width: Math.floor(width / maxDif),
  };
}
