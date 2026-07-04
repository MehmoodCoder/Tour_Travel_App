import "./Trip.css"
import TripData from "./TripData";

function Trip(props) {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="trip-card-container">
                <TripData
                image = "https://images.unsplash.com/photo-1770099825245-1443c0c16ed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZyZWUlMjBpbWFnZXMlMjBncmFuZCUyMGNhbmFsfGVufDB8fDB8fHww"
                heading = "Grand Canyon, USA"
                text = "The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. It is one of the most famous natural landmarks in the world, known for its immense size and stunning geological formations. The Grand Canyon is approximately 277 miles (446 kilometers) long, up to 18 miles (29 kilometers) wide, and over a mile (1.6 kilometers) deep. It offers breathtaking views, hiking trails, and opportunities for outdoor activities such as rafting and camping."
                />
                <TripData
                image = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                heading = "Machu Picchu, Peru"
                text = "Machu Picchu is an ancient Incan citadel located in the Andes Mountains of Peru. It is renowned for its archaeological significance, stunning architecture, and breathtaking panoramic views. Built in the 15th century, Machu Picchu served as a royal estate and religious site for the Inca civilization. The site features well-preserved stone structures, terraces, and temples that showcase the advanced engineering skills of the Incas. Machu Picchu is a UNESCO World Heritage Site and attracts visitors from around the world who come to explore its rich history and natural beauty."
                />
                <TripData
                image = "https://plus.unsplash.com/premium_photo-1698430566772-aaf6d1b8a37a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlZSUyMGltYWdlcyUyMG9mJTIwbmF0dXJlJTIwbW9udGFpbnN8ZW58MHx8MHx8fDA%3D"
                heading = "Barrier Reef, Australia"
                text = "The Great Barrier Reef is the world's largest coral reef system, located off the coast of Queensland, Australia. It is renowned for its incredible biodiversity, vibrant coral formations, and crystal-clear waters. The reef stretches over 2,300 kilometers (1,400 miles) and is home to a vast array of marine life, including colorful fish, sea turtles, sharks, and dolphins. The Great Barrier Reef is a UNESCO World Heritage Site and attracts snorkelers, divers, and nature enthusiasts from around the globe who come to explore its underwater wonders."
                />
            </div>
        </div>
    )
}

export default Trip;