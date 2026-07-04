import "./Destination.css"
import DestinationData from "./DestinationData";

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the chance to explore new places in the world.</p>
            <DestinationData
            className = "first-des"
            heading = "Taal Volcano, Batangas"
            text = "One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike is moderately difficult and requires a good level of fitness."
            img1 = "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            img2 = "https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <DestinationData
            className = "first-des-reverse"
            heading = "Mt. Daguldul, Grand Canal"
            text = "Mt. Daguldul is a popular hiking destination located in San Juan, Batangas, Philippines. It is known for its scenic trails, lush greenery, and beautiful views of the surrounding mountains and coastline. The hike to the summit of Mt. Daguldul is relatively moderate, making it suitable for both beginners and experienced hikers. Along the way, hikers can enjoy the fresh air, encounter various flora and fauna, and take in the breathtaking vistas of the Batangas landscape. The summit offers panoramic views of the West Philippine Sea and nearby islands, making it a rewarding experience for nature enthusiasts and adventure seekers alike."
            img1 = "https://plus.unsplash.com/premium_photo-1673264933048-3bd3f5b86f9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
            img2 = "https://images.unsplash.com/photo-1770099825245-1443c0c16ed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZyZWUlMjBpbWFnZXMlMjBncmFuZCUyMGNhbmFsfGVufDB8fDB8fHww"
            />
        </div>
    )
}

export default Destination;