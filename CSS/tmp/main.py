from instabot import Bot
import time

class InstagramBot:
    def __init__(self, username, password, delay=30):
        self.bot = Bot()
        self.bot.login(username=username, password=password)
        self.delay = delay
        print(f"Bot created for {username} with a delay of {self.delay} seconds.")

    def send_message(self, message, recipient):
        # Send a message to a user
        time.sleep(self.delay)  # Wait before sending the message
        self.bot.send_message(message, [recipient])
        print(f"Message sent to {recipient}: {message}")
        
    def perform_action(self, message, recipient):
        # Perform action (in this case, sending a message)
        print(f"Performing action after {self.delay} seconds delay.")
        self.send_message(message, recipient)
        
# Replace 'your_username' and 'your_password' with your Instagram credentials
username = "quirky_harsh_7"
password = "Hp3.1428571428571"

# Create an instance of the bot with delay
bot = InstagramBot(username, password)

# Send a test message
message = "Hello, this is a test message!"
recipient = "recipient_username"  # Username of the recipient
bot.perform_action(message, recipient)
