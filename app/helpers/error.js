export default function error(message, code = 500) {
  const error = new Error(message);
  error.code = code;
  throw error;
}