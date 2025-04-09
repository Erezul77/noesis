// proposals.js

async function loadProposals() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const contractAddress = "0x5b8Df9F91d86FB4054b78ed2026500792B539822";
  const abi = [
    "function getProposals() public view returns (tuple(uint256 id, address author, string text, uint256 timestamp)[])"
  ];

  const contract = new ethers.Contract(contractAddress, abi, provider);
  const container = document.getElementById("proposals");
  container.innerHTML = "Loading proposals...";

  try {
    const proposals = await contract.getProposals();
    container.innerHTML = "";
    if (proposals.length === 0) {
      container.innerHTML = "<p>No proposals found.</p>";
      return;
    }
    proposals.reverse().forEach((p) => {
      const card = document.createElement("div");
      card.className = "proposal-card";

      // Check for IPFS line
      const ipfsMatch = p.text.match(/IPFS:\s*(Qm[\w\d]+)/i);
      const ipfsLink = ipfsMatch ? `<br><a href='https://ipfs.io/ipfs/${ipfsMatch[1]}' target='_blank'>View Reflection</a>` : "";

      card.innerHTML = `
        <strong>Proposal #${p.id}</strong><br>
        <em>By ${p.author}</em><br>
        <p>${p.text.replace(/\n/g, '<br>')}</p>
        ${ipfsLink}
        <small>${new Date(p.timestamp * 1000).toLocaleString()}</small>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = `<p>Error loading proposals: ${err.message}</p>`;
  }
}
