console.log("Hello world");

//Set current year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

////////////////////////////////////////////////////////////
//Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////////
//Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //Scroll down
    if (href !== "#" && href.startsWith("#")) {
      const sectionEL = document.querySelectorAll(href);
      sectionEL[0].scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith("/")) {
      window.open(href, "_parent");
    } else {
      // window.open(href, "_blank");
    }

    //other links
    // if (href !== "#" && !href.startsWith("#")) {
    //   window.open(href, "_blank");
    // }

    //close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

////////////////////////////////////////////////////////////
//Sticky navigation
const sectionHeroEl = document.querySelector(".profile-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
