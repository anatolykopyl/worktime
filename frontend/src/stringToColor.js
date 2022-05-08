/* eslint-disable */ 
export default function stringToColor(str) {
  var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#3366E6', '#99FF99', '#B34D4D', '#80B300', '#E6B3B3',
    '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66',
    '#E6331A', '#33FFCC', '#B366CC', '#CC80CC', '#991AFF',
    '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#CC9999',
    '#B3B31A', '#00E680', '#E6FF80', '#1AFF33', '#FF3380',
    '#CCCC00', '#66E64D', '#4D80CC', '#E64D66', '#4DB380',
    '#FF4D4D', '#99E6E6', '#6666FF'];

  var hash = 0;
  if (str.length === 0) return hash;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  hash = ((hash % colors.length) + colors.length) % colors.length;
  return colors[hash];
}