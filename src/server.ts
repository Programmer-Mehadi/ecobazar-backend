import app from "@src/conn"
import config from "./config/index"

import "module-alias/register"
async function main() {
  try {
    app.listen(config.port, () =>
      console.log(`Ecobazar Backend Server running on port ${config.port} 🚀`)
    )
  } catch (err) {
    console.log(err)
  }
}

main().catch((err) => console.log(err))
