async function testSendMessage() {
    try {
        const response = await fetch("http://localhost:4000/api/v1/message/send", {
            method: "POST",
            body: JSON.stringify({
                firstName: "John",
                lastName: "Doe",
                email: "john@example.com",
                phone: "0123456789",
                message: "Hello this is a test message with > 10 chars"
            }),
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        if (!response.ok) throw new Error(JSON.stringify(data));
        console.log("SUCCESS:", data);
    } catch (error) {
        console.error("ERROR:");
        console.error(error.message);
    }
}

testSendMessage();
