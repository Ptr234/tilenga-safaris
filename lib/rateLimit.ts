// Best-effort, in-memory rate limiting for the edge runtime. There's no
// CAPTCHA or external rate-limit service wired up, and each edge instance
// keeps its own counters (this resets on cold start and isn't shared across
// regions/instances) -- so this is a deterrent against a single script
// hammering one warm instance, not a hard guarantee. It still avoids
// spending a Resend send or a Sanity write on obvious abuse for free.
declare global {
  // eslint-disable-next-line no-var
  var __tilengaRateLimitBuckets: Map<string, { count: number; resetAt: number }> | undefined;
}

function getBuckets() {
  if (!globalThis.__tilengaRateLimitBuckets) {
    globalThis.__tilengaRateLimitBuckets = new Map();
  }
  return globalThis.__tilengaRateLimitBuckets;
}

function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/**
 * Returns true if the caller has exceeded `limit` requests to `bucketName`
 * within the trailing `windowMs`, per client IP.
 */
export function isRateLimited(
  req: Request,
  bucketName: string,
  limit: number,
  windowMs: number,
): boolean {
  const key = `${bucketName}:${getClientIp(req)}`;
  const buckets = getBuckets();
  const now = Date.now();
  const entry = buckets.get(key);

  if (!entry || entry.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > limit;
}
