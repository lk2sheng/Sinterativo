export function frameNumber(path) {
  const match = path.match(/frame_(\d+)_/);
  return match ? Number(match[1]) : 0;
}
