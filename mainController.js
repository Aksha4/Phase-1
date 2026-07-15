exports.home = (req, res) => {
    res.json({
        message: "Week 2 API is running!"
    });
};

exports.about = (req, res) => {
    res.json({
        name: "Akshay",
        course: "Backend Development"
    });
};
exports.contact = (req, res) => {
    res.json({
        email: "akshay@example.com",
        phone: "1234567890"
    });
};