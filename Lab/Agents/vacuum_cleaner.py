import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Circle

class VacuumCleaner:
    CLEAN = 'Clean'
    DIRTY = 'Dirty'

    def __init__(self):
        # Initialize user input variables
        self.room_a_status = self.DIRTY
        self.room_b_status = self.DIRTY
        self.current_location = 'A'

    def draw_environment(self):
        plt.figure(figsize=(8, 4))

        colors = {"Clean": "green", "Dirty": "red"}  # Light green for clean, Light coral for dirty
        statuses = {"A": self.room_a_status, "B": self.room_b_status}

        for i, (room, status) in enumerate(statuses.items()):
            plt.subplot(1, 2, i + 1)
            plt.fill_between([0, 1], 0, 1, color=colors[status], alpha=0.5)
            if self.current_location == room:
                bot_position = 0.5
                circle = Circle((bot_position, 0.2), 0.06, color='#000', zorder=2)  # Steel blue for the bot circle
                plt.gca().add_patch(circle)
                plt.text(bot_position, 0.065, "Agent Cleaner", ha='center', va='center', fontsize=10, color='white', fontweight='bold')  # Highlighted bot text
            plt.text(0.5, 0.5, f"Room {room} ({status})", ha='center', va='center', fontsize=12, fontweight='bold', color='white')
            plt.axis('off')

        plt.suptitle("Vacuum Cleaner Environment", fontsize=16, fontweight='bold', color='#4169E1')  # Royal blue for the title
        plt.show()

    def scan_and_clean(self, room):
        status = getattr(self, f"room_{room.lower()}_status")
        if status == self.DIRTY:
            setattr(self, f"room_{room.lower()}_status", self.CLEAN)
            return True
        else:
            return False

    def move_left(self):
        self.current_location = 'A'

    def move_right(self):
        self.current_location = 'B'

    def run(self):
        print("Initial environment (Before cleaning):")
        self.draw_environment()
        while any(status == self.DIRTY for status in [self.room_a_status, self.room_b_status]):
            while self.scan_and_clean(self.current_location):
                print(f"\nCleaning in Room {self.current_location}...")
                time.sleep(1)
                self.draw_environment()

            if self.current_location == 'A':
                self.move_right()
            else:
                self.move_left()

            print(f"\nMoving to Room {self.current_location}...")
            time.sleep(1)
            self.draw_environment()

        print("\nFinal environment (After cleaning):")
        self.draw_environment()
        print("\nAll rooms are clean. Task completed. Run Code Again to make bot clean the room")

if __name__ == "__main__":
    vacuum = VacuumCleaner()
    vacuum.run()

