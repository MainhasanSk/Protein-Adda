export interface MenuItem {
  id: string;
  name: string;
  price: number;
  badge?: string;
  badgeColor?: string;
  description: string;
  image: string;
  nutritionHighlights: string[];
  ingredients: string[];
  category: 'Bowls' | 'Sandwiches';
  isPopular?: boolean;
}

export interface JourneyMilestone {
  day: string;
  title: string;
  dateTag: string;
  description: string;
  reelUrl: string;
  embedId?: string;
  thumbnail: string;
  highlight: string;
}

export const siteConfig = {
  brand: {
    name: "PROTEIN ADDA",
    tagline: "Real Food. Real Nutrition. Real You.",
    founder: "Vishal",
    founderTitle: "Founder & Morning Food Hustler",
    foundedCity: "Guwahati, Assam",
    category: "Healthy Food / Protein-Rich Food / Quick Breakfast",
    statusBadge: "Open Daily 7:00 AM – 11:00 AM",
  },
  contact: {
    // WhatsApp number in international format without '+' or spaces for wa.me links
    // Configurable: Set to user's official contact number
    whatsappNumber: "919365538186", 
    displayPhone: "+91 93655 38186",
    instagramUrl: "https://www.instagram.com/proteinadda2026/",
    instagramHandle: "@proteinadda2026",
    location: {
      title: "PROTEIN ADDA",
      landmark: "AIDC Complex Office",
      road: "Zoo Road",
      city: "Guwahati, Assam",
      pincode: "781024",
      fullAddress: "PROTEIN ADDA, Zoo Road (Opposite AIDC Complex Office), Guwahati, Assam - 781024",
      operatingHours: "7:00 AM – 11:00 AM",
      operatingDays: "Monday to Sunday (All 7 Days)",
      googleMapsQuery: "https://www.google.com/maps/search/?api=1&query=AIDC+Complex+Zoo+Road+Guwahati+Assam",
      embedMapSrc: "https://maps.google.com/maps?q=AIDC%20Complex,%20Zoo%20Road,%20Guwahati,%20Assam&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  },
  menu: [
    {
      id: "high-protein-oats-bowl",
      name: "High Protein Oats Bowl",
      price: 99,
      badge: "CUSTOMER FAVOURITE",
      badgeColor: "bg-[#A6D63C] text-black",
      description: "A delicious, nutritious oats bowl with fruits, nuts, seeds and carefully selected ingredients for a satisfying start to your day.",
      image: "/brand/high-protein-oats-bowl.jpg",
      nutritionHighlights: ["Whey / Protein Infused", "Strawberries & Berries", "Peanut Butter Drizzle", "Chia, Pumpkin & Flax Seeds"],
      ingredients: [
        "Premium Rolled Oats",
        "Protein Whey / Nutrient Blend",
        "Fresh Red Strawberries & Blueberries",
        "Sliced Ripe Bananas",
        "Pure Natural Peanut Butter Drizzle",
        "Fresh Pomegranate Pearls",
        "Toasted Pumpkin & Sunflower Seeds",
        "Raw Organic Chia Seeds",
        "California Almonds & Golden Raisins",
        "100% Pure Honey"
      ],
      category: "Bowls",
      isPopular: true
    },
    {
      id: "classic-oats-bowl",
      name: "Classic Oats Bowl",
      price: 79,
      badge: "EVERYDAY FAVOURITE",
      badgeColor: "bg-[#D9AE56] text-black",
      description: "A wholesome oats bowl combined with delicious fruits and nutritious toppings for your everyday breakfast.",
      image: "/brand/classic-oats-bowl.jpg",
      nutritionHighlights: ["Fresh Sliced Bananas", "Almonds & Golden Raisins", "Pure Honey Touch", "Slow-release Carbs"],
      ingredients: [
        "Wholesome Rolled Oats",
        "Fresh Sliced Bananas",
        "Diced Crisp Apples",
        "Fresh Pomegranate Seeds",
        "Roasted California Almonds",
        "Golden Raisins (Kishmish)",
        "Pumpkin & Chia Seeds",
        "Natural Honey Touch"
      ],
      category: "Bowls",
      isPopular: false
    },
    {
      id: "healthy-sandwich",
      name: "Healthy Sandwich",
      price: 59,
      badge: "HEALTHY BITE",
      badgeColor: "bg-[#85B936] text-black",
      description: "A delicious sandwich packed with fresh vegetables and wholesome ingredients for a quick and satisfying bite.",
      image: "/brand/healthy-sandwich.jpg",
      nutritionHighlights: ["Seeded Multi-Grain Bread", "Fresh Crisp Greens", "Protein Paneer / Tofu Slice", "Zero Junk Mayo"],
      ingredients: [
        "Artisanal Seeded Multigrain Bread",
        "Fresh Protein Paneer / Cottage Cheese Slice",
        "Crisp Farm Cucumbers",
        "Juicy Fresh Red Tomatoes",
        "Crunchy Green Lettuce Leaves",
        "Homemade Crushed Black Pepper & Herb Dressing",
        "Zero Junk Light Mint Spread (No Trans-fat Mayo)"
      ],
      category: "Sandwiches",
      isPopular: false
    }
  ] as MenuItem[],
  journey: [
    {
      day: "Day 01",
      title: "The Beginning – From Stall to Vision",
      dateTag: "Day 1 of 1000",
      description: "Vishal sets up the roadside food cart on Zoo Road at 6:30 AM with fresh oats, fruits, and a determination to make healthy breakfast affordable for Guwahati.",
      reelUrl: "https://www.instagram.com/proteinadda2026/",
      thumbnail: "/brand/bowl-fresh-prep.jpg",
      highlight: "First bowl served to morning walkers"
    },
    {
      day: "Day 02",
      title: "Another Step Forward – Refining the Bowl",
      dateTag: "Day 2",
      description: "Listening to early customers, introducing organic honey, toasted pumpkin seeds, and establishing the exact high-protein morning ratio.",
      reelUrl: "https://www.instagram.com/proteinadda2026/",
      thumbnail: "/brand/high-protein-oats-bowl.jpg",
      highlight: "Sold out 30 minutes before closing"
    },
    {
      day: "Day 03",
      title: "Learning and Growing – Consistency Matters",
      dateTag: "Day 3",
      description: "Rain or shine, standing tall at Zoo Road. Vishal begins recording his daily startup journey videos to share the real hustle of building an ethical food venture.",
      reelUrl: "https://www.instagram.com/proteinadda2026/",
      thumbnail: "/brand/founder-vishal.jpg",
      highlight: "Documenting the entrepreneurial struggle"
    },
    {
      day: "Day 04+",
      title: "The Journey Continues – Building a Movement",
      dateTag: "Ongoing Daily",
      description: "From a roadside stall to a recognised healthy-food startup brand. Growing day by day with the love and support of Guwahati's fitness community.",
      reelUrl: "https://www.instagram.com/proteinadda2026/",
      thumbnail: "/brand/menu-poster.jpg",
      highlight: "Building Guwahati's healthy food revolution"
    }
  ] as JourneyMilestone[],
  features: [
    {
      title: "GOOD INGREDIENTS",
      description: "Fresh ingredients selected for everyday nutrition. Farm-fresh fruits, premium oats, real honey, and wholesome crunch in every bite.",
      icon: "Leaf",
      tag: "Pure & Natural"
    },
    {
      title: "NUTRITION FOCUSED",
      description: "Food options designed around healthy eating and protein-rich choices. Balanced macros to power workouts, busy offices, and student lives.",
      icon: "Dumbbell",
      tag: "High Protein"
    },
    {
      title: "MADE WITH CARE",
      description: "Every bowl and sandwich prepared fresh upon order with extreme hygiene, attention to detail, and genuine passion.",
      icon: "HeartHandshake",
      tag: "Stall-to-Soul"
    }
  ],
  benefits: [
    {
      title: "Affordable Healthy Food",
      description: "Wholesome nutritious meals starting at just ₹59. Eating clean should never be a luxury.",
      icon: "Wallet",
      metric: "Starting at ₹59"
    },
    {
      title: "Freshly Prepared Daily",
      description: "Made live every morning between 7 AM and 11 AM using fresh fruits, crisp greens, and zero preservatives.",
      icon: "Flame",
      metric: "100% Fresh Daily"
    },
    {
      title: "Nutrition-Focused Menu",
      description: "Curated combinations of complex carbs, clean protein, dietary fiber, and healthy seeds.",
      icon: "Sparkles",
      metric: "Macro-Balanced"
    },
    {
      title: "Convenient Morning Meals",
      description: "Quick grab-and-go packaging right on Zoo Road, ideal for morning joggers, gym-goers, and office commuters.",
      icon: "Clock",
      metric: "Ready in 3 Mins"
    }
  ]
};

export const getWhatsAppOrderLink = (productName?: string, price?: number) => {
  const phone = siteConfig.contact.whatsappNumber;
  let text = "";
  if (productName && price) {
    text = `Hello Protein Adda! 👋 I would like to order: *${productName}* (₹${price}). Please confirm availability for pickup at Zoo Road.`;
  } else {
    text = `Hello Protein Adda! 👋 I would like to explore your menu and place a morning breakfast order.`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
