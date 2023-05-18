'use strict';

const yearEL = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

const header = document.querySelector('.header');
const mainNav = document.querySelector('.main-nav');
const btnNav = document.querySelector('.btn-mobile-nav');
const navCta = document.querySelector('.nav-cta');

// const allLinks = document.querySelectorAll('a:link');

btnNav.addEventListener('click', function (e) {
  e.preventDefault();
  header.classList.toggle('nav-open');
});

// Detect when the divs enter the viewport
window.addEventListener('scroll', function () {
  const slideInDivs = document.querySelectorAll('.slide-in');
  slideInDivs.forEach(function (div) {
    const bounding = div.getBoundingClientRect();

    if (bounding.top < window.innerHeight) {
      div.classList.add('show'); // Add show class to trigger the slide-in animation
    }
  });
});
// allLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();

//     const href = link.getAttribute('href');

//     if (href === '#') {
//       window.scrollTo({ top: 0, bottom: 'smooth' });
//     }

//     if (href !== '#' && href.startsWith('#')) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: 'smooth' });
//     }
//     if (link.classList.contains('main-nav-link'))
//       header.classList.toggle('nav-open');
//   });
// });

//// STICKY NAV ////

const sectionHero = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHero);

// Modal

// Get the modal element
const modal = document.getElementById('about_modal');

// Get the link that opens the modal
const link = document.getElementById('about_nav');

// Get the close button element
const closeBtn = document.getElementsByClassName('close')[0];

// Open the modal when the link is clicked
link.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

// change language

function changeLanguage() {
  const features_nav = document.getElementById('features_nav');

  // Check the current language
  if (features_nav.textContent === 'Features') {
    // Change to Chinese
    features_nav.textContent = '特色';
  } else {
    // Change to English
    features_nav.textContent = 'Features';
  }

  const about_nav = document.getElementById('about_nav');

  // Check the current language
  if (about_nav.textContent === 'About us') {
    // Change to Chinese
    about_nav.textContent = '關於我';
  } else {
    // Change to English
    about_nav.textContent = 'About us';
  }

  const flavors_nav = document.getElementById('flavors_nav');

  // Check the current language
  if (flavors_nav.textContent === `What's inside`) {
    // Change to Chinese
    flavors_nav.textContent = '內容';
  } else {
    // Change to English
    flavors_nav.textContent = `What's inside`;
  }

  const garden_nav = document.getElementById('garden_nav');

  // Check the current language
  if (garden_nav.textContent === 'The Garden') {
    // Change to Chinese
    garden_nav.textContent = '茶園';
  } else {
    // Change to English
    garden_nav.textContent = `The Garden`;
  }

  const products_nav = document.getElementById('products_nav');

  // Check the current language
  if (products_nav.textContent === 'Products') {
    // Change to Chinese
    products_nav.textContent = '產品';
  } else {
    // Change to English
    products_nav.textContent = 'Products';
  }

  const cta_nav = document.getElementById('cta_nav');

  // Check the current language
  if (cta_nav.textContent === 'Contact Us') {
    // Change to Chinese
    cta_nav.textContent = '聯絡我們';
  } else {
    // Change to English
    cta_nav.textContent = 'Contact Us';
  }

  const buynow = document.getElementById('buynow');

  // Check the current language
  if (buynow.textContent === 'Buy Now') {
    // Change to Chinese
    buynow.textContent = '購買';
  } else {
    // Change to English
    buynow.textContent = 'Buy Now';
  }

  const hero_heading = document.getElementById('hero_heading');

  // Check the current language
  if (hero_heading.textContent.trim() === 'The secret of concentration') {
    // Change to Chinese
    hero_heading.textContent = '專注的秘密';
  } else {
    // Change to English
    hero_heading.textContent = 'The secret of concentration';
  }

  const hero_main = document.getElementById('hero_main');

  // Check the current language
  if (
    hero_main.textContent.trim().replace(/\s/g, '') ===
    'Anallnaturaldrinkwithnoadditivesdesignedtokeepyouconcentratedanddrinkinghealthy.Tailoredforconsumersthatspendlonghoursontheircomputers.'
  ) {
    // Change to Chinese
    hero_main.textContent =
      '全天然，不含添加物，讓您健康飲用，又能維持專注力及動能。專為長時間使用電腦工作及娛樂的您量身打造的茶飲';
  } else {
    // Change to English
    hero_main.textContent =
      'An all natural drink with no additives designed to keep you concentrated and drinking healthy. Tailored for consumers that spend long hours on their computers.';
  }

  const learn_more = document.getElementById('learn_more');

  // Check the current language
  if (learn_more.textContent.trim() === 'Learn More') {
    // Change to Chinese
    learn_more.textContent = '更多';
  } else {
    // Change to English
    learn_more.textContent = 'Learn More';
  }

  const features_sub = document.getElementById('features_sub');

  // Check the current language
  if (features_sub.textContent.trim() === 'features') {
    // Change to Chinese
    features_sub.textContent = '特色';
  } else {
    // Change to English
    features_sub.textContent = 'features';
  }

  const features_heading = document.getElementById('features_heading');

  // Check the current language
  if (
    features_heading.textContent.trim() ===
    'Must know features about our products'
  ) {
    // Change to Chinese
    features_heading.textContent = '瞭解我們的產品特色';
  } else {
    // Change to English
    features_heading.textContent = 'Must know features about our products';
  }

  const ingredients = document.getElementById('ingredients');

  // Check the current language
  if (ingredients.textContent.trim() === 'Ingredients') {
    // Change to Chinese
    ingredients.textContent = '原料';
  } else {
    // Change to English
    ingredients.textContent = 'Ingredients';
  }

  const ingredients_desc = document.getElementById('ingredients_desc');

  // Check the current language
  if (
    ingredients_desc.textContent.trim().replace(/\s/g, '') ===
    'Ingredientsareallnaturalwithzeroadditives.Mainingredientsincludetealeavesandgojiberries.Wedonotaddanysugarandonlyusethenaturalsweetnessfromthegojiberries,whilealsousingteathatcomeswithnaturalsavoriness.'
  ) {
    // Change to Chinese
    ingredients_desc.textContent =
      '成分全天然，無添加物，無防腐劑。只使用帶有天然香氣的茶葉和天然甜味的枸杞子';
  } else {
    // Change to English
    ingredients_desc.textContent =
      'Ingredients are all natural with zero additives. Main ingredients include tea leaves and goji berries. We do not add any sugar and only use the natural sweetness from the goji berries, while also using tea that comes with natural savoriness.';
  }

  const conc_health = document.getElementById('conc_health');

  // Check the current language
  if (conc_health.textContent.trim() === 'Concentration and Health') {
    // Change to Chinese
    conc_health.textContent = '注意力與健康';
  } else {
    // Change to English
    conc_health.textContent = 'Concentration and Health';
  }

  const conc_desc = document.getElementById('conc_desc');

  // Check the current language
  if (
    conc_desc.textContent.trim().replace(/\s/g, '') ===
    'NaturalcaffeineandL-Theaninefromtealeavestokeepyouconcentrated.TealeavesnaturallyproducesL-Theanine.L-theaninepromotesrelaxationbyreducingstressandanxiety.'
  ) {
    // Change to Chinese
    conc_desc.textContent =
      '茶胺酸（L-Theanine）是茶湯中特有的胺基酸，茶氨酸可減輕壓力和焦慮以促進放鬆。茶葉中的天然咖啡因可讓您保持專注。枸杞子含有眼睛保健的必需營養素';
  } else {
    // Change to English
    conc_desc.textContent =
      ' Natural caffeine and L-Theanine from tea leaves to keep you concentrated. Tea leaves naturally produces L-Theanine. L-theanine promotes relaxation by reducing stress and anxiety.';
  }

  const origin = document.getElementById('origin');

  // Check the current language
  if (origin.textContent.trim() === 'Origin') {
    // Change to Chinese
    origin.textContent = '產地';
  } else {
    // Change to English
    origin.textContent = 'Origin';
  }

  const origin_desc = document.getElementById('origin_desc');

  // Check the current language
  if (
    origin_desc.textContent.trim().replace(/\s/g, '') ===
    `Tealeavesareallhand-pickedfromthehighmountainsofTaiwan.Ouringredients,especiallyourtealeavesareverycarefullyroastedandcuratedfromourownteagarden.Weusethebestqualityanddon'tuseanypesticidesatall.`
  ) {
    // Change to Chinese
    origin_desc.textContent =
      '茶葉來自台灣高山。全部精心挑選手工採摘烘焙，不使用任何化學肥料及農藥。 每一款茶葉都經過ITS檢驗，確保茶葉都符合政府安全規範';
  } else {
    // Change to English
    origin_desc.textContent = `Tea leaves are all hand-picked from the high mountains of Taiwan. Our ingredients, especially our tea leaves are very carefully roasted and curated from our own tea garden. We use the best quality and don't use any pesticides at all.`;
  }

  const brew = document.getElementById('brew');

  // Check the current language
  if (brew.textContent.trim() === 'Signature Brew') {
    // Change to Chinese
    brew.textContent = '專有萃茶技術';
  } else {
    // Change to English
    brew.textContent = 'Signature Brew';
  }

  const brew_desc = document.getElementById('brew_desc');

  // Check the current language
  if (
    brew_desc.textContent.trim().replace(/\s/g, '') ===
    'Ourdrinkcanbebrewedbothhotorcolddependingonpreferences.Howeveroursignatureisthecoldbrew.Withjust1-3minofshakinginabottle,itisreadytodrink.'
  ) {
    // Change to Chinese
    brew_desc.textContent = `我們的飲料使用特有的萃茶技術，可以根據喜好沖泡熱飲或冷飲。 冷泡是新興的茶泡法，受大部分年輕人的喜愛。特別適合上班族或外勤人員飲用。使用方便攜帶的水壺或罐子加入茶包，依自己濃淡喜好，手搖1-3分鐘即可開始飲用
    `;
  } else {
    // Change to English
    brew_desc.textContent =
      'Our drink can be brewed both hot or cold depending on preferences. However our signature is the cold brew. With just 1-3 min of shaking in a bottle, it is ready to drink.';
  }

  const prods_sub = document.getElementById('prods_sub');

  // Check the current language
  if (prods_sub.textContent.trim() === 'Enoz products') {
    // Change to Chinese
    prods_sub.textContent = `Enoz 產品`;
  } else {
    // Change to English
    prods_sub.textContent = 'Enoz products';
  }

  const prods_heading = document.getElementById('prods_heading');

  // Check the current language
  if (
    prods_heading.textContent.trim() ===
    'We currently offer 4 different flavors'
  ) {
    // Change to Chinese
    prods_heading.textContent = `我們目前提供四種口味`;
  } else {
    // Change to English
    prods_heading.textContent = 'We currently offer 4 different flavors';
  }

  const oolong = document.getElementById('oolong');

  // Check the current language
  if (oolong.textContent.trim() === 'Oolong') {
    // Change to Chinese
    oolong.textContent = `OOLONG TEA 烏龍茶`;
  } else {
    // Change to English
    oolong.textContent = 'Oolong';
  }

  const oolong_desc = document.getElementById('oolong_desc');

  // Check the current language
  if (
    oolong_desc.textContent.trim().replace(/\s/g, '') ===
    'Oolongtealeavessmokedwithlonganwoodtocreateanaturallysweetandfruityflavor.'
  ) {
    // Change to Chinese
    oolong_desc.textContent = `烏龍茶葉使用龍眼木去做烘製，會有天然的果香及甜味`;
  } else {
    // Change to English
    oolong_desc.textContent =
      'Oolong tea leaves smoked with longan wood to create a naturally sweet and fruity flavor.';
  }

  const black = document.getElementById('black');

  // Check the current language
  if (black.textContent.trim() === 'Black') {
    // Change to Chinese
    black.textContent = `BLACK TEA 蜜香紅茶`;
  } else {
    // Change to English
    black.textContent = 'Black';
  }

  const black_desc = document.getElementById('black_desc');

  // Check the current language
  if (
    black_desc.textContent.trim().replace(/\s/g, '') ===
    'Thesearemadewithararetypeofblacktealeaves,wheretheteabudsarebittenbyatypeofleahoppercalledtheJacobiascaFormosana.Theseteabudswillthengrowintoleavesthathaveanaturalhoneyflavor.'
  ) {
    // Change to Chinese
    black_desc.textContent = `茶葉是取自於稀有的紅茶葉製成，茶芽是經過小綠葉蟬吸吮過，這種茶芽會有一股天然的蜜香風味，要吸引小綠葉蟬群聚，茶園絕對不能噴灑農藥`;
  } else {
    // Change to English
    black_desc.textContent =
      'These are made with a rare type of black tea leaves, where the tea buds are bitten by a type of leahopper called the Jacobiasca Formosana. These tea buds will then grow into leaves that have anatural honey flavor.';
  }

  const jade = document.getElementById('jade');

  // Check the current language
  if (jade.textContent.trim() === 'Jade Green') {
    // Change to Chinese
    jade.textContent = `JADE GREEN TEA 苿莉綠茶`;
  } else {
    // Change to English
    jade.textContent = 'Jade Green';
  }

  const jade_desc = document.getElementById('jade_desc');

  // Check the current language
  if (
    jade_desc.textContent.trim().replace(/\s/g, '') ===
    'Madefromgreenteasmokedwithjasmineflowertobringmorenaturalsweetnesstoitsflavor.'
  ) {
    // Change to Chinese
    jade_desc.textContent = `用苿莉花下去薰製的綠茶，為其帶來更多天然的甜味及淡雅的花香味`;
  } else {
    // Change to English
    jade_desc.textContent =
      'Made from green tea smoked with jasmine flower to bring more natural sweetness to its flavor.';
  }

  const fours = document.getElementById('fours');

  // Check the current language
  if (fours.textContent.trim() === 'Four Seasons') {
    // Change to Chinese
    fours.textContent = `FOUR SEASON TEA 四季春`;
  } else {
    // Change to English
    fours.textContent = 'Four Seasons';
  }

  const fours_desc = document.getElementById('fours_desc');

  // Check the current language
  if (
    fours_desc.textContent.trim().replace(/\s/g, '') ===
    'Averylightflavoredflowerytastemadefromfourseasontealeaves.'
  ) {
    // Change to Chinese
    fours_desc.textContent = `由四季春茶葉烘製而成，帶有很輕淡的花香味`;
  } else {
    // Change to English
    fours_desc.textContent =
      'A very light flavored flowery taste made from four season tea leaves.';
  }

  const gallery_title = document.getElementById('gallery_title');

  // Check the current language
  if (gallery_title.textContent.trim() === 'Enoz tea garden') {
    // Change to Chinese
    gallery_title.textContent = `Enoz 茶園`;
  } else {
    // Change to English
    gallery_title.textContent = 'Enoz tea garden';
  }

  const prod_details_sub = document.getElementById('prod_details_sub');

  // Check the current language
  if (prod_details_sub.textContent.trim() === 'Product Details') {
    // Change to Chinese
    prod_details_sub.textContent = `產品資訊`;
  } else {
    // Change to English
    prod_details_sub.textContent = 'Product Details';
  }

  const prod_details_title = document.getElementById('prod_details_title');

  // Check the current language
  if (
    prod_details_title.textContent.trim() ===
    'Made with the best ingredients from Taiwan'
  ) {
    // Change to Chinese
    prod_details_title.textContent = `使用台灣最好的原料`;
  } else {
    // Change to English
    prod_details_title.textContent =
      'Made with the best ingredients from Taiwan';
  }

  const oolong_ing = document.getElementById('oolong_ing');

  // Check the current language
  if (oolong_ing.textContent.trim() === 'Smoked oolong tea leaves') {
    // Change to Chinese
    oolong_ing.textContent = `烏龍茶葉`;
  } else {
    // Change to English
    oolong_ing.textContent = 'Smoked oolong tea leaves';
  }

  const oolong_ing1 = document.getElementById('oolong_ing1');

  // Check the current language
  if (oolong_ing1.textContent.trim() === 'Dried Goji berries') {
    // Change to Chinese
    oolong_ing1.textContent = `枸杞子`;
  } else {
    // Change to English
    oolong_ing1.textContent = 'Dried Goji berries';
  }

  const oolong_caff = document.getElementById('oolong_caff');

  // Check the current language
  if (oolong_caff.textContent.trim() === 'Caffeine: 55 mg/8oz') {
    // Change to Chinese
    oolong_caff.textContent = `咖啡因含量: 10.4毫克/100mL`;
  } else {
    // Change to English
    oolong_caff.textContent = 'Caffeine: 55 mg/8oz';
  }

  const oolong_theanine = document.getElementById('oolong_theanine');

  // Check the current language
  if (oolong_theanine.textContent.trim() === 'L-Theanine: 6.21 mg/cup') {
    // Change to Chinese
    oolong_theanine.textContent = `茶胺酸含量: 6.21毫克/杯`;
  } else {
    // Change to English
    oolong_theanine.textContent = 'L-Theanine: 6.21 mg/cup';
  }

  const oolong_packs = document.getElementById('oolong_packs');

  // Check the current language
  if (oolong_packs.textContent.trim() === '20 packs/box') {
    // Change to Chinese
    oolong_packs.textContent = `20 包/盒`;
  } else {
    // Change to English
    oolong_packs.textContent = '20 packs/box';
  }

  const oolong_g = document.getElementById('oolong_g');

  // Check the current language
  if (oolong_g.textContent.trim() === '4g / pack') {
    // Change to Chinese
    oolong_g.textContent = `每包淨重4g  `;
  } else {
    // Change to English
    oolong_g.textContent = '4g / pack';
  }

  const black_ing = document.getElementById('black_ing');

  // Check the current language
  if (black_ing.textContent.trim() === 'Smoked black tea leaves') {
    // Change to Chinese
    black_ing.textContent = `蜜香紅茶葉`;
  } else {
    // Change to English
    black_ing.textContent = 'Smoked black tea leaves';
  }

  const black_ing1 = document.getElementById('black_ing1');

  // Check the current language
  if (black_ing1.textContent.trim() === 'Dried Goji berries') {
    // Change to Chinese
    black_ing1.textContent = `枸杞子`;
  } else {
    // Change to English
    black_ing1.textContent = 'Dried Goji berries';
  }

  const black_caff = document.getElementById('black_caff');

  // Check the current language
  if (black_caff.textContent.trim() === 'Caffeine: 47 mg/8oz') {
    // Change to Chinese
    black_caff.textContent = `咖啡因含量: 22亳克/100mL`;
  } else {
    // Change to English
    black_caff.textContent = 'Caffeine: 47 mg/8oz';
  }

  const black_theanine = document.getElementById('black_theanine');

  // Check the current language
  if (black_theanine.textContent.trim() === 'L-Theanine: 5.13 mg/cup') {
    // Change to Chinese
    black_theanine.textContent = `茶胺酸含量: 5.13毫克/杯`;
  } else {
    // Change to English
    black_theanine.textContent = 'L-Theanine: 5.13 mg/cup';
  }

  const black_packs = document.getElementById('black_packs');

  // Check the current language
  if (black_packs.textContent.trim() === '20 packs/box') {
    // Change to Chinese
    black_packs.textContent = `20 包/盒`;
  } else {
    // Change to English
    black_packs.textContent = '20 packs/box';
  }

  const black_g = document.getElementById('black_g');

  // Check the current language
  if (black_g.textContent.trim() === '4g / pack') {
    // Change to Chinese
    black_g.textContent = `每包淨重4g  `;
  } else {
    // Change to English
    black_g.textContent = '4g / pack';
  }

  const green_ing = document.getElementById('green_ing');

  // Check the current language
  if (green_ing.textContent.trim() === 'Smoked green tea leaves') {
    // Change to Chinese
    green_ing.textContent = `綠茶葉`;
  } else {
    // Change to English
    green_ing.textContent = 'Smoked green tea leaves';
  }

  const green_ing1 = document.getElementById('green_ing1');

  // Check the current language
  if (green_ing1.textContent.trim() === 'Dried Goji berries') {
    // Change to Chinese
    green_ing1.textContent = `枸杞子`;
  } else {
    // Change to English
    green_ing1.textContent = 'Dried Goji berries';
  }

  const green_caff = document.getElementById('green_caff');

  // Check the current language
  if (green_caff.textContent.trim() === 'Caffeine: 28 mg/8oz') {
    // Change to Chinese
    green_caff.textContent = `咖啡因含量: 16.3亳克/100mL`;
  } else {
    // Change to English
    green_caff.textContent = 'Caffeine: 28 mg/8oz';
  }

  const green_theanine = document.getElementById('green_theanine');

  // Check the current language
  if (green_theanine.textContent.trim() === 'L-Theanine: 6.56 mg/cup') {
    // Change to Chinese
    green_theanine.textContent = `茶胺酸含量: 6.56毫克/杯`;
  } else {
    // Change to English
    green_theanine.textContent = 'L-Theanine: 6.56 mg/cup';
  }

  const green_packs = document.getElementById('green_packs');

  // Check the current language
  if (green_packs.textContent.trim() === '20 packs/box') {
    // Change to Chinese
    green_packs.textContent = `20 包/盒`;
  } else {
    // Change to English
    green_packs.textContent = '20 packs/box';
  }

  const green_g = document.getElementById('green_g');

  // Check the current language
  if (green_g.textContent.trim() === '4g / pack') {
    // Change to Chinese
    green_g.textContent = `每包淨重4g  `;
  } else {
    // Change to English
    green_g.textContent = '4g / pack';
  }

  const four_ing = document.getElementById('four_ing');

  // Check the current language
  if (four_ing.textContent.trim() === 'Four season tea leaves') {
    // Change to Chinese
    four_ing.textContent = `四季春茶葉`;
  } else {
    // Change to English
    four_ing.textContent = 'Four season tea leaves';
  }

  const four_ing1 = document.getElementById('four_ing1');

  // Check the current language
  if (four_ing1.textContent.trim() === 'Dried Goji berries') {
    // Change to Chinese
    four_ing1.textContent = `枸杞子`;
  } else {
    // Change to English
    four_ing1.textContent = 'Dried Goji berries';
  }

  const four_caff = document.getElementById('four_caff');

  // Check the current language
  if (four_caff.textContent.trim() === 'Caffeine: 21 mg/8oz') {
    // Change to Chinese
    four_caff.textContent = `咖啡因含量: 7毫克/100mL`;
  } else {
    // Change to English
    four_caff.textContent = 'Caffeine: 21 mg/8oz';
  }

  const four_theanine = document.getElementById('four_theanine');

  // Check the current language
  if (four_theanine.textContent.trim() === 'L-Theanine: 4.86 mg/cup') {
    // Change to Chinese
    four_theanine.textContent = `茶胺酸含量: 4.86毫克/杯`;
  } else {
    // Change to English
    four_theanine.textContent = 'L-Theanine: 4.86 mg/cup';
  }

  const four_packs = document.getElementById('four_packs');

  // Check the current language
  if (four_packs.textContent.trim() === '20 packs/box') {
    // Change to Chinese
    four_packs.textContent = `20 包/盒`;
  } else {
    // Change to English
    four_packs.textContent = '20 packs/box';
  }

  const four_g = document.getElementById('four_g');

  // Check the current language
  if (four_g.textContent.trim() === '4g / pack') {
    // Change to Chinese
    four_g.textContent = `每包淨重4g  `;
  } else {
    // Change to English
    four_g.textContent = '4g / pack';
  }

  const oolongbuy = document.getElementById('oolongbuy');

  // Check the current language
  if (oolongbuy.textContent.trim() === 'Buy now') {
    // Change to Chinese
    oolongbuy.textContent = `立即購買`;
  } else {
    // Change to English
    oolongbuy.textContent = 'Buy now';
  }

  const blackbuy = document.getElementById('blackbuy');

  // Check the current language
  if (blackbuy.textContent.trim() === 'Buy now') {
    // Change to Chinese
    blackbuy.textContent = `立即購買`;
  } else {
    // Change to English
    blackbuy.textContent = 'Buy now';
  }

  const greenbuy = document.getElementById('greenbuy');

  // Check the current language
  if (greenbuy.textContent.trim() === 'Buy now') {
    // Change to Chinese
    greenbuy.textContent = `立即購買`;
  } else {
    // Change to English
    greenbuy.textContent = 'Buy now';
  }

  const fourbuy = document.getElementById('fourbuy');

  // Check the current language
  if (fourbuy.textContent.trim() === 'Buy now') {
    // Change to Chinese
    fourbuy.textContent = `立即購買`;
  } else {
    // Change to English
    fourbuy.textContent = 'Buy now';
  }

  const prod_reminder_text = document.getElementById('prod_reminder_text');

  // Check the current language
  if (
    prod_reminder_text.textContent.trim().replace(/\s/g, '') ===
    '*CaffeineandL-theanineforreferenceonly.Maydifferbasedonbrew.'
  ) {
    // Change to Chinese
    prod_reminder_text.textContent = `*咖啡因及茶胺酸數據僅供參考, 實際數據會因沖泡方式有所不同`;
  } else {
    // Change to English
    prod_reminder_text.textContent =
      '*Caffeine and L-theanine for reference only. May differ based on brew.';
  }

  const hot = document.getElementById('hot');

  // Check the current language
  if (hot.textContent.trim() === 'Hot') {
    // Change to Chinese
    hot.textContent = `熱泡`;
  } else {
    // Change to English
    hot.textContent = 'Hot';
  }

  const hot_step1 = document.getElementById('hot_step1');

  // Check the current language
  if (hot_step1.textContent.trim() === 'Add 250mL of water') {
    // Change to Chinese
    hot_step1.textContent = `取一個茶包置於杯中`;
  } else {
    // Change to English
    hot_step1.textContent = 'Add 250mL of water';
  }

  const ion_icon = document.getElementById('watericon');

  // Check the current language
  if (ion_icon.name === 'water-outline') {
    // Change to Chinese
    ion_icon.setAttribute('name', 'leaf-outline');
  } else {
    // Change to English
    ion_icon.setAttribute('name', 'water-outline');
  }

  const ion_icon1 = document.getElementById('thermoicon');

  // Check the current language
  if (ion_icon1.name === 'thermometer-outline') {
    // Change to Chinese
    ion_icon1.setAttribute('name', 'water-outline');
  } else {
    // Change to English
    ion_icon1.setAttribute('name', 'thermometer-outline');
  }

  const hot_step2 = document.getElementById('hot_step2');

  // Check the current language
  if (hot_step2.textContent.trim() === 'Steep after water boils') {
    // Change to Chinese
    hot_step2.textContent = `倒入250mL的熱水`;
  } else {
    // Change to English
    hot_step2.textContent = 'Steep after water boils';
  }

  const hot_step3 = document.getElementById('hot_step3');

  // Check the current language
  if (hot_step3.textContent.trim() === 'Wait 30 seconds - 1 minute') {
    // Change to Chinese
    hot_step3.textContent = `靜置30 - 60秒`;
  } else {
    // Change to English
    hot_step3.textContent = 'Wait 30 seconds - 1 minute';
  }

  const cold = document.getElementById('cold');

  // Check the current language
  if (cold.textContent.trim() === 'Cold') {
    // Change to Chinese
    cold.textContent = `冷泡`;
  } else {
    // Change to English
    cold.textContent = 'Cold';
  }

  const cold_step1 = document.getElementById('cold_step1');

  // Check the current language
  if (cold_step1.textContent.trim() === 'Drop 1 or 2 packs in water bottle') {
    // Change to Chinese
    cold_step1.textContent = `取1-2個茶包置於水瓶中`;
  } else {
    // Change to English
    cold_step1.textContent = 'Drop 1 or 2 packs in water bottle';
  }

  const cold_step2 = document.getElementById('cold_step2');

  // Check the current language
  if (cold_step2.textContent.trim() === '350mL of water') {
    // Change to Chinese
    cold_step2.textContent = `倒入350mL的冷水`;
  } else {
    // Change to English
    cold_step2.textContent = '350mL of water';
  }

  const cold_step3 = document.getElementById('cold_step3');

  // Check the current language
  if (cold_step3.textContent.trim() === 'Shake for 1 - 3 mins') {
    // Change to Chinese
    cold_step3.textContent = `手搖1 - 3分鐘`;
  } else {
    // Change to English
    cold_step3.textContent = 'Shake for 1 - 3 mins';
  }

  const cta_heading = document.getElementById('cta_heading');

  // Check the current language
  if (
    cta_heading.textContent.trim() === 'Sign up to get notified on discounts!'
  ) {
    // Change to Chinese
    cta_heading.textContent = `註冊以獲取折扣通知!`;
  } else {
    // Change to English
    cta_heading.textContent = 'Sign up to get notified on discounts!';
  }

  const cta_content = document.getElementById('cta_content');

  // Check the current language
  if (
    cta_content.textContent.trim().replace(/\s/g, '') ===
    'Gethealthynowandtryitout!Signuphereandwewillnotifyyouwheneverwehavediscountpromotionsandgiveaways.Freecouponforimmediatesign-up.'
  ) {
    // Change to Chinese
    cta_content.textContent = `想知道專注的秘密， 就喝Enoz! 立即註冊可以獲得折扣優惠碼， 隨時收到通知最新優惠方案及折扣訊息`;
  } else {
    // Change to English
    cta_content.textContent =
      'Get healthy now and try it out! Sign up here and we will notify you whenever we have discount promotions and giveaways. Free coupon for immediate sign-up.';
  }

  const input_name = document.getElementById('input_name');

  // Check the current language
  if (input_name.textContent.trim() === 'Full Name') {
    // Change to Chinese
    input_name.textContent = `姓名`;
  } else {
    // Change to English
    input_name.textContent = 'Full Name';
  }

  const cta_hear = document.getElementById('cta_hear');

  // Check the current language
  if (cta_hear.textContent.trim() === 'Where did you hear about us?') {
    // Change to Chinese
    cta_hear.textContent = `從哪裡知道我們`;
  } else {
    // Change to English
    cta_hear.textContent = 'Where did you hear about us?';
  }

  const option = document.getElementById('option');

  // Check the current language
  if (option.textContent.trim() === 'Please choose an option') {
    // Change to Chinese
    option.textContent = `請選擇`;
  } else {
    // Change to English
    option.textContent = 'Please choose an option';
  }

  const signup = document.getElementById('signup');

  // Check the current language
  if (signup.textContent.trim() === 'Sign up now') {
    // Change to Chinese
    signup.textContent = `立即註冊`;
  } else {
    // Change to English
    signup.textContent = 'Sign up now';
  }
}
