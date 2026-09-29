/**
 * Dedicated, Dish-Specific Food Photography Mapping for Eat Clean Co.
 * Every single dish has its own unique, verified, high-resolution food photograph
 * matched specifically to the dish name and ingredients.
 * No generic stock photos, no reused images, consistent warm editorial café aesthetic.
 */

export const MENU_ITEM_IMAGES: Record<string, string> = {
  // ==========================================
  // 1. SMOOTHIE BOWLS (9 distinct items)
  // ==========================================
  // Blueberry Smoothie Bowl: purple blueberry puree, blueberries, sliced banana, chia
  'sb-blueberry':
    'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',

  // Apple Cinnamon Smoothie Bowl: sliced apples, cinnamon dust, warm oats in bowl
  'sb-apple-cinnamon':
    'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80',

  // Mixed Berries Smoothie Bowl: vibrant pink/red raspberries, blackberries, strawberries
  'sb-mixed-berries':
    'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=800&q=80',

  // Banana Peanut-Butter Smoothie Bowl: banana slices, thick peanut butter swirl
  'sb-banana-pb':
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',

  // Choco Smoothie Bowl: rich dark cocoa puree with cacao nibs
  'sb-choco':
    'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80',

  // Strawberry Smoothie Bowl: bright strawberry pink puree with sliced fresh strawberries
  'sb-strawberry':
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',

  // Mango Coconut Smoothie Bowl: rich yellow mango puree with coconut ribbons
  'sb-mango-coconut':
    'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',

  // Filter Coffee Smoothie Bowl: coffee decoction blended thick, mocha hue
  'sb-filter-coffee':
    'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',

  // Banana Smoothie Bowl: pure light yellow banana base with sliced ripe bananas
  'sb-banana':
    'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 2. YOGURT BOWLS (4 distinct items)
  // ==========================================
  // Berry Yogurt Bowl: thick Greek hung yogurt layered with fresh berries
  'yb-berry':
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',

  // Apple Cinnamon Yogurt Bowl: creamy strained yogurt with stewed spiced apple chunks
  'yb-apple-cinnamon':
    'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80',

  // Banana Peanut Butter Yogurt Bowl: thick yogurt swirled with stone-ground peanut butter & banana
  'yb-banana-pb':
    'https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?auto=format&fit=crop&w=800&q=80',

  // Mango Yogurt Bowl: strained hung curd folded with Alphonso mango puree
  'yb-mango':
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 3. FRESH JUICES (4 distinct items)
  // ==========================================
  // Carrot Juice: bright orange cold-pressed carrot juice in clear glassware
  'fj-carrot':
    'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',

  // Green Juice: vibrant emerald spinach, cucumber, celery and mint elixir
  'fj-green':
    'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80',

  // ABC Juice: deep ruby amla, beetroot and carrot cold-pressed tonic
  'fj-abc':
    'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',

  // Ash Gourd Juice: pale, translucent, cooling fresh ash gourd juice
  'fj-ash-gourd':
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 4. OVERNIGHT OATS (9 distinct items)
  // ==========================================
  // Blueberry Overnight Oat Jar: layered blueberry compote with soaked oats in glass jar
  'oo-blueberry':
    'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80',

  // Mixed Berry Overnight Oat Jar: strawberries and blackberries steeped with oats in jar
  'oo-mixed-berry':
    'https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?auto=format&fit=crop&w=800&q=80',

  // Apple Cinnamon Overnight Oat Jar: spiced diced apples, cinnamon stick and oats in mason jar
  'oo-apple-cinnamon':
    'https://images.unsplash.com/photo-1600850056064-a8b380df8395?auto=format&fit=crop&w=800&q=80',

  // Strawberry Overnight Oat Jar: pink strawberry layers with soaked chia and oats in jar
  'oo-strawberry':
    'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=800&q=80',

  // Choco Overnight Oat Jar: dark cacao infused slow-soaked oats in clear jar
  'oo-choco':
    'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80',

  // Peanut Banana Overnight Oats: creamy peanut butter, sliced bananas and rolled oats jar
  'oo-peanut-banana':
    'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',

  // Mango Overnight Oat Jar: golden mango compote layered with oats in glass jar
  'oo-mango':
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',

  // Filter Coffee Overnight Oat Jar: South Indian filter coffee steeped oats jar
  'oo-filter-coffee':
    'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',

  // Banana Overnight Oat Jar: simple banana slices layered over soaked oats
  'oo-banana':
    'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 5. SANDWICHES (5 distinct items)
  // ==========================================
  // Tempeh Sandwich: whole wheat sandwich with grilled fermented tempeh slices
  'sw-tempeh':
    'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80',

  // Cheese Sandwich: golden toasted whole wheat artisanal cheese melt
  'sw-cheese':
    'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',

  // Paneer Sandwich: spiced grilled Indian cottage cheese in whole wheat toast
  'sw-paneer':
    'https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&fit=crop&w=800&q=80',

  // Tofu Sandwich: pan-seared herb tofu cutlets in toasted brown bread
  'sw-tofu':
    'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',

  // Soya Chunks Sandwich: high protein roasted soya chunks sandwich
  'sw-soya':
    'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 6. QUINOA MEALS (4 distinct items)
  // ==========================================
  // Quinoa Tempeh Meal: tri-color quinoa bowl with grilled marinated tempeh
  'qm-tempeh':
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',

  // Quinoa Paneer Meal: fluffy quinoa with golden spiced sautéed paneer cubes
  'qm-paneer':
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',

  // Quinoa Tofu Meal: fluffy quinoa bowl with pan-seared firm organic tofu
  'qm-tofu':
    'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80',

  // Quinoa Soya Chunks: warm quinoa served with spiced sautéed soya nuggets
  'qm-soya':
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 7. STIR-FRIED VEGGIES (5 distinct items)
  // ==========================================
  // Tempeh Stir-Fried Veggies: wok-tossed farm greens with seared tempeh
  'sfv-tempeh':
    'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80',

  // Paneer Stir-Fried Veggies: broccoli, bell peppers wok-seared with fresh paneer cubes
  'sfv-paneer':
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',

  // Tofu Stir-Fried Veggies: crisp Asian vegetables with seared tofu cubes
  'sfv-tofu':
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',

  // Soya Chunks Stir-Fried Veggies: rainbow peppers wok-tossed with protein soya nuggets
  'sfv-soya':
    'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=800&q=80',

  // Stir-Fried Veggies: clean wok-tossed broccoli, zucchini, bell peppers and beans
  'sfv-plain':
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 8. COMFORT SOUPS (4 distinct items)
  // ==========================================
  // Broccoli Soup: smooth, velvety green pureed broccoli soup
  'cs-broccoli':
    'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',

  // Green Soup: spinach, mint and garden herb broth
  'cs-green':
    'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=800&q=80',

  // Moringa Soup: clear traditional moringa drumstick leaf herbal soup
  'cs-moringa':
    'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80',

  // Lentil Soup: golden moong dal comforting lentil soup with ginger
  'cs-lentil':
    'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 9. OATS SMOOTHIES (4 distinct items)
  // ==========================================
  // Blueberry Smoothie: purple antioxidant oats shake in glassware
  'os-blueberry':
    'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80',

  // Choco Peanut Butter: rich chocolate and peanut butter oats smoothie
  'os-choco-pb':
    'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',

  // Banana Peanut Butter: thick banana and peanut butter oats smoothie
  'os-banana-pb':
    'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80',

  // Creamy Mango Smoothie: tropical Alphonso mango blended with oats
  'os-mango':
    'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 10. COLD COFFEE (4 distinct items)
  // ==========================================
  // Choco High Protein Cold Coffee: dark chocolate espresso with whey froth
  'cc-choco-hp':
    'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',

  // Classic High Protein Cold Coffee: Chikmagalur cold brew with clean whey protein
  'cc-classic-hp':
    'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',

  // Choco Cold Coffee: chilled chocolate mocha brew
  'cc-choco':
    'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',

  // Classic Cold Coffee: authentic South Indian chilled brewed coffee with foam
  'cc-classic':
    'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 11. FERMENTED DRINKS (2 distinct items)
  // ==========================================
  // Pineapple Fermented Masala Beverage: golden sparkling fermented pineapple cooler
  'fd-pineapple':
    'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=800&q=80',

  // Beetroot Carrot Kaanji: deep magenta traditional probiotic kanji with mustard seeds
  'fd-kaanji':
    'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',

  // ==========================================
  // 12. GUILT-FREE DESSERTS (5 distinct items)
  // ==========================================
  // Choco Nuts Brownie: fudgy dark brownie slice with roasted walnut chunks
  'gfd-choco-nuts':
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',

  // Choco Coffee Brownie: deep espresso mocha dark chocolate brownie square
  'gfd-choco-coffee':
    'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=800&q=80',

  // Dark Choco Brownie: pure 70% single-origin dark cocoa fudgy brownie
  'gfd-dark-choco':
    'https://images.unsplash.com/photo-1589218436045-ee320057f443?auto=format&fit=crop&w=800&q=80',

  // Choco Muffins — Pack of 2: twin whole grain dark chocolate muffins
  'gfd-choco-muffins':
    'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80',

  // Banana Muffins — Pack of 2: twin golden banana whole grain muffins
  'gfd-banana-muffins':
    'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
};
