const Colors = {
  JOOD_PINK: '#F04E98',
  JOOD_BLUE: '#00BCE7',
  JOOD_ORANGE: '#FF671F',
  JOOD_GREEN: '#6ECEB2',
  JOOD_GRAY: '#53565A',

  TRANSPARENT: 'rgba(1,1,1,0)',
  WHITE: '#ffffff',
  BG_WHITE: '#FAFAFA',

  DARK_GRAY: '#616161',
  GRAY: '#EEEEEE',
  BLACK: '#000000',
  
  BLACK_TEXT: '#212121',
  DARK_BLUE: '#045CA3',
  RED: '#FF3B30',
  YELLOW: '#FFD700',
  LIGHT_TEXT:'#E0E0E0',
};

export default Colors;

// --------------- Colo Manipulation --------------- //
// Make the hex color lighter
export function alpha(color: string, alphaValue: number): string {
  // Ensure the color is in rgba format
  const rgbaColor = hexToRgba(color);

  // Apply the alpha value to the rgba color
  return `rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${alphaValue})`;
}

function hexToRgba(hex: string): { r: number; g: number; b: number } {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return { r, g, b };
}
