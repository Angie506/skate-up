-- Seed data for testing
-- This script adds sample chat threads and messages to your database

-- Insert sample threads
INSERT INTO threads (id, title, created_at) VALUES
  ('11111111-1111-1111-1111-111111111111', 'Show me the best skating routes near Dokk1?', '2025-10-01 10:00:00+00'),
  ('22222222-2222-2222-2222-222222222222', 'What are the best pizza toppings?', '2025-10-01 11:30:00+00'),
  ('33333333-3333-3333-3333-333333333333', 'Will it rain in Aarhus tonight?', '2025-10-02 09:15:00+00'),
  ('44444444-4444-4444-4444-444444444444', 'Help me create a morning routine', '2025-10-02 14:20:00+00'),
  ('55555555-5555-5555-5555-555555555555', 'Where can I skate when it\'s windy?', '2025-10-03 08:45:00+00'),
  ('66666666-6666-6666-6666-666666666666', 'Why is the sky blue?', '2025-10-03 13:10:00+00'),
  ('77777777-7777-7777-7777-777777777777', 'Find a route with smooth pavement?', '2025-10-04 07:30:00+00'),
  ('88888888-8888-8888-8888-888888888888', 'What''s the meaning of life?', '2025-10-04 16:00:00+00'),
  ('99999999-9999-9999-9999-999999999999', 'Suggest a sunset skating route', '2025-10-05 10:25:00+00'),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'What''s a healthy dinner idea?', '2025-10-05 12:40:00+00');

-- Insert messages for thread: "How to lepsql -h <your-supabase-db-host> -U postgres -d postgres -f supabase/seed.sqlarn programming?"
INSERT INTO messages (thread_id, type, content, created_at) VALUES
  ('11111111-1111-1111-1111-111111111111', 'user', 'Show me the best skating routes near Dokk1?', '2025-10-01 10:00:00+00'),
  ('11111111-1111-1111-1111-111111111111', 'bot', 'Here are a few great skating options near Dokk1:\n\n1) Dokk1 Waterfront Promenade — a flat, smooth 3.2 km loop right by the harbor, ideal for beginners and steady cruising.\n2) Aarhus Ø Promenade to Den Permanente — ~5 km, scenic sea views and wide asphalt paths (watch for pedestrians at the boardwalk sections).\n3) Riis Skov Lakeside Path — ~4 km, tree-lined and sheltered with consistently good pavement.\n\nTell me which one you want more details for (distance, difficulty, or a GPX), and I\'ll plan it for you.', '2025-10-01 10:00:15+00'),
  ('11111111-1111-1111-1111-111111111111', 'user', 'Which route is best for beginners?', '2025-10-01 10:01:30+00'),
  ('11111111-1111-1111-1111-111111111111', 'bot', 'The Dokk1 Waterfront Promenade is the best for beginners: it\'s flat, wide, and has smooth asphalt with minimal elevation change. Start with one lap (about 3 km) and increase distance as you feel comfortable. Would you like turn-by-turn directions or a downloadable GPX?', '2025-10-01 10:01:45+00');

-- Insert messages for thread: "What are the best pizza toppings?"
INSERT INTO messages (thread_id, type, content, created_at) VALUES
  ('22222222-2222-2222-2222-222222222222', 'user', 'What are the best pizza toppings?', '2025-10-01 11:30:00+00'),
  ('22222222-2222-2222-2222-222222222222', 'bot', 'Pizza toppings are all about personal preference! Classic combinations include Margherita (tomato, mozzarella, basil), Pepperoni (the most popular in the US), Hawaiian (ham and pineapple - controversial but beloved), and BBQ Chicken (tangy and savory). For vegetarians, try mushrooms, bell peppers, olives, and red onions.', '2025-10-01 11:30:12+00'),
  ('22222222-2222-2222-2222-222222222222', 'user', 'Is pineapple on pizza really that controversial?', '2025-10-01 11:32:00+00'),
  ('22222222-2222-2222-2222-222222222222', 'bot', 'Yes! Hawaiian pizza divides people worldwide. Some love the sweet-savory combo, while others consider it pizza heresy. It was actually invented in Canada in 1962. My advice? Try it yourself and decide - food preferences are personal!', '2025-10-01 11:32:18+00');

-- Insert messages for thread: "Can you explain quantum physics?"
INSERT INTO messages (thread_id, type, content, created_at) VALUES
  ('33333333-3333-3333-3333-333333333333', 'user', 'Will it rain in Aarhus tonight?', '2025-10-02 09:15:00+00'),
  ('33333333-3333-3333-3333-333333333333', 'bot', 'I don\'t have live weather here in the seed data, but here\'s how to check and what to expect: consult DMI or a local forecast (Open-Meteo/Met.no) for up-to-date radar. Typically in this season there\'s a chance of light showers overnight — if you\'re planning to skate, bring a lightweight waterproof layer and avoid low-lying coastal paths if the wind picks up. Want me to fetch a live forecast for tonight (if the app is connected)?', '2025-10-02 09:15:20+00'),
  ('33333333-3333-3333-3333-333333333333', 'user', 'If it might rain, when is the best time to skate tonight?', '2025-10-02 09:17:00+00'),
  ('33333333-3333-3333-3333-333333333333', 'bot', 'If showers are likely, aim for the earlier evening hours before midnight — many precipitation models show the heaviest probability later at night. Another option is to pick a sheltered route (under bridges or inside parks) or a covered indoor skatepark. Would you like recommended sheltered routes near your area?', '2025-10-02 09:17:25+00');

-- Insert messages for thread: "Help me create a morning routine"
INSERT INTO messages (thread_id, type, content, created_at) VALUES
  ('44444444-4444-4444-4444-444444444444', 'user', 'Help me create a morning routine', '2025-10-02 14:20:00+00'),
  ('44444444-4444-4444-4444-444444444444', 'bot', 'A great morning routine sets the tone for your day! Here''s a simple framework: 1) Wake up at a consistent time, 2) Hydrate with a glass of water, 3) Move your body (stretch, yoga, or quick workout), 4) Eat a nutritious breakfast, 5) Review your goals or plan your day, 6) Do something you enjoy (read, meditate, etc.). Start small and build up gradually!', '2025-10-02 14:20:18+00'),
  ('44444444-4444-4444-4444-444444444444', 'user', 'How long should my morning routine be?', '2025-10-02 14:22:00+00'),
  ('44444444-4444-4444-4444-444444444444', 'bot', 'Start with 15-30 minutes if you''re new to this. As it becomes a habit, you can extend it to 60-90 minutes if you enjoy it. The key is consistency over duration - a short routine you do every day beats a long one you skip frequently.', '2025-10-02 14:22:15+00');

-- Insert messages for thread: "What should I do this weekend?"
INSERT INTO messages (thread_id, type, content, created_at) VALUES
  ('55555555-5555-5555-5555-555555555555', 'user', 'Where can I skate when it\'s windy?', '2025-10-03 08:45:00+00'),
  ('55555555-5555-5555-5555-555555555555', 'bot', 'When it\'s windy, look for sheltered or leeward spots and indoor options:\n\n• Indoor skateparks (check local listings) — best if wind is strong.\n• Park underpasses and river paths (e.g., sheltered sections along the river) — blocked from crosswinds.\n• Tree-lined paths or streets with buildings on the windward side (they create a windbreak).\n• Coastal harbours with enclosed promenades (less exposed than open beaches).\n\nTell me your location and I\'ll suggest sheltered routes nearby.', '2025-10-03 08:45:15+00');

-- Insert messages for thread: "Why is the sky blue?"
INSERT INTO messages (thread_id, type, content, created_at) VALUES
  ('66666666-6666-6666-6666-666666666666', 'user', 'Why is the sky blue?', '2025-10-03 13:10:00+00'),
  ('66666666-6666-6666-6666-666666666666', 'bot', 'The sky appears blue due to a phenomenon called Rayleigh scattering. Sunlight contains all colors of the rainbow. As it passes through Earth''s atmosphere, it collides with gas molecules. Blue light has a shorter wavelength and gets scattered more than other colors, spreading across the sky. That''s why we see blue when we look up! During sunrise and sunset, the light travels through more atmosphere, scattering the blue away and leaving beautiful reds and oranges.', '2025-10-03 13:10:20+00');

-- Insert messages for thread: "How do I learn a new language?"
INSERT INTO messages (thread_id, type, content, created_at) VALUES
  ('77777777-7777-7777-7777-777777777777', 'user', 'Find a route with smooth pavement?', '2025-10-04 07:30:00+00'),
  ('77777777-7777-7777-7777-777777777777', 'bot', 'Look for dedicated bike paths, promenades, and tarmac park loops — these usually have the smoothest surfaces. Nearby examples: Havnepromenaden (Aarhus Harbour), the Riis Skov lakeside path, and the University campus loop. When searching routes, filter for "asphalt" or "bike path" surface types and avoid cobblestone or gravel. Would you like me to find the closest smooth route to your location?', '2025-10-04 07:30:22+00'),
  ('77777777-7777-7777-7777-777777777777', 'user', 'Can you find one near me with minimal bumps?', '2025-10-04 07:32:00+00'),
  ('77777777-7777-7777-7777-777777777777', 'bot', 'Sure — I can search for routes with predominantly asphalt surfaces and low elevation change. If you share your location or allow location access, I\'ll return a ranked list (distance, surface rating, and estimated time). Want me to search now?', '2025-10-04 07:32:20+00');

-- Insert messages for thread: "What's the meaning of life?"
INSERT INTO messages (thread_id, type, content, created_at) VALUES
  ('88888888-8888-8888-8888-888888888888', 'user', 'What''s the meaning of life?', '2025-10-04 16:00:00+00'),
  ('88888888-8888-8888-8888-888888888888', 'bot', 'That''s one of humanity''s deepest questions! Different philosophies offer different answers: some say it''s to seek happiness and reduce suffering, others say it''s to form meaningful connections with others, create something lasting, learn and grow, or find your own purpose. Perhaps the meaning isn''t universal but personal - something each person discovers through living, reflecting, and contributing in their own unique way.', '2025-10-04 16:00:25+00'),
  ('88888888-8888-8888-8888-888888888888', 'user', 'That''s pretty philosophical!', '2025-10-04 16:02:00+00'),
  ('88888888-8888-8888-8888-888888888888', 'bot', 'It is! But don''t let the weight of the question overwhelm you. Sometimes the meaning of life is simply enjoying a good cup of coffee, laughing with friends, or completing a challenging project. The big picture emerges from these small, meaningful moments.', '2025-10-04 16:02:15+00');

-- Insert messages for thread: "Tell me a funny joke"
INSERT INTO messages (thread_id, type, content, created_at) VALUES
  ('99999999-9999-9999-9999-999999999999', 'user', 'Suggest a sunset skating route', '2025-10-05 10:25:00+00'),
  ('99999999-9999-9999-9999-999999999999', 'bot', 'Try this sunset-friendly route: start at Dokk1, skate east along the Harbour Promenade toward Aarhus Ø, follow the waterfront promenade to the pier, then continue south along the coastal path near Den Permanente. Total ~6 km – flat and scenic with excellent sunset views over the water. Aim to start about 30–45 minutes before sunset for the best light. Would you like a GPX or step-by-step directions?', '2025-10-05 10:25:05+00'),
  ('99999999-9999-9999-9999-999999999999', 'user', 'Can you give me the GPX?', '2025-10-05 10:25:30+00'),
  ('99999999-9999-9999-9999-999999999999', 'bot', 'Absolutely — I can export that route as a GPX file you can download or load into your phone. Do you want it optimized for a relaxed cruise or a faster pace?', '2025-10-05 10:25:35+00');

-- Insert messages for thread: "What's a healthy dinner idea?"
INSERT INTO messages (thread_id, type, content, created_at) VALUES
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'user', 'What''s a healthy dinner idea?', '2025-10-05 12:40:00+00'),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'bot', 'Here''s a simple, healthy dinner: Grilled salmon with roasted vegetables and quinoa. Season the salmon with lemon, garlic, and herbs, roast colorful veggies (broccoli, bell peppers, carrots) with olive oil, and serve over quinoa. It''s packed with protein, healthy fats, and fiber. Takes about 30 minutes and is delicious!', '2025-10-05 12:40:16+00'),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'user', 'What if I don''t like fish?', '2025-10-05 12:42:00+00'),
  ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'bot', 'No problem! Try chicken breast, tofu, or chickpeas instead. A chickpea curry with spinach over brown rice is fantastic - high in protein, filling, and full of flavor. You can also make a chicken stir-fry with lots of colorful vegetables and serve it with cauliflower rice for a low-carb option.', '2025-10-05 12:42:18+00');
