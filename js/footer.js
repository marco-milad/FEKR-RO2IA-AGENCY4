// footer.js
export function loadFooter() {
  return `
  <footer class="footer-section py-5">
    <div class="container">
      <div class="row gy-4">

        <!-- Logo + Description -->
        <div class="col-12 col-md-4">
          <div class="footer-brand mb-3">
            <img src="https://res.cloudinary.com/dcui0elwh/image/upload/v1759586832/logo2_cjf7mn.jpg" alt="شعار فكر ورؤية" class="footer-logo">
          </div>
          <p class="footer-desc">
            شركة فكر ورؤية للدعاية والإعلان — نقدم حلولًا إبداعية واستراتيجيات تسويقية مبتكرة تعزز حضور علامتك التجارية وتحقق نتائج ملموسة.
          </p>
        </div>

        <!-- Menu -->
        <div class="col-6 col-md-2">
          <h6 class="footer-title">القائمة</h6>
          <ul class="footer-links list-unstyled">
            <li><a href="./index.html">الرئيسية</a></li>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#services">خدماتنا</a></li>
            <li><a href="#work">أعمالنا</a></li>
            <li><a href="./contact.html">تواصل معنا</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="col-6 col-md-3">
          <h6 class="footer-title">خدماتنا</h6>
          <ul class="footer-links list-unstyled">
            <li><a href="#">الدعاية والإعلان</a></li>
            <li><a href="#">التصميم الجرافيكي</a></li>
            <li><a href="#">إدارة الحملات الرقمية</a></li>
            <li><a href="#">التسويق عبر وسائل التواصل</a></li>
            <li><a href="#">المحتوى الإبداعي</a></li>
          </ul>
        </div>

        <!-- Social -->
        <div class="col-12 col-md-3">
          <h6 class="footer-title">تابعنا</h6>
          <ul class="footer-links list-unstyled">
            <li><a href="#"><i class="fab fa-facebook-f me-2"></i>فيسبوك</a></li>
            <li><a href="https://www.instagram.com/think.a.vision?igsh=YmRvZ3A5Y2Nub25t"><i class="fab fa-instagram me-2"></i>إنستجرام</a></li>
            <li><a href="#"><i class="fab fa-linkedin-in me-2"></i>لينكد إن</a></li>
            <li><a href="#"><i class="fab fa-x-twitter me-2"></i>تويتر</a></li>
          </ul>
        </div>

      </div>

      <hr class="footer-divider my-4">

      <!-- Footer Bottom -->
      <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p class="mb-2 mb-md-0 small">&copy; ${new Date().getFullYear()} فكر ورؤية. جميع الحقوق محفوظة.</p>
        <div class="footer-policy small">
          <a href="#">الشروط والأحكام</a> |
          <a href="#">سياسة الخصوصية</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

