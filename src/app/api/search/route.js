import { searchResult } from "@/lib/validators";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("query");
  if (!term) {
    return Response.json([], { status: 200 });
  }

  let results = await searchResult(term);
  if (results.length > 7) {
    results = results.slice(0, 7);
  }
  return Response.json(results, { status: 200 });
}
