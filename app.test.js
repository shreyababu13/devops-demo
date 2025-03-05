const request = require('supertest');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, DevOps!');
});

Test("GET / should return 'Hello, DevOps!'", async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, DevOps!');
});
