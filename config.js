/**
 * ══════════════════════════════════════════════
 *  SITE CONFIG — فقط این فایل رو ویرایش کن
 * ══════════════════════════════════════════════
 *
 *  مراحل راه‌اندازی:
 *  ۱. یک ریپازیتوری Public روی GitHub بساز (مثلاً: my-site-data)
 *  ۲. فایل data.json رو داخلش آپلود کن
 *  ۳. مقادیر زیر رو پر کن و این فایل رو روی Cloudflare Pages آپلود کن
 */

window.SITE_CONFIG = {
  // ⚠️ مهم: نام کاربری و نام ریپازیتوری رو درست وارد کن
  gh_owner:  'lookingforusername2',   // نام کاربری GitHub شما
  gh_repo:   'data',           // نام ریپازیتوری که data.json توش هست
  gh_branch: 'main',                   // معمولاً main یا master
};

// CDN آدرس خودکار محاسبه می‌شه — نیازی به تغییر نیست
window.SITE_CONFIG.cdn = `https://cdn.jsdelivr.net/gh/${window.SITE_CONFIG.gh_owner}/${window.SITE_CONFIG.gh_repo}@${window.SITE_CONFIG.gh_branch}`;

