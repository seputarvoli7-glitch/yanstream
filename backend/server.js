const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        status: "YANSTREAM Backend Online"
    }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Server berjalan di port", PORT);
});
