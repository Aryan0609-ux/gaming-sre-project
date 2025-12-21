let totalRequests = 0;
let errorCount = 0;
let latencyRecords = [];

function simulateTraffic() {
  const trafficText = document.getElementById("traffic");

  // Simulate random users
  const users = Math.floor(Math.random() * 5000) + 500;

  // Simulate random latency and errors per user
  for (let i = 0; i < users; i++) {
    totalRequests++;
    const latency = Math.random() * 2000; // 0-2000ms
    latencyRecords.push(latency);

    const success = Math.random() > 0.1; // 90% success
    if (!success) errorCount++;
  }

  const avgLatency =
    latencyRecords.reduce((a, b) => a + b, 0) / latencyRecords.length;
  const availability = (((totalRequests - errorCount) / totalRequests) * 100).toFixed(2);

  trafficText.innerText = `
Simulated online players: ${users}
Total Requests: ${totalRequests}
Errors: ${errorCount}
Average Latency: ${avgLatency.toFixed(0)} ms
Availability: ${availability}%
Monitoring system stability...
  `;
}

function loadMore() {
  const more = document.getElementById("more-content");
  more.innerText =
    "Future online games like GTA 6 require real-time observability, " +
    "automated scaling, and proactive incident response — core goals of SRE.";
}
