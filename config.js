/**
 * ══════════════════════════════════════════════
 *  SITE CONFIG — فقط این فایل رو ویرایش کن
 * ══════════════════════════════════════════════
 *
 *  مراحل راه‌اندازی:
 *  ۱. یک ریپازیتوری Public روی GitHub بساز (مثلاً: my-site-data)
 *  ۲. فایل data.json رو داخلش آپلود کن
 *  ۳. مقادیر زیر رو پر کن و این فایل رو روی Cloudflare Pages آپلود کن
 *
 *  توکن GitHub (برای پنل ادمین):
 *  github.com → Settings → Developer Settings
 *  → Personal access tokens → Tokens (classic)
 *  → Generate new token → تیک "repo" → Generate
 *  توکن رو در پنل ادمین وارد می‌کنی (نه اینجا)
 */

window.SITE_CONFIG = {
  gh_owner:  'your-github-username',   // نام کاربری GitHub
  gh_repo:   'my-site-data',           // نام ریپازیتوری
  gh_branch: 'main',                   // معمولاً main یا master
};

// CDN آدرس خودکار محاسبه می‌شه — نیازی به تغییر نیست
window.SITE_CONFIG.cdn = `https://cdn.jsdelivr.net/gh/${window.SITE_CONFIG.gh_owner}/${window.SITE_CONFIG.gh_repo}@${window.SITE_CONFIG.gh_branch}`;
