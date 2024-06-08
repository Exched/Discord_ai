# My Discord Bot

This is a simple Discord bot that responds to various commands, including handling user questions via an external API.

## Features

- **Ping**: Responds with the bot's latency.
- **Say/Repeat**: Echoes back a given message.
- **Help**: Provides information on available commands.
- **Ask**: Answers user questions using an external API.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Exched/Discord_ai.git
    cd my-discord-bot
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a configuration file**:
    - Create a `config.json` file in the root directory with the following content:
    ```json
    {
      "intents": ["GUILDS", "GUILD_MESSAGES"],
      "prefix": "!",
      "token": "YOUR_DISCORD_BOT_TOKEN",
      "apiKey": "YOUR_API_KEY",
      "apiUrl": "https://api.example.com/answer"
    }
    ```

    - Replace `YOUR_DISCORD_BOT_TOKEN` with your bot's token from the Discord Developer Portal.
    - Replace `YOUR_API_KEY` with your API key for the external API.
    - Replace `https://api.example.com/answer` with the actual URL of the external API.

## Usage

1. **Run the bot**:
    ```bash
    node index.js
    ```

2. **Commands**:
    - `!ping`: Responds with "Pong!" and the round trip latency.
    - `!say <message>` or `!repeat <message>`: Echoes back the provided message.
    - `!help`: Displays an embed with available commands.
    - `!ask <question>`: Sends the question to the external API and replies with the answer.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
