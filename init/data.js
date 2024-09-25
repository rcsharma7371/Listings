let sampleData = [
        {
          title: "Seaside Escape Resort",
          description: "A tranquil beachfront resort with stunning ocean views and modern amenities.",
          image: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
          price: 220,
          location: "Miami",
          country: "USA"
        },
        {
          title: "Mountain View Lodge",
          description: "Nestled in the mountains, this lodge offers breathtaking views and cozy cabins.",
          image: "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 180,
          location: "Aspen",
          country: "USA"
        },
        {
          title: "City Lights Hotel",
          description: "A chic and modern hotel in the heart of the bustling city.",
          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 150,
          location: "New York City",
          country: "USA"
        },
        {
          title: "Safari Adventure Lodge",
          description: "Experience the wild in luxury at our safari lodge in the African savannah.",
          image: "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 320,
          location: "Nairobi",
          country: "Kenya"
        },
        {
          title: "Desert Oasis Hotel",
          description: "A peaceful retreat in the desert with private pools and spacious suites.",
          image: "https://images.unsplash.com/photo-1477120128765-a0528148fed2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 250,
          location: "Dubai",
          country: "UAE"
        },
        {
          title: "Tropical Paradise Resort",
          description: "A luxurious resort surrounded by lush tropical gardens and pristine beaches.",
          image: "https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 300,
          location: "Bora Bora",
          country: "French Polynesia"
        },
        {
          title: "Historic Castle Hotel",
          description: "Stay in a 14th-century castle with elegant rooms and picturesque views.",
          image: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 400,
          location: "Edinburgh",
          country: "Scotland"
        },
        {
          title: "Lakeside Inn",
          description: "A serene inn by the lake, perfect for relaxation and water activities.",
          image: "https://images.unsplash.com/photo-1504652517000-ae1068478c59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 160,
          location: "Lake Tahoe",
          country: "USA"
        },
        {
          title: "Countryside B&B",
          description: "A charming bed and breakfast in the countryside, offering a peaceful escape.",
          image: "https://images.unsplash.com/photo-1527974928470-b6f7acde7800?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          price: 100,
          location: "Cotswolds",
          country: "England"
        },
        // {
        //   title: "Modern Urban Hotel",
        //   description: "A sleek and stylish hotel with top-notch amenities in the city center.",
        //   image: "https://images.unsplash.com/photo-1662913296662-b97ada965f65?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 200,
        //   location: "Tokyo",
        //   country: "Japan"
        // },
        // {
        //   title: "Winter Wonderland Lodge",
        //   description: "A cozy lodge in a winter wonderland, ideal for skiing and snowboarding enthusiasts.",
        //   image: "https://images.unsplash.com/photo-1584962357104-92fa8abf7210?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 220,
        //   location: "Whistler",
        //   country: "Canada"
        // },
        // {
        //   title: "Island Escape Hotel",
        //   description: "A beautiful hotel on a secluded island, perfect for a peaceful getaway.",
        //   image: "https://plus.unsplash.com/premium_photo-1688069516535-357d3d4ef131?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 340,
        //   location: "Maldives",
        //   country: "Maldives"
        // },
        // {
        //   title: "Art Deco Boutique Hotel",
        //   description: "A stylish boutique hotel inspired by the elegance of the Art Deco era.",
        //   image: "https://images.unsplash.com/photo-1686700528216-75eeff23189b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 180,
        //   location: "Paris",
        //   country: "France"
        // },
        // {
        //   title: "Luxury Ski Chalet",
        //   description: "A luxurious ski chalet offering premium services and private hot tubs.",
        //   image: "https://images.unsplash.com/photo-1686700527513-295681d4938c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 450,
        //   location: "Zermatt",
        //   country: "Switzerland"
        // },
        // {
        //   title: "Eco-Friendly Retreat",
        //   description: "A sustainable and eco-friendly retreat in the middle of nature.",
        //   image: "https://images.unsplash.com/photo-1563900923746-dfeac844b69c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 190,
        //   location: "Costa Rica",
        //   country: "Costa Rica"
        // },
        // {
        //   title: "Secluded Beach Bungalows",
        //   description: "Private beach bungalows with direct access to pristine white sand beaches.",
        //   image: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 320,
        //   location: "Phuket",
        //   country: "Thailand"
        // },
        // {
        //   title: "Victorian Elegance Hotel",
        //   description: "A grand hotel offering Victorian-era charm and world-class service.",
        //   image: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 280,
        //   location: "London",
        //   country: "England"
        // },
        // {
        //   title: "Countryside Spa Resort",
        //   description: "A relaxing spa resort set in the tranquil countryside, offering wellness treatments.",
        //   image: "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 240,
        //   location: "Baden-Baden",
        //   country: "Germany"
        // },
        // {
        //   title: "Jungle Treehouse Hotel",
        //   description: "Stay in a unique treehouse surrounded by the dense jungle and exotic wildlife.",
        //   image: "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 300,
        //   location: "Ubud",
        //   country: "Indonesia"
        // },
        // {
        //   title: "Cliffside Boutique Hotel",
        //   description: "A cliffside boutique hotel with stunning panoramic views of the ocean.",
        //   image: "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 380,
        //   location: "Santorini",
        //   country: "Greece"
        // },
        // {
        //   title: "Alpine Meadows Lodge",
        //   description: "A rustic lodge located in an alpine meadow with hiking and skiing opportunities.",
        //   image: "https://plus.unsplash.com/premium_photo-1661963657305-f52dcaeef418?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 220,
        //   location: "Innsbruck",
        //   country: "Austria"
        // },
        // {
        //   title: "Urban Art Hotel",
        //   description: "A trendy hotel featuring contemporary art exhibits and vibrant decor.",
        //   image: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 160,
        //   location: "Berlin",
        //   country: "Germany"
        // },
        // {
        //   title: "Luxury Vineyard Resort",
        //   description: "A luxury resort located in a vineyard, offering wine tastings and gourmet dining.",
        //   image: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 350,
        //   location: "Napa Valley",
        //   country: "USA"
        // },
        // {
        //   title: "Historic Riverside Inn",
        //   description: "A charming inn by the river with historic charm and modern amenities.",
        //   image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 180,
        //   location: "Florence",
        //   country: "Italy"
        // },
        // {
        //   title: "Mediterranean Seaside Villa",
        //   description: "A luxurious villa overlooking the Mediterranean Sea with private pools and terraces.",
        //   image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 450,
        //   location: "Amalfi Coast",
        //   country: "Italy"
        // },
        // {
        //   title: "Elegant Palace Hotel",
        //   description: "Stay in a grand palace with opulent decor and world-class service.",
        //   image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 500,
        //   location: "Vienna",
        //   country: "Austria"
        // },
        // {
        //   title: "Island Luxury Resort",
        //   description: "A secluded island resort offering world-class luxury and stunning beach views.",
        //   image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 420,
        //   location: "Seychelles",
        //   country: "Seychelles"
        // },
        // {
        //   title: "Modern Business Hotel",
        //   description: "A contemporary hotel designed for business travelers with modern amenities.",
        //   image: "https://images.unsplash.com/photo-1504233529578-6d46baba6d34?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 210,
        //   location: "Singapore",
        //   country: "Singapore"
        // },
        // {
        //   title: "French Riviera Resort",
        //   description: "A glamorous resort with Mediterranean views and private yachts.",
        //   image: "https://plus.unsplash.com/premium_photo-1723491285855-f1035c4c703c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //   price: 480,
        //   location: "Nice",
        //   country: "France"
        // }
      ];

      module.exports = {data:sampleData};