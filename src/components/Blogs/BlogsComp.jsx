import BlogsCard from "./BlogsCard.jsx"; 
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";
const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "The 10 best places to visit in India",
    description: "India, a land of rich history, diverse cultures, and breathtaking landscapes, offers numerous travel destinations. Here are ten must-visit places in India that showcase its beauty and heritage:The Taj Mahal in Agra is one of the Seven Wonders of the World, a symbol of love and an architectural masterpiece. Jaipur, known as the Pink City, is famous for its historic forts, palaces, and vibrant markets, including the Hawa Mahal and Amer Fort. Varanasi, one of the oldest living cities in the world, is a spiritual hub with its sacred Ganges River ghats and mesmerizing evening aarti ceremonies. Goa is India’s beach paradise, known for its stunning coastline, vibrant nightlife, and Portuguese heritage. The Kerala Backwaters provide a tranquil escape with scenic houseboat cruises through lush greenery and peaceful waters. Ladakh in Jammu & Kashmir is a dream destination for adventure lovers, featuring breathtaking landscapes, high-altitude mountain passes, and serene monasteries.Ranthambore National Park in Rajasthan is one of the best places for wildlife enthusiasts, famous for its Bengal tigers and rich biodiversity. Mumbai, the financial capital of India, is home to Bollywood, the iconic Gateway of India, and the bustling Marine Drive. Rishikesh in Uttarakhand is a hub for yoga and spirituality and also offers thrilling adventure sports like river rafting and bungee jumping. Mysore in Karnataka is known for its grand Mysore Palace and vibrant Dasara festival, offering a glimpse into India’s royal past.Each of these destinations provides a unique experience, reflecting India's diverse culture, history, and natural beauty. Whether you seek history, adventure, or relaxation, India has something special for every traveler.",
    author: "John Don",
    date: "Aprill, 2020",
  },
  {
    id: 2,
    image: Img2,
    title: "Top Places to Visit in the US",
    description: "The United States, a vast and diverse country, offers countless travel destinations that cater to different interests. The Grand Canyon in Arizona is a breathtaking natural wonder with stunning landscapes and outdoor adventure opportunities. New York City, known as the city that never sleeps, boasts iconic landmarks such as Times Square, Central Park, and the Statue of LibertyYellowstone National Park, America’s first national park, is home to geysers, hot springs, and diverse wildlife. Los Angeles, the entertainment capital, features Hollywood, beautiful beaches, and a vibrant cultural scene. Washington, D.C., the nation’s capital, is rich in history, with must-visit sites like the White House, the National Mall, and Smithsonian museums. Las Vegas, a world-famous entertainment hub, is known for its dazzling casinos, nightlife, and live performances. Miami offers stunning beaches, Art Deco architecture, and a lively Latin American influence. San Francisco is famous for its Golden Gate Bridge, cable cars, and diverse neighborhoods like Chinatown and Fisherman’s Wharf.Chicago, the Windy City, is renowned for its skyline, deep-dish pizza, and cultural institutions such as the Art Institute of Chicago. Orlando, a paradise for theme park lovers, is home to Walt Disney World and Universal Studios. Each of these destinations offers a unique experience, showcasing the rich culture, history, and natural beauty of the United States. Whether you seek adventure, history, or entertainment, the US has something for every traveler.",
    author: "Tom Jay",
    date: "march,18, 2020",
  },
  {
    id: 3,
    image: Img3,
    title: "Top Places to Visit in the UK",
    description:
      "The United Kingdom is a country rich in history, culture, and natural beauty, offering travelers a variety of experiences. London, the capital, is a must-visit destination featuring iconic landmarks like Buckingham Palace, the Tower of London, the British Museum, and the London Eye. Edinburgh, the historic capital of Scotland, is famous for its stunning Edinburgh Castle, the Royal Mile, and the annual Edinburgh Festival. The Lake District, a UNESCO World Heritage site, boasts breathtaking landscapes, scenic lakes, and picturesque villages, making it a haven for nature lovers.Stonehenge, one of the world's most famous prehistoric monuments, is a fascinating site that continues to intrigue visitors with its mystery and significance. Bath, known for its Roman-built baths and stunning Georgian architecture, offers a glimpse into Britain’s ancient past and elegance.Oxford and Cambridge, home to two of the world’s most prestigious universities, offer visitors stunning architecture, rich history, and a classic academic atmosphere. The Cotswolds, with its charming villages, rolling countryside, and traditional English cottages, is perfect for those seeking a peaceful retreat.Liverpool, the birthplace of The Beatles, is a vibrant city with a rich maritime history, lively music scene, and cultural landmarks like the Royal Albert Dock. Cardiff, the capital of Wales, features the stunning Cardiff Castle, beautiful parks, and a thriving arts scene.Giant’s Causeway in Northern Ireland, a UNESCO World Heritage site, showcases an awe-inspiring natural landscape of unique hexagonal basalt columns formed by volcanic activity.Each of these destinations highlights the rich heritage, natural beauty, and vibrant culture of the UK, offering something special for every traveler.",
    author: "Jon Neth",
    date: "noavmber, 4, 2020",
  },
];

const BlogsComp = () => {
    return (
      <div className="">
        <div data-aos="fade-up" className='container'>
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our latest Blogs
                </h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {BlogsData.map((item, index) => (
                        <BlogsCard key={index} {...item} />
                    ))}
                </div>
            </div>
      </div>
    );
};

export default BlogsComp;