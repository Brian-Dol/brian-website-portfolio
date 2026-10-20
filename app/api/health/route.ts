export function GET() {
  return Response.json({
    status: "ok",
    service: "brian-portfolio-api",
    timestamp: new Date().toISOString(),
  });
}
