const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());               // ✅ allow frontend access
app.use(express.json());

const AFFILIATE_ID = "17359440433";

app.post("/generate", (req, res) => {
  const { shopeeUrl } = req.body;

  if (!shopeeUrl || !shopeeUrl.startsWith("http")) {
    return res.status(400).json({ error: "Invalid Shopee URL" });
  }

  const affiliateLink =
    `https://shopee.vn/universal-link?` +
    `affiliate_id=${AFFILIATE_ID}` +
    `&redirect=${encodeURIComponent(shopeeUrl)}`;

  res.json({ affiliateLink });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ Server running on port", PORT);
});
