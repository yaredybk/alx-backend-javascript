export default async function guardrail(mathFunction) {
  let queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error);
  }
  queue.push('Guardrail was processed');
  return queue;
}
