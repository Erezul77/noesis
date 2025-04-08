// docs/proposals.js
const INFURA_KEY =8543b8c6deaf423d86de49f6f5af1157;
const CONTRACT_ADDRESS = "0x5b8Df9F91d86FB4054b78ed2026500792B539822";
const ABI = [
  "event ProposalCreated(address indexed proposer, string text)"
];

async function fetchProposals() {
  const provider = new ethers.providers.InfuraProvider("sepolia", INFURA_KEY);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
  
  const events = await contract.queryFilter("ProposalCreated", 0, "latest");
  const list = document.getElementById("proposal-list");

  if (events.length === 0) {
    list.innerHTML = "<li>No proposals found.</li>";
    return;
  }

  events.reverse().forEach((event) => {
    const { text } = event.args;
    const li = document.createElement("li");
    
    if (text.startsWith("Reflection IPFS: ")) {
      const cid = text.replace("Reflection IPFS: ", "");
      const link = `https://ipfs.io/ipfs/${cid}`;
      li.innerHTML = `<a href="${link}" target="_blank">${cid}</a>`;
    } else {
      li.textContent = text;
    }

    list.appendChild(li);
  });
}

window.addEventListener("load", fetchProposals);
