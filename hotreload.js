if (location.href.indexOf("//localhost:") >= 0) {
    let socket = new WebSocket("ws://localhost:9000/");
    socket.onopen = e => console.log('WebSocket connection established');
    socket.onmessage = e => {
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}
