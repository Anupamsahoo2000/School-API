const School = require("../models/schoolModel");

// Function to calculate distance between two coordinates
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

// Add a new school
const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const school = await School.create({ name, address, latitude, longitude });
    res.status(201).json({ message: "School added successfully", school });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding school", error: error.message });
  }
};

// List schools sorted by proximity
const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ message: "Latitude and longitude are required" });
    }

    const schools = await School.findAll();
    const sortedSchools = schools
      .map((school) => ({
        ...school.toJSON(),
        distance: calculateDistance(
          latitude,
          longitude,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.status(200).json(sortedSchools);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching schools", error: error.message });
  }
};

module.exports = { addSchool, listSchools };
