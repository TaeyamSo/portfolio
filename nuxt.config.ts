// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/global.css'],

  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },
 

  modules: ['@vesp/nuxt-fontawesome', "nuxt-aos"],

  fontawesome: {
    icons: {
      solid: [
        "minus",
        "plus",
        "angle-down",
        "angle-up",
        "link",
        "globe",
        "arrow-left",
        "xmark",
        "caret-down",
        "phone",
        "location-dot",
        "envelope",
        "fax",
        "box",
        "eye",
        'eye-slash',
        "heart",
        "magnifying-glass",
        "power-off",
        "cart-shopping",
        "file-pdf",
        'pen-to-square',
        'angle-right',
        'caret-left',
        'circle-check',
        'circle-xmark',
        'grip-lines'
      ],
      brands: [
        "facebook",
        "x-twitter",
        "linkedin",
        "whatsapp",
        "instagram",
        "youtube",
      ],
      regular: ["heart", "user"],
    },
  },

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  }

})