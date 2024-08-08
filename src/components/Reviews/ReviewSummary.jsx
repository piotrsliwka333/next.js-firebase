export async function GeminiSummary({ restaurantId }) {
  return (
    <div className="restaurant__review_summary">
      <p>TODO: summarize reviews</p>
    </div>
  );
}

export function GeminiSummarySkeleton() {
  return (
    <div className="restaurant__review_summary">
      <p>✨ Summarizing reviews with Gemini...</p>
    </div>
  );
}
