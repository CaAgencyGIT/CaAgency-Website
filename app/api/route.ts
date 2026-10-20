// Reserve the API root so it cannot be mistaken for a locale homepage.
export function GET() {
  return Response.json({ error: 'Not Found' }, { status: 404 })
}
